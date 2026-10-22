# MD Mohayminul Islam Rayhan — Developer Portfolio

A modern, fast, responsive personal developer portfolio website built for **MD Mohayminul Islam Rayhan**, a Computer Science and Engineering student and Frontend Developer from Bangladesh.

Designed with clean typography, strong visual hierarchy, dark theme, and subtle interactive details tailored to showcase real projects, honest skills, and frontend engineering focus.

---

## 🎨 Color Palette

| Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary Background** | `#202734` | Main page background, code blocks, dark surfaces |
| **Secondary Background / Cards** | `#36415A` | Content cards, navbars, borders, subtle highlights |
| **Primary Accent** | `#B7D894` | Primary buttons, active tabs, brand highlights, live pills |
| **Light Accent** | `#E0F8C7` | Soft accent badges, secondary highlights, tags |
| **Body Text** | `#F8FAFC` / `#CBD5E1` | High-contrast readable headings and paragraph body text |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, JavaScript & JSX)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand marks
- **Components**: Reusable, component-driven React architecture
- **Design Principles**: Semantic HTML5, accessible color contrast (WCAG AAA for accent text), zero extraneous libraries, responsive layout.

---

## 📁 Project Structure

```text
rayhan-portfolio/
├── app/
│   ├── globals.css         # Theme tokens, custom scrollbars, reduced-motion rules
│   ├── icon.svg            # Custom rayhan.dev brand favicon
│   ├── layout.js           # Root layout with SEO metadata & viewport setup
│   └── page.js             # Portfolio home page aggregating all sections
├── components/
│   ├── About.jsx           # Bio, CSE education card, focus card, currently learning card
│   ├── Contact.jsx         # Direct email copy button, social links & validated contact form
│   ├── Footer.jsx          # Brand signature, dynamic year, and smooth "back to top"
│   ├── Hero.jsx            # Hero section with status badge, headline & CTAs
│   ├── HeroVisual.jsx      # Interactive code editor visual & tech highlights
│   ├── Icons.jsx           # Clean SVG marks for GitHub and LinkedIn
│   ├── Journey.jsx         # Growth timeline: Fundamentals -> Modern Frontend -> Backend
│   ├── Navbar.jsx          # Sticky header with active scroll spy & mobile menu
│   ├── ProjectCard.jsx     # Card component with custom browser mockups & live links
│   ├── Projects.jsx        # Featured projects showcase
│   └── SectionHeader.jsx   # Reusable section header with monospace label
├── data/
│   └── portfolioData.js    # Single source of truth for bio, skills, projects, and links
├── public/                 # Static assets
└── package.json            # Project dependencies and npm scripts
```

---

## 🚀 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or later recommended; tested on Node v24)
- npm (or yarn / pnpm)

### Installation

1. Navigate to the project root directory:
   ```bash
   cd rayhan-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel

The portfolio is fully optimized for one-click deployment on [Vercel](https://vercel.com/):

### Option 1: Via Vercel Dashboard (Recommended)

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Rayhan's modern portfolio"
   git remote add origin https://github.com/mohayminul94/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Connect your GitHub account and import your repository.
4. Vercel automatically detects **Next.js**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. Click **Deploy**. Your portfolio will be live with a free SSL certificate within seconds!

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to link your project and deploy.

---

## ✏️ How to Customize & Update Content

All personal information, links, skills, and projects are centralized in `data/portfolioData.js`:

- **Change Bio or Tagline**: Edit `personalInfo` in `data/portfolioData.js`.
- **Add / Edit Projects**: Modify or add new objects to the `featuredProjects` array.
- **Update Skills or Technologies**: Update `skillCategories` to adjust your toolkit as you learn new technologies.
- **Update Social Links**: Update `github` and `linkedin` fields in `personalInfo`.

---

## 📄 License

Created for **MD Mohayminul Islam Rayhan**. Available for personal and professional use.
