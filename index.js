const express = require('express')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3001;

const todolist_model = require('./todolist_model')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

if (process.env.NODE_ENV === "production") {
  // server static content
  // npm run build
  app.use(express.static(path.join(__dirname, "client/build")))
}

app.get('/sorted/:sort_by', (req, res) => {
  todolist_model.getTodolist(req.params.sort_by)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/filter', (req, res) => {
  todolist_model.getFilteredTodolist(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.put('/tododata/:id', (req, res) => {
  todolist_model.updateTodoItem(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/tododata', (req, res) => {
  todolist_model.createTodoItem(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/tododata/:id', (req, res) => {
  todolist_model.deleteTodoItem(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"))
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})