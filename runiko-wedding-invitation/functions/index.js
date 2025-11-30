const functions = require("firebase-functions");
const { HttpsProxyAgent } = require("https-proxy-agent");
const fetch = require("node-fetch");

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyfH8-T1fTbFoLfpwq9TbjBx48-99x2I8d1Z0g5oVbHz21kFvcKHoQ_973QJmVn3uyG/exec";

exports.sheetsProxy = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: req.method,
      headers: { "Content-Type": "application/json" },
      body: req.method === "POST" ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.text();
    res.status(response.status).send(data);
  } catch (err) {
    res.status(500).send({ error: err.toString() });
  }
});
