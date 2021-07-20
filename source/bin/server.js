const app = require('../app');

app.listen(app.get('port'), () => console.log(`Servidor en http://127.0.0.1:${app.get('port')}`));