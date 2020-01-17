const expect = require("chai").expect;
const tools = require("../lib/tools");
const nock = require("nock");

describe("Tools", function () {
  
  describe("printName()", function () {
    it("should print the last name first", function () {
      var results = tools.printName({first: "Alex", last: "Banks"});
      expect(results).to.equal("Banks, Alex");
    });
  });
  
  describe("loadWiki()", function () {
    this.timeout(5000);
    
    it("Load Abraham Lincoln's wikipedia page", function (done) {
      tools.loadWiki({first: "Abraham", last: "Lincoln"}, function (html) {
        expect(html).to.be.ok;
        done();
      });
    });
  });
  
  describe("loadWiki() with nock", function () {
    it("Load Abraham Lincoln's wikipedia page", function (done) {
      nock("https://en.wikipedia.org")
        .get("/wiki/Abraham_Lincoln")
        .reply(200, "Mock Abraham Lincoln Page");
      
      tools.loadWiki({first: "Abraham", last: "Lincoln"}, function (html) {
        expect(html).to.equal("Mock Abraham Lincoln Page");
        done();
      });
    });
  });
});