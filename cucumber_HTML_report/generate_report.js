/* This file contains the code to convert Cucumber JSON output into the HTML 
*/

const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cucumber_HTML_report",
  reportPath: "cucumber_HTML_report/cucumber_report",
  openReportInBrowser: true,
  pageTitle: "Test Report",
  reportName: "Visual Comfort Test Automation Report",
  pageFooter: "<div><p><center>Visual Comfort Test Automation Report</center></p></div>",
  displayDuration: true,
  durationInMS: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "22H2",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Visual Comfort" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "C1" },
    ],
  },
});