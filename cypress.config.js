const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

//Cucumber setup
async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

//default configurations
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/e2e/features/**/*.feature']
  },
  projectId: '6x2mnt',
  experimentalWebKitSupport: true,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 180000,
  viewportHeight: 700,
  viewportWidth: 1250,
  env: {
    testingEnvironment: "staging",
    production:{
      link: 'https://www.visualcomfort.com.skip.donot.run',
      retailCustomerEmail: 'vijal.patel1@kcsitglobal.com',
      retailCustomerPassword: 'ViJ@TeS2712T',
      tradeCustomerEmail: 'vijal.patel1@kcsitglobal.com',
      tradeCustomerPassword: 'ViJ@TeS2712T',
      wholesaleCustomerEmail: '',
      wholesaleCustomerPassword: '',
      country: 'United States (US)'
    },
    staging:{
      link: 'https://visualcomfortstaging:Pictures1@stage.visualcomfort.com/',
      retailCustomerEmail: 'test-qa1-retail@n8ko5unu.mailosaur.net',
      retailCustomerPassword: 'test#qa1#retail#n8ko5unu#mailosaur#net',
      tradeCustomerEmail: 'test-cypress-trade@n8ko5unu.mailosaur.net',
      tradeCustomerPassword: 'test#cypress#trade#n8ko5unu#mailosaur#net',
      wholesaleCustomerEmail: 'test-qa1-wholesale@n8ko5unu.mailosaur.net',
      wholesaleCustomerPassword: 'test#qa1#wholesale#n8ko5unu#mailosaur#net',
      country: 'United States (US)'
    }
  },
  retries: {
    runMode: 1
  },
});
