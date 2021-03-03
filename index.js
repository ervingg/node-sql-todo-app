const express = require('express');
const path = require('path');
const sequelize = require('./utils/database');

const todoRoutes = require('./routes/todo');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
   res.sendFile('/index.html');
});
app.use(express.json());
app.use('/api/todo', todoRoutes);

async function start() {
   try {
      await sequelize.sync();
      app.listen(PORT);
      console.log('Connection has been established successfully.');
   } catch (error) {
      console.error('Unable to connect to the database:', error);
   }
}

start();