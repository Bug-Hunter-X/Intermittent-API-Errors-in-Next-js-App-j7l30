# Next.js App with Intermittent API Errors

This repository demonstrates a Next.js application that encounters intermittent errors when fetching data from an API.  The API call simulates occasional failures, highlighting the need for robust error handling to create a more resilient and user-friendly application.

## Problem

The application fetches data from an API endpoint (`/api/data`).  However, this API endpoint simulates a scenario where it returns a 500 error (Internal Server Error) 50% of the time. This leads to an inconsistent user experience, where the loading state is sometimes displayed correctly, and sometimes not due to the failed API request.

## Solution

The solution involves improving error handling to gracefully manage API failures. This includes providing better feedback to the user and retry mechanisms to improve reliability.