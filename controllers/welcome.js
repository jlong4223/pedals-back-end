exports.welcome = (req, res) => {
  res.json({
    message: "Welcome to the Pedals API",
    routes: "/bikes",
    createdBy: "Jared Long",
  });
};
