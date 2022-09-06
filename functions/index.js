const admin = require("firebase-admin");

admin.initializeApp();

const processRafflePurchase = require("./src/process-raffle-purchase");

exports.processRafflePurchase = processRafflePurchase;
