# Enata Careers with Next.js 14+, Tailwind CSS

This project is a Careers website built with the latest [Next.js 14+](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/). It offers a modern and responsive design, with an intuitive interface for job seekers.

## Features

- **Job Listing:** Users can browse through a list of available jobs.
- **Filters:** Enhanced search functionality with filters for job title, location, and category.
- **Job Details:** Detailed information pages for each job listing.
- **Form Submission:** Users can submit applications on the job detail page, complete with validation to ensure data integrity.

## Pages

The application consists of two main pages:

- `index.page`: The homepage showcasing a list of jobs with filter options for title, location, and category.
- `Job detail page`: Provides a detailed view of a specific job, including a form for application submission.

## API Endpoints

The project utilizes a JSON file for API simulation:

- `list API`: Fetches the list of jobs with optional query parameters for filtering by category, location, and title. Endpoint: `/api/search?category=[Category]&location=[location]&title=[title]`.
- `single Data API`: Retrieves details of a specific job. Endpoint: `/api/singleEntity/[JobId]`.

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
