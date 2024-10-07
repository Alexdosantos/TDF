import express from "express";
import cors from "cors";
import { routers } from "./routers";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routers);
app.listen(port, () => {
  console.log(`✅  Server is running on port ${port} 🚀🚀🚀`);
});
