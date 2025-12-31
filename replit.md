# Jillian Rodak Career Studio

## Overview
A professional career coaching website built with React, TypeScript, and Vite. The site features AI-powered career tips using Google's Gemini API, providing an engaging and modern experience for visitors seeking career guidance.

**Purpose**: Portfolio and service website for Jillian Rodak's career coaching business  
**Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS, Google Gemini API  
**Current State**: Fully functional and deployed on Replit

## Recent Changes
- **December 31, 2025**: Contact form and My Story layout updates
  - Replaced contact form with FormSubmit.co (no backend credentials needed)
  - Removed unused /api/contact endpoint and EmailJS code from server.js
  - Updated My Story section layout: image on left with first paragraph + quote beside it, last two paragraphs span full width below

- **December 18, 2025**: Scroll animations and styling updates
  - Added cascade scroll animations to "Why Work With Me" and "Services" sections
  - Created useScrollAnimation hook with Intersection Observer (staggered on desktop, instant on mobile)
  - Implemented BlendedPhoto component for organic photo styling with clip-paths and gradient fades
  - Updated hero image to rectangular frame with gradient fade effect
  - Updated My Story image to elliptical frame with gradient fade
  - Removed AI micro-strategy section (GeminiCareerTip)
  - Removed Instagram icons from contact and sidebar
  - Updated Calendly link and various text content per client feedback
  
- **November 29, 2025**: Initial import from GitHub to Replit
  - Configured Vite to use port 5000 for Replit webview
  - Added HMR configuration for Replit proxy compatibility
  - Set up GEMINI_API_KEY as a secret
  - Created Express backend API to securely proxy Gemini API requests (security fix)
  - Updated frontend service to call backend API instead of exposing API key to browser
  - Configured workflow to run both frontend (port 5000) and backend (port 3001) servers
  - Configured autoscale deployment for production
  - Added .gitignore for Node.js project

## Project Architecture

### Project Structure
```
/
├── components/          # React components
│   ├── AboutPreview.tsx
│   ├── BlendedPhoto.tsx  # Organic photo styling with clip-paths
│   ├── CalendlyEmbed.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   ├── SocialSidebar.tsx
│   ├── Story.tsx
│   └── WhyWorkWithMe.tsx
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.ts  # Cascade scroll animations
├── services/           # Frontend service layer
│   └── geminiService.ts
├── public/             # Static assets
│   ├── jillian-about.jpg
│   ├── jillian-hero.jpg
│   └── CNAME
├── server.js          # Express backend API (handles Gemini API calls)
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
└── types.ts           # TypeScript type definitions
```

### Key Technologies
- **React 19**: Latest React with modern hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS (CDN version)
- **Google Gemini API**: AI-powered career tips
- **Lucide React**: Icon library

### Configuration Files
- `vite.config.ts`: Vite configuration (port 5000, HMR settings)
- `tsconfig.json`: TypeScript compiler options
- `package.json`: Dependencies and scripts

## Development

### Running Locally
The project runs automatically via the "Start application" workflow:
- Command: `npm run dev` (runs both frontend and backend via concurrently)
- Frontend: Vite dev server on port 5000 (accessible via Replit webview)
- Backend: Express API server on port 3001 (localhost only)
- Vite proxies `/api/*` requests to the backend server

### Environment Variables
- `GEMINI_API_KEY`: Google Gemini API key (stored as Replit secret)
  - Used for generating AI-powered career tips
  - Accessed via `process.env.API_KEY` in the code

### Scripts
- `npm run dev`: Start both backend and frontend servers concurrently
- `npm run server`: Start backend API server only (port 3001)
- `npm run client`: Start Vite frontend server only (port 5000)
- `npm run build`: Build frontend for production
- `npm run preview`: Preview production build

## Deployment
Configured for autoscale deployment on Replit:
- **Build command**: `npm run build`
- **Run command**: Backend server + Vite preview server
- **Deployment type**: Autoscale (stateless backend + frontend)

## Features
1. **Hero Section**: Professional introduction with call-to-action
2. **About Preview**: Brief overview of coaching approach
3. **Why Work With Me**: Value proposition section
4. **Story**: Personal background and expertise
5. **Services**: Detailed service offerings
6. **AI Career Tips**: Dynamic tips powered by Gemini API
7. **Contact Form**: Calendly integration for consultations
8. **Social Sidebar**: LinkedIn and social media links

## User Preferences
- No specific preferences documented yet

## Notes
- Uses CDN version of Tailwind CSS (not recommended for production)
- Custom color scheme based on amber tones
- Responsive design for mobile and desktop
- Custom fonts: Inter (sans) and Playfair Display (serif)
