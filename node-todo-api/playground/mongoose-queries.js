const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5b54c807ec636c2a4a506d81';

if (!ObjectId.isValid(id)) {
  console.log('Id not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todos', todo);
}).catch((e) => console.log(e));
