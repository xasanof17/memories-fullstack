import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes)

// MondoDb Database
const CONNECT_URL =
  "mongodb+srv://xasanof17:j20050924@cluster0.w0ju7ar.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.createConnection(CONNECT_URL, { useNewUrlParser: true });
mongoose
  .connect(CONNECT_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port 5000`))
  )
  .catch((err) => console.log(err));

mongoose.set("autoIndex", false);

