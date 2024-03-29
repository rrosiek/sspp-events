const functions = require("firebase-functions");
const crypto = require("crypto");
const { ApiError, Client, Environment } = require("square");

module.exports = async (purchaseSnap) => {
  const idempotencyKey = crypto.randomBytes(22).toString("hex");
  const purchase = purchaseSnap.data();
  const squareAccessToken = functions.config().square.token;
  const squareEnv = functions.config().square.env;
  const ticketCost =
    purchase.event === "christmas"
      ? functions.config().raffle.christmas_ticket_cost
      : functions.config().raffle.meat_ticket_cost;

  const squareClient = new Client({
    environment:
      squareEnv === "sandbox" ? Environment.Sandbox : Environment.Production,
    accessToken: squareAccessToken,
  });

  const amount =
    purchase.ticketsPurchased * ticketCost + (purchase.ccDonate ? 200 : 0);

  const payment = {
    idempotencyKey,
    sourceId: purchase.squarePurchase.sourceId,
    locationId: purchase.squarePurchase.locationId,
    amountMoney: {
      amount,
      currency: "USD",
    },
    buyerEmailAddress: purchase.email,
  };

  try {
    const { request, result, statusCode } =
      await squareClient.paymentsApi.createPayment(payment);

    console.info(`Square status response: ${statusCode}`);

    await purchaseSnap.ref.update({
      createdAt: new Date(),
      squarePurchase: result,
    });

    return [false, result];
  } catch (err) {
    if (err instanceof ApiError) {
      console.error(err.result);
    } else {
      console.error(err);
    }

    return [err, false];
  }
};
