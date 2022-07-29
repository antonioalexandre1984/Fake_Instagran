const mainController = {
  showHome(req, res) {
    console.log(req.session.user)
    return res.render("home");
  },
  showCreatePublication(req, res) {
    return res.render("post");
  },
};

module.exports = mainController;
