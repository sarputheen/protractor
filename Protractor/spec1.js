


describe("Enter name feature",function()
{
it("should enter name as Tom",function()
{
    
browser.get('https://angularjs.org/');
element(by.model("yourName")).sendKeys("Tom");
var text =element(by.xpath("//h1[@class='ng-binding']"));
expect(text.getText()).toEqual("Hello Tom!");
});
});

describe("Protractor Demo App",function()
{
    it("Should have title" ,function()
    {

        browser.get("http://juliemr.github.io/protractor-demo/");
        expect(browser.getTitle()).toEqual("Super Calculator");
        browser.driver.sleep(3000);
        element(by.model('first')).sendKeys("Selenium");
        browser.driver.sleep(3000);

    });
});

describe("Multiple Elements",function()
{
    it("Should add one and two" ,function()
    {

        browser.get("http://juliemr.github.io/protractor-demo/");
        expect(browser.getTitle()).toEqual("Super Calculator");
        browser.driver.sleep(3000);
        element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('2');
        element(by.id('gobutton')).click();
        browser.driver.sleep(3000);
        expect(element(by.className('ng-binding')).getText()).toEqual('3');
        
    });
});

describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
  
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  
    it('should add one and two', function() {
      firstNumber.sendKeys(1);
      secondNumber.sendKeys(2);
  
      goButton.click();
      browser.driver.sleep(3000);
      expect(latestResult.getText()).toEqual('3');
    });
  
    it('should add four and six', function() {
      // Fill this in.
      firstNumber.sendKeys(4);
      secondNumber.sendKeys(6);
      goButton.click();
      browser.driver.sleep(3000);
      expect(latestResult.getText()).toEqual('10');
    });
  
    it('should read the value from an input', function() {
        browser.driver.sleep(3000);
      firstNumber.sendKeys(1);
      expect(firstNumber.getAttribute('value')).toEqual('1');
    });
  });