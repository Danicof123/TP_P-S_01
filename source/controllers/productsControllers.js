const db_menu = require('../model/menu')

const detail = (req, res) => {
  if(req.params.id){
    const id = Number(req.params.id);
    let plato = '';
  
    if(!isNaN(id))
      plato = db_menu.filter(p => p.id === id)
  
    if(plato.length > 0){
      const locals = {
        title : plato[0].name,
        plato : plato[0],
      }
      
      res.render('detail', locals);
    }
  }

  res.redirect('/producto');
}

const products = (req, res) => {
  const locals = {
    title : "Pimienta & Sal - Menu",
    db_menu
  }
  res.render('producto', locals);
}

module.exports = {
  detail,
  products,
}