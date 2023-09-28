import getResponseFromAPI from "./0-promise.mjs";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
