const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Ma7HJHJg7Kpk61j2ST2u0SwydFzm4jHAIDPOxfKmQ2cM3ylpO21ayvOpjjC1khERfLa92d14tfXC4JtEKC4bgVK001DFpMT28"
);

//app config

const app = express();

//-Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/fir-b229b/us-central1/api
