# Salama Insurance Portal - Project Structure

## Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Project Structure

```
Salama/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page (redirects to quote-loading)
│   ├── globals.css               # Global styles and Tailwind directives
│   ├── quote-loading/            # Loading/Quote preparation screen
│   │   └── page.tsx
│   ├── quotes/                   # Quote selection (plans & add-ons)
│   │   └── page.tsx
│   ├── order-summary/            # Order summary with pricing
│   │   └── page.tsx
│   ├── upload-documents/         # Document upload screen
│   │   └── page.tsx
│   ├── additional-information/   # Accordion form sections
│   │   └── page.tsx
│   ├── payment/                  # Payment screen
│   │   └── page.tsx
│   └── confirmation/             # Confirmation/Thank you screen
│       └── page.tsx
├── components/                   # Reusable components
│   ├── Header.tsx                # App header with logo
│   ├── WelcomeBanner.tsx         # Welcome banner with user info
│   └── NavigationButtons.tsx     # Bottom navigation buttons
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── next.config.js                # Next.js configuration
└── README.md                     # Project documentation
```

## Screen Flow

1. **Quote Loading** (`/quote-loading`) - Loading animation, auto-redirects to quotes
2. **Quotes** (`/quotes`) - Select insurance plan and add-ons
3. **Order Summary** (`/order-summary`) - Review policy and pricing details
4. **Upload Documents** (`/upload-documents`) - Upload required documents
5. **Additional Information** (`/additional-information`) - Fill in personal, driver, vehicle, and policy details
6. **Payment** (`/payment`) - Enter payment details
7. **Confirmation** (`/confirmation`) - Success screen with policy details

## Design System

### Colors
- **Salama Teal Dark**: `#0D7377` - Primary actions, headers
- **Salama Teal**: `#14A085` - Secondary elements
- **Salama Teal Light**: `#B2DFDB` - Backgrounds, accents
- **Salama Yellow**: `#FFC107` - Highlights, CTAs, selected states

### Components
- Mobile-first responsive design
- Cards with rounded corners
- Consistent spacing and typography
- Touch-friendly button sizes

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Features

- ✅ Mobile-first responsive design
- ✅ Web support with responsive breakpoints
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Consistent design system
- ✅ Interactive UI elements (accordions, toggles, forms)
- ✅ Navigation flow between screens
