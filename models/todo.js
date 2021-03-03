const Sequalize = require('sequelize');
const sequalize = require('../utils/database');

const todo = sequalize.define('Todo', {
   id: {
      type: Sequalize.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
      allowNull: false
   },
   done: {
      type: Sequalize.BOOLEAN,
      allowNull: false
   },
   title: {
      type: Sequalize.STRING,
      allowNull: false
   }
});

module.exports = todo;