import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',             
  timeout: 60000,                
  expect: {
    timeout: 60000,                
  },
  fullyParallel: true,            
  retries:  0, 
  workers:  undefined, 
  reporter: [
    ['html'],                       
    ['allure-playwright'],          
  ],
  use: {
    actionTimeout: 30000,            
   // baseURL: 'https://example.com', 
    trace: 'on-first-retry',        
   // screenshot: 'only-on-failure',  
   // video: 'retain-on-failure', 
    headless: false,                 
    viewport: { width: 1280, height: 720 },
  },
  
  projects: [
    {
      name: 'setup',
      testMatch: /login-setup\.test\.ts/,
    },
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: './playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    }/*,
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
   {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],
  outputDir: './test-results/',     // global folder for screenshots/videos
  globalSetup: undefined,           // optionally add global setup script
  globalTeardown: undefined,        // optionally add global teardown script
});