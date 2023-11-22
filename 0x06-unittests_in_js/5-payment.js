const Utils = require("./utils");

/**
 * Payment request to the API
 * 
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
