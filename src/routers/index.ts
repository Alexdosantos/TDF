import { Router } from "express";
import { documentRouters } from "./documentRouters/documentRouters";
import { userRouters } from "./userRouters/userRouters";

const routers = Router();

routers.use("/users", userRouters);
routers.use("/documents", documentRouters);

export { routers };
