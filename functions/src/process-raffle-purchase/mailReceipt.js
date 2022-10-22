const AWS = require("aws-sdk");
const functions = require("firebase-functions");
const cTemplate = require("../email-templates/c-raffle-purchase-receipt");
const mrTemplate = require("../email-templates/mr-raffle-purchase-receipt");

module.exports = async (purchaseId, purchase, squareCharge) => {
  AWS.config.update({
    credentials: new AWS.Credentials(
      functions.config().aws.ses_key,
      functions.config().aws.ses_secret
    ),
    region: "us-east-1",
  });

  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const templatePayload = {
    address: `${purchase.address} ${purchase.city}, ${purchase.state} ${purchase.zipCode}`,
    amount: moneyFormatter.format(
      Number(squareCharge.payment.amountMoney.amount) / 100
    ),
    chargedTo: `${squareCharge.payment.cardDetails.card.cardBrand} ending in ${squareCharge.payment.cardDetails.card.last4}`,
    email: purchase.email,
    id: purchaseId,
    name: purchase.name,
    phone: purchase.phone,
    ticketsPurchased: purchase.ticketsPurchased,
  };

  if (purchase.event === "christmas")
    templatePayload.referringFamily = purchase.referringFamily;

  const emailTemplate =
    purchase.event === "christmas"
      ? cTemplate(templatePayload)
      : mrTemplate(templatePayload);

  return new AWS.SES()
    .sendEmail({
      Destination: { ToAddresses: [purchase.email] },
      Source: functions.config().raffle.from_email,
      Message: {
        Body: { Html: { Charset: "UTF-8", Data: emailTemplate.html } },
        Subject: {
          Charset: "UTF-8",
          Data: "SSPP Raffle Purchase Confirmation",
        },
      },
    })
    .promise();
};
