# Dominion Organization Website

Welcome to the Dominion Organization Website repository! This project is built using Next.js and Sanity CMS to promote charity events, share news, and provide information about the organization. Let's make it happen.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to create a user-friendly and interactive website for the charity organization. The website showcases our mission, upcoming events, latest news, and provides an easy way for visitors to get involved and donate.

## Features

- Dynamic content management with Sanity CMS
- SEO-friendly and fast performance with Next.js
- Responsive design for all devices
- Events calendar and news section
- Contact form for inquiries and support
- Donation integration

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation
- [Sanity CMS](https://www.sanity.io/) - A headless CMS for managing content
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling
- [Vercel](https://vercel.com/) - A cloud platform for deploying Next.js applications

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/skaleway/dominion.git
   cd charity-organization-website
   ```

2. **Install dependencies**
   ```bash
    pnpm isntall
   ```

## Configuration

1. **Set up Sanity CMS:**

   - Create a Sanity project at [Sanity.io](https://www.sanity.io/).
   - Generate an API token for your project.
   - Copy the `sanity.json` configuration file from your Sanity project to the root of this repository.

2. **Configure environment variables:**

   Create a `.env` file in the root of your project and add the following environment variables:

   ```bash
   DATABASE_URL=""
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
   CLERK_SECRET_KEY=""
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=""
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=""
   UPLOADTHING_SECRET=""
   UPLOADTHING_APP_ID=""
   ```

## Running the Project

1. **Run the development server:**

   ```bash
   pnpm dev
   ```

## Deployment

This project can be easily deployed to Vercel. Follow these steps:

1. **Deploy to Vercel:**

   - Push your project to a Git repository.
   - Go to [Vercel](https://vercel.com/) and import your Git repository.
   - Set the required environment variables in the Vercel dashboard.
   - Deploy your project.

## Contributing

We welcome contributions to this project! To contribute, follow these steps:

1. **Fork the repository:**

   Click the "Fork" button at the top right of this page to create a copy of this repository under your GitHub account.

2. **Clone the forked repository:**

   ```bash
   git clone https://github.com/skaleway/dominion.git
   cd dominion
   ```

3. **Create a new branch:**

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make your changes and commit them:**

   ```bash
   git commit -m "feat: Your changes here"
   ```

5. **Push to the branch:**

   ```bash
   git push origin your-feature-branch
   ```

6. **Create a pull request:**

   Open a pull request from your branch to the main branch of this repository and describe your changes.

## License

This project is licensed under the Skaling License. See the [LICENSE](https://skaleway.com) file for details.

---
