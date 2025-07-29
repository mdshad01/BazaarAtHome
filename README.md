# 🛒 Bazaar At Home

A full-featured grocery delivery platform built with the MERN stack, bringing fresh groceries and daily essentials right to your doorstep.

<div align="center">
<img src="/public/Homepage.png">
</div>


## 🌟 Features

### 🛍️ Customer Features
- **Product Catalog**: Browse fresh vegetables, fruits, bakery items, grains, and daily essentials
- **Smart Search & Filter**: Find products quickly with advanced search and category filters
- **Shopping Cart**: Add, remove, and manage items with real-time cart updates
- **Secure Authentication**: User registration and login with JWT token-based authentication
- **Dual Payment Options**: 
  - Cash on Delivery (COD)
  - Online payment via Stripe integration
- **Order Management**: Track orders from placement to delivery
- **User Profile**: Manage personal information, addresses, and order history
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

### 🔧 Admin Features
- **Product Management**: Add, edit, and delete products with image uploads
- **Order Management**: View and update order status
- **User Management**: Monitor user accounts and activities
- **Analytics Dashboard**: Track sales, popular products, and user metrics

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Context** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Security & Authentication
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie parsing middleware
- **CORS** - Cross-origin resource sharing

### File Upload & Storage
- **Multer** - File upload middleware
- **Cloudinary** - Cloud-based image storage and optimization

### Payment Integration
- **Stripe** - Payment processing platform

## 🚀 Live Demo

**Website**: [https://your-vercel-deployment-url.vercel.app](https://bazaar-at-home.vercel.app)

### Test Credentials
- **Customer Account**: 
  - Email: `abc@gmail.com`
  - Password: `dabc`

### Test Payment
Use Stripe test card: `4242 4242 4242 4242` with any future expiry date and CVC.

## 🌟 Key Features Implementation

### Secure Authentication
- JWT tokens with HTTP-only cookies
- Password hashing with bcrypt
- Protected routes on both frontend and backend

### Payment Integration
- Stripe payment gateway for secure online transactions
- Cash on Delivery option for flexible payment
- Order confirmation and email notifications

### Image Management
- Cloudinary integration for optimized image storage
- Multiple image upload support for products
- Automatic image compression and resizing

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes
- Touch-friendly interface for mobile users

## 🔒 Security Features

- Input validation and sanitization
- CORS configuration for secure cross-origin requests
- Environment variables for sensitive data
- Secure cookie handling
- Rate limiting and request validation

## 🚀 Deployment

### Backend (Railway/Heroku)
1. Set up environment variables
2. Configure MongoDB Atlas connection
3. Deploy using Git or CLI

### Frontend (Vercel/Netlify)
1. Build the React app: `npm run build`
2. Connect GitHub repository
3. Configure environment variables
4. Deploy automatically on push

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/mdshad01)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/md-shad-alam-ab8121284)
- Email: shadalam0024@gmail.com

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) for the amazing frontend library
- [Node.js](https://nodejs.org/) for the powerful backend runtime
- [MongoDB](https://www.mongodb.com/) for the flexible database
- [Stripe](https://stripe.com/) for secure payment processing
- [Cloudinary](https://cloudinary.com/) for image management
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

If you found this project helpful, please give it a ⭐️!

For support, email shadalam0024@gmail.com or create an issue in the GitHub repository.

---

Made with ❤️ by MD Shad Alam
