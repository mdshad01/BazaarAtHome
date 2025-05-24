import express from "express";
import {
	isSellerAuth,
	sellerLogin,
	sellerLogout,
} from "../controllers/sellerController.js";
import authUser from "../middlewares/authUser.js";

const sellerRouter = express.Router();

sellerRoute.post("/", sellerLogin);
sellerRoute.get("/is-auth", authUser, isSellerAuth);
sellerRoute.get("/logout", sellerLogout);

export default sellerRouter;
