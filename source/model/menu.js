const fs = require('fs'),
      path = require('path'),
      db_menu = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'db', 'schema.json'), 'utf-8'));


module.exports = db_menu; 