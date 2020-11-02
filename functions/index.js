const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51H7zikLtZsH7JCNON0lun5wC5Emp2wQmnNmKVQKKChJuHNmgyIrcNqhe30aGd1bKOMdtAr3PMTUYpUoqStfMSj9K00XEh1AiBH"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOMMMMM!!! Total amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

