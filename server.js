const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const user = [
  {
    status: true,
    user_id: "vikky_singh_10012001",
    email: "vikkysingh2k1@gmail.com",
    roll_number: "11903549",
    number: [],
    alphabets: [],
  },
];

app.post("/bfhl", (req, res) => {
  var dt = req.body.data;
  const num = dt.filter((i) => !isNaN(i));
  const alphabet = dt.filter((i) => {
    return isNaN(i);
  });
  console.log(user[0].number);
  for (var i in num) {
    user[0].number.push(num[i]);
  }
  for (var j in alphabet) {
    user[0].alphabets.push(alphabet[j]);
  }

  res.status(200).json(user);
});

app.listen(process.env.PORT, () => {
  console.log(`port is running at port ${process.env.PORT}`);
});
