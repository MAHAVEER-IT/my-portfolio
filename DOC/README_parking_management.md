# Visitor Parking Tracker

<img src="public/icon.png" alt="Visitor Parking Tracker" width="100" height="100"/>


A premium visitor parking management system built with Next.js and Firebase, designed to streamline parking management for businesses and residential complexes.

## 🌐 Live Demo

Check out the live application: [https://visitor-parking-tracker.vercel.app/](https://visitor-parking-tracker.vercel.app/)

## 🚀 Features

### 🚗 Vehicle Registration
- Register visitor vehicles with comprehensive details
- License plate validation with proper format
- Vehicle categorization (Two Wheeler, Four Wheeler, Heavy Vehicle, Electric Vehicle)

### 📅 Parking Slot Booking
- Book parking slots at multiple locations
- Select from premium, standard, and economy parking options
- Automatic calculation of booking duration and cost
- Entry and exit time tracking

### 📊 Dashboard Management
- View and manage active bookings
- Extend or cancel existing bookings
- Track booking history
- Monitor parking availability in real-time

### 👤 User Authentication
- Secure Google Sign-In integration
- User profile management
- Role-based access controls
- Account settings and preferences

## 🛠️ Tech Stack

- **Frontend**:
  - [Next.js 15.4.4](https://nextjs.org/) - React framework with App Router
  - [React 19.1.0](https://reactjs.org/) - UI component library
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [React Hook Form](https://react-hook-form.com/) - Form validation and submission

- **Backend**:
  - [Firebase Authentication](https://firebase.google.com/products/auth) - User authentication with Google Sign-In
  - [Firebase Firestore](https://firebase.google.com/products/firestore) - NoSQL database for user and vehicle data
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Serverless API endpoints

- **Development Tools**:
  - [ESLint](https://eslint.org/) - JavaScript linting
  - [PostCSS](https://postcss.org/) - CSS processing
  - [Geist Font](https://vercel.com/font) - Typography from Vercel

## 📋 Project Structure

```
visitor-parking/
├── app/                      # Next.js App Router directory
│   ├── api/                  # API routes
│   │   ├── auth/             # Authentication endpoints
│   │   ├── bookings/         # Booking management 
│   │   └── regform/          # Vehicle registration
│   ├── components/           # Reusable React components
│   │   ├── Dashboard.js      # Main dashboard interface
│   │   ├── LandingPage.js    # Home page component
│   │   ├── Login.js          # Authentication component
│   │   ├── Navbar.js         # Navigation component
│   │   └── UserRegisterForm.js # Vehicle registration form
│   ├── dashboard/            # Dashboard pages
│   ├── firebase/             # Firebase configuration
│   ├── profile/              # User profile pages
│   ├── signin/               # Authentication pages
│   └── layout.js             # Root layout component
├── public/                   # Static assets
└── package.json              # Project dependencies
```

## ⚙️ Setup and Installation

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Firebase account

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/MAHAVEER-IT/visitor-parking-tracker.git
cd visitor-parking-tracker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a Firebase project and configure authentication:
   - Enable Google Authentication in Firebase Console
   - Create a Firestore database

4. Create a `.env.local` file in the root directory with your Firebase configuration:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📱 Responsive Design

This application is designed to work across all device sizes:
- Mobile-first approach
- Tablet-optimized views
- Desktop-friendly interfaces
- Adaptive layout for different screen sizes

## 🔒 Security Features

- JWT-based authentication
- Firebase Security Rules for data protection
- Input validation and sanitization
- Protected routes and API endpoints

## 🧪 Form Validation

The application uses React Hook Form for efficient form handling with:
- Client-side validation rules
- Custom error messages
- Field-level validation feedback
- License plate format validation

## 🔍 Future Enhancements

- QR code generation for quick check-in/check-out
- Payment integration for premium slots
- Email notifications for booking confirmations
- Visitor pass printing functionality
- Admin dashboard for parking management


## 👨‍💻 Contributors

- [MAHAVEER-IT](https://github.com/MAHAVEER-IT) - Project Lead & Developer

---

Created with ❤️ by MAHAVEER-IT © 2025
