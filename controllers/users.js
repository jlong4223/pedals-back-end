const User = require("../models/user");
// requiring jwt
const jwt = require("jsonwebtoken");
//adding the secret
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  getUsers,
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // Send back a JWT and the user
    const token = createJWT(user);
    res.json({ token, user });
  } catch (err) {
    // Probably a duplicate email
    console.log(err);
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token, user });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    { user }, //data payload
    SECRET,
    { expiresIn: "60d" }
  );
}

async function getUsers(req, res) {
  const user = await User.find({});
  res.json(user);
}
