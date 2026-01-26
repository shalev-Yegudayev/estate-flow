# EstateFlow

A modern, full-stack real estate portfolio management application built with Next.js. EstateFlow helps property owners efficiently track and manage their real estate properties, tenants, and maintenance tasks in one centralized platform.

## 🚀 Features

- **Property Management**: View and manage your real estate portfolio with detailed property cards
- **Status Tracking**: Monitor property status (Available, Occupied, Maintenance) with visual indicators
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful, intuitive interface built with Radix UI and Tailwind CSS
- **Property Details**: Track bedrooms, bathrooms, square footage, and rental prices
- **Empty State Handling**: Graceful empty states when no properties are available
- **Floating Action Button**: Quick access to add new properties

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Material UI Icons](https://mui.com/material-ui/material-icons/)** - Additional icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Additional Libraries
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[date-fns](https://date-fns.org/)** - Date utilities
- **[react-day-picker](https://react-day-picker.js.org/)** - Date picker component
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Motion](https://motion.dev/)** - Animation library
- **[Recharts](https://recharts.org/)** - Chart library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## 🏃 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd estate-flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
estate-flow/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page with property listings
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components (Radix UI based)
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer component
│   ├── property-card.tsx # Property card component
│   ├── empty-state.tsx   # Empty state component
│   └── floating-action-button.tsx # FAB component
├── types/                # TypeScript type definitions
│   └── property.ts       # Property type definitions
├── styles/               # Global stylesheets
│   ├── index.css        # Main stylesheet
│   ├── theme.css        # Theme variables
│   └── fonts.css        # Font definitions
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Key Components

### PropertyCard
Displays property information including:
- Property image
- Tags (Available/Occupied/Maintenance/For Sale) - displayed above address, supports multiple tags
- Address and property type
- Bedrooms, bathrooms, and square footage
- Rental price

### Navbar
Fixed navigation bar with responsive design

### EmptyState
Shown when no properties are available

### FloatingActionButton
Quick action button for adding new properties

## 🔧 Configuration

### Environment Variables
The application supports the following environment variables:

- `NEXT_PUBLIC_APP_URL` - Public URL of the application (defaults to `https://estateflow.com`)
- `VERCEL_URL` - Automatically set by Vercel deployment

### Tailwind CSS
The project uses Tailwind CSS 4 with custom configuration. Styles are defined in:
- `styles/index.css` - Main stylesheet
- `styles/theme.css` - Theme variables
- `tailwind.config.js` - Tailwind configuration

## 🚢 Deployment

The easiest way to deploy EstateFlow is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🧩 Type Definitions

### Property
```typescript
interface Property {
  id: number;
  image: string;
  tags: ('Available' | 'Occupied' | 'Maintenance' | 'For Sale')[];
  address: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: string;
}
```

## 🔮 Future Enhancements

Potential features to consider:
- [ ] User authentication and authorization
- [ ] Database integration for persistent storage
- [ ] Tenant management
- [ ] Maintenance request tracking
- [ ] Financial tracking and reporting
- [ ] Property search and filtering
- [ ] Property detail pages
- [ ] Image upload functionality
- [ ] Calendar integration for scheduling
- [ ] Email notifications

## 📝 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For questions or suggestions, please contact the project maintainer.

---

Built with ❤️ using Next.js and modern web technologies.
