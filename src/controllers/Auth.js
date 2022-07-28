const { User } = require ("../database/models");
const bcrypt = require('bcryptjs');

const authController = {
  showLogin(req, res) {
    return res.render("auth/login");
  },
  showRegister(req, res) {
    return res.render("auth/register");
  },
  store: async (req, res)=> { 
    const { email, name, username, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const verifyUser = await User.findOne({ where: { email } });
  
    if (verifyUser) {
      return res.render("auth/register", {error:"El usuario ya existe"});
    } 
      const user = await User.create({
        email,
        name,
        username,
        password: hash,
      });    
    console.log(user);
    return res.redirect("/home",(user));
  }
};

module.exports = authController;
