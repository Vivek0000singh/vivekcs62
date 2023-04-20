const express = require("express");
require("./db/config");
const PORT = process.env.PORT || 5000;

const cors = require("cors");
const User = require("./db/User");

const app = express();
app.use(cors());

app.use(express.json());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  resp.send(result);
});

app.listen(PORT);
