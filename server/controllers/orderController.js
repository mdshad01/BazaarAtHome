// Place order COD : /api/order/cod

import Order from "../models/Order";
import Product from "../models/Product";

export const placeOrderCOD = async (req, res) => {
	try {
		const { userId, items, address } = req.body;

		if (!address || items.length == 0) {
			return res.JSON({ success: false, message: "Invalid Data" });
		}
		// claculate using amout
		const amount = await items.reduce(async (acc, item) => {
			const product = await Product.findById(item.product);
			return (await acc) + product.offerPrice * item.quantity;
		}, 0);

		// Add tax charge (2%)

		amount += Math.floor(amount * 0.02);

		await Order.create({
			userId,
			items,
			amount,
			address,
			paymentType: "COD",
		});

		return res.JSON({
			success: true,
			message: "Order Placed Successfully",
		});
	} catch (error) {
		console.log(error.message);
		return res.JSON({ sucess: false, message: error.message });
	}
};

// Get Order By UserId : /api/order/user

export const getUserOrders = async (req, res) => {
	try {
		const { userId } = req.body;
		const orders = await Order.findById({
			userId,
			$or: [{ paymentType: "COD", isPaid: true }],
		})
			.populate("items.product address")
			.sort({ createdAt: -1 });
		res.JSON({ success: true, orders });
	} catch (error) {
		res.JSON({ sucess: false, message: error.message });
	}
};

// Get All Orders( for Seller / admin) : /api/order/seller

export const getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find({
			$or: [{ paymentType: "COD", isPaid: true }],
		})
			.populate("items.product address")
			.sort({ createdAt: -1 });
		res.JSON({ success: true, orders });
	} catch (error) {
		res.JSON({ sucess: false, message: error.message });
	}
};
