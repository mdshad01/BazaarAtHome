import User from "../models/User.js";

// Update user cartData : /api/cart/update

export const updateCart = async (req, res) => {
	try {
		const { userId, cartItems } = req.body;
		await User.findByIdAndUpdate(userId, { cartItems });
		res.json({ message: true, message: "Cart Updated" });
	} catch (error) {
		console.log(error.message);
		res.json({ message: false, message: error.message });
	}
};
