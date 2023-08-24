const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use((req, res, next) => {
  const token = req.header("Authorization");
  next();
});

const filterRockets = (rockets, filters) => {
  let { active, success_rate, boosters, search } = filters;

  return rockets.filter((rocket) => {
    if (
      search &&
      !rocket.rocket_name.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    if (active && rocket.active.toString() !== active) {
      return false;
    }

    if (success_rate && rocket.success_rate_pct < parseInt(success_rate)) {
      return false;
    }

    if (boosters && rocket.boosters !== parseInt(boosters)) {
      return false;
    }

    return true;
  });
};

app.get("/rockets", async (req, res) => {
  let { limit, offset, active, success_rate, boosters, search } = req.query;

  limit = parseInt(limit);
  offset = parseInt(offset);

  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");

    const filteredRockets = filterRockets(response.data, {
      active,
      success_rate,
      boosters,
      search,
    });

    const slicedRockets = filteredRockets.slice(offset, offset + limit);

    return res.status(200).json(slicedRockets);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});

app.get("/rocketCount", async (req, res) => {
  let { active, success_rate, boosters, search } = req.query;

  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");

    const filteredRockets = filterRockets(response.data, {
      active,
      success_rate,
      boosters,
      search,
    });

    const rocketCount = filteredRockets.length;

    return res.status(200).json({ rocketCount });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
