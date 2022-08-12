import React, { useState } from "react";
import useStyles from "./styles";
import { Paper, TextField, Button, Typography } from "@mui/material";
import FileBase64 from "react-file-base64";
import { useDispatch } from 'react-redux';
import { createPost } from "../../actions/posts";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData))
    console.log('submitted');
  };
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form} `} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth  onChange={(e) => setPostData({ creator: e.target.name })}/>
        <TextField name="title" variant="outlined" label="Title" fullWidth  onChange={(e) => setPostData({ title: e.target.name })}/>
        <TextField name="message" variant="outlined" label="Message" fullWidth  onChange={(e) => setPostData({ message: e.target.name })}/>
        <TextField name="tags" variant="outlined" label="Tags" fullWidth  onChange={(e) => setPostData({ tags: e.target.name })}/>
        <div className={classes.fileInput}><FileBase64 type="file" multiple={false} onDone={({ base64 }) =>   setPostData({ ...postData, selectedFile: base64 }) }/></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Send</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
