const { User } = require ("../database/models");
const bcrypt = require('bcryptjs');

const authController = {
  showLogin:(req, res) =>{
    return res.render("auth/login");
  },
  showRegister:(req, res) => {
    return res.render("auth/register");
  },
  store: async (req, res) => {
    try {
      const { email, name, username, password } = req.body;
      const hash = bcrypt.hashSync(password, 8);
      const verifyUser = await User.findOne({ where: { email } });
  
      if (verifyUser) {
        return res.render("auth/register", { error: "Não foi possivel realizar o cadastro" });
      }
      const user = await User.create({
        email,
        name,
        username,
        password: hash,
      });

    console.log(user);
    return res.redirect("/home");
    } catch (error) {
      console.log(error);
      return res.render('auth/register', { error: 'Sistema não disponivel' });
    };
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } }); // raw:true
      if (!user || !bcrypt.compareSync(password,user.password)){
        return res. render('auth/login', { error:"Credenciais incorretas"});
      }
      
     // 1 opção de criar sessão -> req.session.user = user;
      // 2 opção de criar sessão -> req.session.user = { id: user.id, username: user.username };
      // 3 opção de criar sessão -> req.session.user = user.toJSON(); // toJSON() é um método do sequelize que retorna um objeto com os dados do usuário
      // 4 Opção é deletar os campos da sessão que não serão utilizados 
      //delete user.password;
      //req.session.user = user;

       Object.assign(req.session, {
        user: {
          id: user.id,
          username: user.username,
        },
      }); 
     
      return res.redirect("/home")
    } catch (error) {
      console.log(error)
      return res.render('auth/login', { error:'Sistema não disponivel' });
    }
  }
};

module.exports = authController;
