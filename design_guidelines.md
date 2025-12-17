# Transportation Service Website - Design Guidelines

## Design Approach
Reference-based approach inspired by **Uber's landing page** (clean, action-oriented design) and **Citymapper** (information clarity and usability). Focus on immediate value communication and seamless user journey from browsing to booking inquiry.

## Color Palette
- **Primary Black:** #000000 - Headers, navigation, key text
- **Secondary Teal:** #09BC8A - CTAs, active states, highlights
- **Accent Grey:** #EEEEEE - Backgrounds, subtle dividers
- **White:** #FFFFFF - Main backgrounds, card surfaces
- **Text Grey:** #333333 - Body text, descriptions
- **Highlight Blue:** #276EF1 - Links, secondary CTAs, informational elements

## Typography
- **Primary Font:** Inter (for UI, body text, data)
- **Display Font:** SF Pro Display (for headlines, hero sections)
- **Hierarchy:**
  - Hero Headlines: SF Pro Display, 56-64px (desktop), 36-42px (mobile), bold
  - Section Headers: SF Pro Display, 36-42px (desktop), 28-32px (mobile), semibold
  - Card Titles: Inter, 20-24px, semibold
  - Body Text: Inter, 16-18px, regular
  - Small Text/Labels: Inter, 14px, medium

## Layout System
- **Container:** max-w-7xl with horizontal padding
- **Spacing Scale:** Use Tailwind units of 6, 12, 24 (p-6, p-12, p-24) - align with specified 24px padding
- **Section Padding:** py-16 to py-24 on desktop, py-12 on mobile
- **Card Spacing:** gap-6 between cards, p-6 internal padding

## Images
**Large Hero Image:** Full-width hero section featuring modern transportation (sleek vehicle, urban mobility scene, or city commute perspective). Image should convey professionalism, reliability, and modern service.

**Service Cards:** Include smaller imagery for each transport type (sedan, SUV, van, etc.) - clean product-style photos on white/light backgrounds.

## Page Structure

### Hero Section
- Full-width background image with overlay gradient (black to transparent)
- Large headline: "Your Reliable Transportation Partner"
- Subheadline describing key value proposition
- Dual CTA buttons (teal "Book Now" + outlined white "View Services") with blur backdrop filter
- Height: 80-90vh

### Services Section
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Cards with rounded corners (rounded-xl), white background, subtle shadow
- Each card includes: service icon/image, service name, route description, capacity info, starting price
- Hover state: slight lift (shadow-lg)

### Pricing Information Section
- Comparison table or card-based pricing display
- 3-4 transport options side-by-side (desktop)
- Clear pricing tiers with feature lists
- Highlight most popular option with teal border/badge

### Service Areas Section
- 2-column layout: Map visual on left, location list on right
- Use placeholder for map integration
- List major service areas with check icons (teal)

### Contact/Booking Form Section
- 2-column layout: Form on left (60%), info/assurance on right (40%)
- Form fields: Name, Email, Phone, Pickup Location, Dropoff Location, Date/Time, Transport Type (dropdown), Message
- Large teal submit button
- Right column: Response time info, contact details, service hours

### Footer
- 3-column layout: Company info, Quick Links, Contact
- Social media icons
- Newsletter signup field
- Copyright and legal links

## Component Specifications

### Buttons
- **Primary (Teal):** bg-[#09BC8A], rounded-lg, px-8 py-4, semibold text, white color
- **Secondary (Outlined):** border-2 border-white/teal, transparent bg, rounded-lg, px-8 py-4
- **Blur backdrop on hero buttons:** backdrop-blur-sm bg-opacity-90
- Mobile: Minimum touch target 48px height, full-width on small screens

### Cards
- White background, rounded-xl, p-6
- Subtle shadow: shadow-md, hover shadow-lg transition
- Border: 1px solid #EEEEEE

### Navigation
- Fixed header on scroll
- Logo left, menu center/right, "Book Now" button right (teal)
- Mobile: Hamburger menu icon, slide-out menu
- Height: 80px desktop, 64px mobile

### Form Inputs
- Border: 2px solid #EEEEEE, focus: border-[#09BC8A]
- Rounded-lg, px-4 py-3
- Placeholder text: text-gray-400

## Mobile Optimization
- Stack all multi-column layouts to single column below 768px
- Increase tap targets: buttons minimum 48px height
- Simplified navigation: hamburger menu
- Hero text: reduce size but maintain hierarchy
- Card grids: single column with full-width cards

## Key Design Principles
1. **Clarity First:** Transportation info must be immediately scannable
2. **Action-Oriented:** CTAs prominent throughout the journey
3. **Trust Signals:** Include service guarantees, response times, coverage areas
4. **Clean Spacing:** 24px as baseline unit, generous whitespace
5. **Mobile Priority:** Touch-friendly, fast-loading, easy navigation

This design delivers a professional, conversion-focused transportation service website that balances visual appeal with functional clarity.