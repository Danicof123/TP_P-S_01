const error404 = (req, res, next) => {
  const error = new Error(),
        locals = {
          title: 'Error 404',
          description: 'Recurso no encontrado',
          error,
        };
  error.status = 404;
  res.render('error404', locals);
  
}

module.exports = {
  error404,
}