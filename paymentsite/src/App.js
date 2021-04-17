import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import queryString from "query-string";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51IanjVEz8LPq8k7H0BLbS52lbQbLzG3XYTjCgMgjmkf96iITG6jftZHWh7n482xkMkKkmzD1kcML4ABDoAMH8LC300XhsYbJM2");

// Showing null, because we will show the result in the app and not on the web
function Success() {
  return (
    <div className="App">
      <p style="text-align: center;">Payment works</p>
    </div>
  );
}

// Showing null, because we will show the result in the app and not on the web
function Failure() {
  return (
    <div className="App">
      <p>Payment failed</p>
    </div>
  );
}

// Showing null, because we will show the result in the app and not on the web
function PaymentInit() {
  return null;
}

function Init() {
  return (
    <div className="App">
      <p>Payment Site</p>
    </div>
  );
}

async function initStripe() {
  const parsed = queryString.parse(window.location.search);
  const sessionId = parsed.session;

  const stripe = await stripePromise;
  await stripe.redirectToCheckout({
    sessionId
  });
}

function Payment() {
  initStripe();
  return null;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Init />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/payment-init">
          <PaymentInit />
        </Route>
        <Route path="/payment-failure">
          <Failure />
        </Route>
        <Route path="/payment-success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
