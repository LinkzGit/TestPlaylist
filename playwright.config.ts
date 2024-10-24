import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL, // Use environment variable for baseURL
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
  timeout: 30000,
  retries: 1,
});

