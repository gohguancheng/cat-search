require("dotenv").config({ path: "./.env" });
const axios = require("axios");
const express = require("express");

const Router = express.Router();

Router.get("/breeds", async (req, res) => {
  try {
    const response = await axios
      .get(`https://api.thecatapi.com/v1/breeds`, {
        headers: {
          "x-api-key":
            "live_UpHdAzH9Qbm6oZadUP40Lhm3u7dNYT2sydaF8SReQgdUUedCO8iWGa1nwQrua2UK",
        },
      })
      .then((r) => r.data);

    res.status(200).json(response);
  } catch (e) {}
});
Router.get("/random", async (req, res) => {
  try {
    const response = await axios
      .get(`https://api.thecatapi.com/v1/images/search?limit=4`, {
        headers: {
          "x-api-key":
            "live_UpHdAzH9Qbm6oZadUP40Lhm3u7dNYT2sydaF8SReQgdUUedCO8iWGa1nwQrua2UK",
        },
      })
      .then((r) => r.data);

    res.status(200).json(response);
  } catch (e) {}
});

Router.post("/search/:term", async (req, res) => {
  const { term } = req.params;
  try {
    const response = await axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${term}`,
        {
          headers: {
            "x-api-key":
              "live_UpHdAzH9Qbm6oZadUP40Lhm3u7dNYT2sydaF8SReQgdUUedCO8iWGa1nwQrua2UK", //
          },
        }
      )
      .then((r) => r.data);
    res.status(200).json(response);
  } catch (e) {}
});

module.exports = Router;
