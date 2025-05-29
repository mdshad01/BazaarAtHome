import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyAddress, dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const currency = import.meta.env.VITE_CURRENCY;
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [isSeller, setIsSeller] = useState(false);
	const [showUserLogin, setShowUserLogin] = useState(false);
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState({});
	const [searchQuery, setSearchQuery] = useState("");

	// Fetch Saller Status

	const fetchSeller = async () => {
		console.log("Calling fetchSeller...");
		try {
			const { data } = await axios.get("/api/seller/is-auth");
			console.log(data.success);
			if (data.success) {
				setIsSeller(true);
			} else {
				setIsSeller(false);
			}
		} catch (error) {
			setIsSeller(false);
		}
	};

	// fetch all products
	const fetchProducts = async () => {
		setProducts(dummyProducts);
	};

	/* 
	structuredClone(cartItems) creates a deep copy of the cartItems object.
	Then both cartData and cartItems would point to the same object in memory. Changing cartData would also change cartItems unintentionally.

	To safely modify the cart data without mutating the original cartItems object directly, structuredClone is used. This ensures:

	cartData is a completely independent copy.

	Changes to cartData do not affect cartItems until setCartItems(cartData) is explicitly called.
	*/

	//Add product to cart
	const addToCart = (itemId) => {
		let cartData = structuredClone(cartItems);
		if (cartItems[itemId]) {
			cartData[itemId] += 1;
		} else {
			cartData[itemId] = 1;
		}
		setCartItems(cartData);
		// console.log(cartItems);
		toast.success("Added to Cart");
	};
	/*
	cartData[itemId] = quantity;
	Directly sets the new quantity of the specified item in the copied cart.

	Example: If itemId = "abc123" and quantity = 4, the cart becomes { "abc123": 4, ... }
	*/

	//update cart item quantity
	const updateCartItem = (itemId, quantity) => {
		let cartData = structuredClone(cartItems);
		cartData[itemId] = quantity;
		setCartItems(cartData);
		toast.success("Cart Updated");
	};

	//Remove product from cart
	const removeFromCart = (itemId) => {
		let cartData = structuredClone(cartItems);
		if (cartData[itemId]) {
			cartData[itemId] -= 1;
			if (cartData[itemId] === 0) {
				delete cartData[itemId];
			}
		}
		toast.success("Removed from Cart");
		setCartItems(cartData);
	};

	// Get Cart Item Count
	const getCartCount = () => {
		let totalCount = 0;
		for (const item in cartItems) {
			totalCount += cartItems[item];
		}
		return totalCount;
	};

	// Get Cart Total Amount
	const getCartAmount = () => {
		let totalAmount = 0;
		for (const items in cartItems) {
			let itemInfo = products.find((product) => product._id === items);
			if (cartItems[items] > 0) {
				//doubt
				totalAmount += itemInfo.offerPrice * cartItems[items];
			}
		}
		return Math.floor(totalAmount * 100) / 100;
	};

	useEffect(() => {
		fetchSeller();
		fetchProducts();
		console.log("use effect is called");
	}, []);

	const value = {
		navigate,
		user,
		setUser,
		isSeller,
		setIsSeller,
		showUserLogin,
		setShowUserLogin,
		products,
		currency,
		cartItems,
		setCartItems,
		addToCart,
		updateCartItem,
		removeFromCart,
		searchQuery,
		setSearchQuery,
		getCartCount,
		getCartAmount,
		axios,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	return useContext(AppContext);
};
