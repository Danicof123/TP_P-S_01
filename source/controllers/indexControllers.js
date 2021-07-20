const db_menu = require('../model/menu')


const index = (req, res) => {
  const locals = {
    title : "Pimienta & Sal",
    db_menu
  }
  res.render('index', locals);
}

module.exports = {
  index,
}