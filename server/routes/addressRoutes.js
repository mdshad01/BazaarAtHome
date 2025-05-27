import mongoose from "mongoose";
import authUser from "../middlewares/authUser";
import { addAddress, getAddress } from "../controllers/addressController";

const addressRouter = mongoose.Router();

addressRouter.post("/add", authUser, addAddress);
addressRouter.post("/get", authUser, getAddress);

export default addressRouter;
