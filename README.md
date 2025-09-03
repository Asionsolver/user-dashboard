# 🚀 User Dashboard Application

A modern, responsive user dashboard built with **Next.js 15**, **TypeScript**, and enhanced with stunning animations and 3D elements. This project demonstrates a complete user management interface with advanced UI/UX features.

## 🌟 Live Demo

🔗 **[Live Application](https://user-dashboard-eight-chi.vercel.app/)**

## 📋 Project Overview

This dashboard application provides a comprehensive user management interface that fetches data from the JSONPlaceholder API and presents it with modern design patterns, smooth animations, and interactive 3D elements.

### 🎯 Key Features

- ✅ **User List Page** - Complete user listing with grid layout
- ✅ **Search Functionality** - Filter users by name or email
- ✅ **Pagination** - Efficient data pagination with customizable page sizes
- ✅ **User Details Page** - Detailed user information with geographic visualization
- ✅ **Responsive Design** - Seamless experience across all device sizes
- ✅ **3D Globe Visualization** - Interactive Three.js globe showing user locations
- ✅ **Smooth Animations** - Framer Motion powered animations throughout the app
- ✅ **Modern UI Components** - Radix UI and custom components with Tailwind CSS
- ✅ **Error Handling** - Comprehensive error states and loading indicators
- ✅ **TypeScript** - Full type safety throughout the application

## 🛠️ Tech Stack

### Core Technologies

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI, Lucide React

### Animation & 3D

- **Animations:** Framer Motion
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei

### Development Tools

- **Linting:** ESLint 9
- **Package Manager:** npm
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Asionsolver/user-dashboard.git
   cd user-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📁 Project Structure

```text
user-dashboard/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (User List)
│   ├── not-found.tsx      # 404 page
│   ├── globals.css        # Global styles
│   └── users/
│       └── [id]/
│           └── page.tsx   # User Details page
├── components/            # Reusable components
│   ├── ui/               # UI primitives
│   ├── user-list.tsx     # User listing component
│   ├── user-details.tsx  # User details component
│   ├── globe.tsx         # 3D Globe component
│   ├── empty-state.tsx   # Empty state component
│   ├── loader/           # Loading components
│   └── error/            # Error components
├── lib/                  # Utility functions
│   ├── api.ts           # API functions
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Helper utilities
└── public/              # Static assets
    └── textures/        # 3D globe textures
```

## 🎨 Features Deep Dive

### 🔍 Advanced Search & Filtering

- Real-time search across user names and emails
- Debounced input for optimal performance

### 📄 Smart Pagination

- Configurable items per page (6, 12)
- Smooth page transitions
- URL-based pagination state

### 🌍 3D Geographic Visualization

- Interactive Three.js globe
- Real-time user location plotting
- Smooth camera animations to user locations
- Realistic earth textures with cloud layers

### ⚡ Performance Optimizations

- Next.js 15 with Turbopack for faster builds
- Server-side rendering for SEO
- Static generation for user detail pages
- Optimized images and assets

### 🎭 Animation System

- Page transitions with Framer Motion
- Micro-interactions on hover states
- Staggered list animations
- Loading state animations

## 🔧 API Integration

The application integrates with the **JSONPlaceholder API**:

- **Base URL:** `https://jsonplaceholder.typicode.com`
- **Endpoints Used:**
  - `GET /users` - Fetch all users
  - `GET /users/{id}` - Fetch specific user details

## 📱 Responsive Design

The application is fully responsive and optimized for:

- 📱 **Mobile** (320px+)
- 📟 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1440px+)

## 🎯 Component Architecture

### UI Components

- **Reusable primitives** built with Shadcn UI
- **Custom styled components** with Tailwind CSS
- **Consistent design system** across all components

### State Management

- **React hooks** for local state management
- **URL state** for pagination and search persistence
- **Error boundaries** for graceful error handling

## 🚀 Deployment

The application is deployed on **Vercel** with automatic deployments from the main branch.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **JSONPlaceholder** for providing the user API
- **Vercel** for hosting and deployment
- **Next.js team** for the amazing framework
- **Three.js community** for 3D graphics capabilities
- **Framer Motion** for smooth animations
