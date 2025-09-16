# MRInvest - Real Estate Investment Platform

## Overview

MRInvest is a sophisticated fintech platform designed to connect Brazilian investors with premium real estate investment opportunities in the United States. The platform serves as a comprehensive institutional website showcasing luxury property investments, providing educational resources, and facilitating high-ticket real estate transactions with complete legal and financial support.

The application is built as a modern single-page application with a focus on premium user experience, featuring dark theme design, sophisticated animations, and institutional-grade presentation to attract high-net-worth investors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client application is built using React 18 with TypeScript, utilizing Vite as the build tool for optimal development experience and production performance. The UI framework employs shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable components.

**Styling System:**
- TailwindCSS for utility-first styling with custom theme configuration
- Dark mode as the primary theme with sophisticated color palette
- Inter and Poppins fonts for premium typography
- Framer Motion for smooth animations and transitions
- Custom CSS variables for consistent theming across components

**Component Architecture:**
- Modular section-based components (HeroSection, AboutSection, ProjectsSection, etc.)
- Reusable UI components following shadcn/ui patterns
- Theme provider for consistent dark mode implementation
- Responsive design supporting desktop, tablet, and mobile viewports

**State Management:**
- TanStack Query for server state management and caching
- React Context for theme and global state management
- Wouter for lightweight client-side routing

### Backend Architecture
The server is built using Express.js with TypeScript, following a RESTful API pattern. The architecture supports both development and production environments with proper middleware setup.

**API Structure:**
- Express router with `/api` prefix for all application routes
- Comprehensive error handling middleware
- Request/response logging for debugging and monitoring
- CORS and security middleware configuration

**Development Setup:**
- Vite integration for seamless development experience
- Hot module replacement (HMR) support
- Development-specific tooling with Replit integration

### Data Storage Solutions
The application uses PostgreSQL as the primary database with Drizzle ORM for type-safe database operations.

**Database Architecture:**
- PostgreSQL with connection pooling via @neondatabase/serverless
- Drizzle ORM for schema definition and query building
- Type-safe database operations with TypeScript integration
- Migration system for schema versioning

**Schema Design:**
- User management system with authentication support
- Zod integration for runtime validation
- Prepared statements for optimal performance

### Authentication and Authorization
The platform implements session-based authentication with PostgreSQL session storage.

**Session Management:**
- Connect-pg-simple for PostgreSQL session storage
- Express session middleware configuration
- Secure session handling with proper cookie configuration

### External Dependencies

**UI and Styling:**
- Radix UI primitives for accessible component foundation
- Framer Motion for animations and micro-interactions
- TailwindCSS with autoprefixer for consistent cross-browser styling
- Custom theme system with CSS variables

**Development Tools:**
- TypeScript for type safety across the entire application
- ESBuild for production bundling
- Vite for development server and build optimization
- TSX for TypeScript execution in development

**Database and ORM:**
- Drizzle ORM with PostgreSQL adapter
- Drizzle Kit for migrations and schema management
- Zod for schema validation and type inference

**Content and Assets:**
- Image assets hosted externally (Imgur)
- Generated images for property showcases
- Font integration via Google Fonts

**Utility Libraries:**
- Date-fns for date manipulation
- Class-variance-authority for component variants
- CLSX and tailwind-merge for conditional styling
- Nanoid for unique identifier generation

The platform is designed to scale with additional features such as user authentication, investment tracking, document management, and payment processing as the business requirements evolve.