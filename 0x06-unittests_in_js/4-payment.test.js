const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment.js");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function () {
  it("check that Utils.calculateNumber is stubbed", function () {
    const spy = sinon.spy(console, "log");
    const stub = sinon.stub(Utils, "calculateNumber").returns(30);

    sendPaymentRequestToApi(100, 20);

    // Ensure that console.log was called with the expected message
    assert(spy.calledOnceWithExactly("The total is: 30"));

    // Restore the stub after the test
    stub.restore();
  });
});
