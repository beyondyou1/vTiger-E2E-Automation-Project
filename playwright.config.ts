import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
 testDir: '.',
  timeout: 20000,                
  expect: {
    timeout: 20000,                
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
    baseURL: 'http://localhost:8889/', 
    trace: 'retain-on-failure',        
   // screenshot: 'only-on-failure',  
   // video: 'retain-on-failure', 
    headless: false,                 
    viewport: { width: 1280, height: 720 },
  },
  
  projects: [
    {
      name: 'setup',
      testMatch: /vTiger-auth-setup\.ts/,
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