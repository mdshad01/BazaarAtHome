import express from "express";
import {
	isSellerAuth,
	sellerLogin,
	sellerLogout,
} from "../controllers/sellerController.js";
import authUser from "../middlewares/authUser.js";

const sellerRouter = express.Router();

sellerRouter.post("/", sellerLogin);
sellerRouter.get("/is-auth", authUser, isSellerAuth);
sellerRouter.get("/logout", sellerLogout);

export default sellerRouter;
