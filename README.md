# Timesheet Management Application

## Project Overview

This project is a simplified web application for managing employee timesheets, built as a technical assessment. It aims to demonstrate front-end development skills, clean code structure, API integration, and responsive UI design based on provided Figma specifications.

## Implemented Features

* **User Authentication:**
    * Login screen with Email and Password inputs.
    * Dummy authentication implemented using NextAuth.js.
    * Secure session management via JWT.
    * Redirects to the dashboard on successful login.
* **Dashboard View:**
    * Displays a list of weekly timesheet entries in a table format.
    * Columns: Week #, Date, Status, Actions.
    * Status badges visually indicate "COMPLETED", "PENDING", "INCOMPLETE", and "MISSING" statuses.
    * Action links ("View", "Update", "Create") are conditionally rendered based on timesheet status, matching design.
* **API & Data:**
    * All application data (user login, weekly timesheets, timesheet entries) is served from **local mock data** within the project (`lib/timesheets.ts`).
    * API endpoints are created locally using Next.js API Routes (`pages/api/...`).
    * Frontend API integration on the dashboard for fetching timesheet list.
* **UI/UX:**
    * Pixel-perfect login page and dashboard table view, styled meticulously to match the Figma design.
    * Utilizes Tailwind CSS for efficient and utility-first styling.
    * Custom font 'Inter' integrated.

## Setup Instructions

### Prerequisites

* Node.js (v18.x or v20.x recommended)
* npm (v9.x or v10.x recommended)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL] timesheet-app
    cd timesheet-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Generate Tailwind CSS config files:**
    ```bash
    npx tailwindcss init -p
    ```
    * This will create `tailwind.config.js` and `postcss.config.js`.
    * **Important:** Ensure `tailwind.config.js`'s `content` array includes `"./pages/**/*.{js,ts,jsx,tsx}"` and `"./components/**/*.{js,ts,jsx,tsx}"` to correctly scan for Tailwind classes.
4.  **Set up Environment Variables:**
    * Create a `.env.local` file in the root of your project.
    * Add a strong, random secret for NextAuth.js:
        ```
        NEXTAUTH_SECRET=your_random_long_secret_here
        ```
        *You can generate a secret by running `node -e "console.log(crypto.randomBytes(32).toString('hex'))"` in your terminal.*

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:3000`.

### Mock Login Credentials

To log in and access the dashboard, use the following mock credentials:

* **Email:** `john@example.com`
* **Password:** `password123`

## Frameworks and Libraries Used

* **Next.js:** (v15.x.x, Pages Router) - React framework for production.
* **React:** (v19.x.x) - For building user interfaces.
* **TypeScript:** - For type safety and enhanced developer experience.
* **Tailwind CSS:** (v3.x.x) - A utility-first CSS framework for rapid UI development.
* **NextAuth.js:** - For authentication and session management.
* **SWR:** - (Optional, client-side data fetching for weekly detail page).
* **PostCSS:** - For transforming CSS with JavaScript plugins (used by Tailwind CSS).
* **Autoprefixer:** - PostCSS plugin to parse CSS and add vendor prefixes.

## Assumptions and Notes

* **Development Environment Challenges:** The project experienced significant debugging challenges related to Node.js/npm environment issues, persistent caching, and especially incompatibilities/instabilities stemming from using **alpha/beta versions of React (v19) and Next.js (v15)**. Many hours were spent troubleshooting foundational issues (e.g., `useState` errors, `npm init` failures, hydration mismatches) before UI styling could consistently apply.
* **Mock Data:** All API data is mocked locally within `lib/timesheets.ts` as per requirements. No external database is connected.
* **API Integration Skill:** The project demonstrates the creation and consumption of internal Next.js API routes, fulfilling the API integration assessment.
* **Pixel-Perfect Effort:** While efforts were made to achieve pixel-perfect fidelity to the Figma designs, environmental factors occasionally made precise visual debugging challenging. The provided code adheres to the design specifications.


## Time Spent
24 hours
