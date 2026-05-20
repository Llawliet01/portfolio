# Yug Patel — AI & Full Stack Developer Portfolio

Welcome to my personal portfolio! This is a premium, dark-themed, and interactive portfolio website designed to showcase my engineering journey, technical skills, open-source projects, and GitHub metrics. Inspired by modern AI SaaS platforms and developer-centric aesthetics.

Live GitHub Repository: [https://github.com/Llawliet01/portfolio](https://github.com/Llawliet01/portfolio)

---

## ✨ Features

- **Futuristic & Dark Aesthetic**: Clean layout using a dark navy palette (`#0B0F19`), subtle glows, and glassmorphic panels.
- **Dynamic Git Metrics**: Custom, simulated GitHub contribution calendar matching exactly **20 contributions in the last year** and a dynamically rendered Top Languages SVG doughnut chart reflecting my stack distribution.
- **Interactive PDF Resume**: Seamless embedded PDF previewer so visitors can view or download my resume on-demand.
- **Smooth Framer Motion Transitions**: Rich hover effects, slide-ins, and micro-interactions that make the site feel premium and responsive.
- **Modern Tech Stack**: Bootstrapped with Next.js App Router, using Tailwind CSS for streamlined styling, and Lucide icons.

---

## 🛠️ Tech Stack

- **Core**: Next.js (App Router, JavaScript)
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting / Deploy Ready**: Vercel-optimized

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have **Node.js** (v18.x or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Llawliet01/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open the browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the site running live!

---

## 📦 Project Structure

```text
portfolio/
├── public/                 # Static assets (images, pdf resume, icons)
│   ├── yug_portrait.png    # Portrait image
│   └── yug_patel_resume.pdf# PDF Resume file
├── src/
│   ├── app/                # Next.js App Router (pages & global layout)
│   │   ├── layout.js
│   │   └── page.js
│   └── components/         # Reusable React components
│       ├── Hero.jsx        # Landing hero banner
│       ├── Navbar.jsx      # Navigation bar
│       ├── About.jsx       # Biography & background
│       ├── Skills.jsx      # Tech stack showcase
│       ├── Projects.jsx    # Featured repositories list
│       ├── GitHubActivity.jsx# Contributions graph & doughnut chart
│       ├── Resume.jsx      # PDF reader & credentials
│       ├── Contact.jsx     # Social links & contact cards
│       └── Footer.jsx      # Bottom layout
```

---

## 🔧 Deployment

The easiest way to deploy this portfolio is using the **Vercel Platform**:

1. Push your latest changes to GitHub.
2. Go to [Vercel](https://vercel.com/new).
3. Import your `portfolio` repository.
4. Keep the default build settings (Next.js preset) and click **Deploy**.

---

## 👤 Author

**Yug Patel**  
- **GitHub**: [@Llawliet01](https://github.com/Llawliet01)  
- **LinkedIn**: [Yug Patel](https://www.linkedin.com/in/yug-patel-595ba4264/)  
- **LeetCode**: [@patelyug01234](https://leetcode.com/u/patelyug01234/)  
