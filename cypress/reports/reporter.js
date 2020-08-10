const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Name": "Demo Automation",
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Platform": "Linux Mint",
        "Executed": "Local"
    }
};

reporter.generate(options)