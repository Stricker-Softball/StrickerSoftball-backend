const bcrypt = require('bcryptjs');
//this is a comment
exports.seed = function (knex, Promise) {
  const users = [
    { username: 'admin', password: bcrypt.hashSync('softballcoach43', 10)}
]

  return (
    knex
      // Deletes ALL existing entries for users table
      .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
      .then(function () {
        return knex("users").insert(users);
      })
  );
};
