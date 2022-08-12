import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import images from "../constants/images";
import { Form, Posts } from "./../components";
import useStyles from "../styles/styles";

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="app">
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <Image
            className={classes.image}
            src={images.memories}
            width="60px"
            height="60px"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={4}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}
