exports.config={
    seleniumAddress: "http://localhost:4444/wd/hub/",
    specs: ['spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
      }, {
        browserName: 'chrome'
      }],
      onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
     }
      
};