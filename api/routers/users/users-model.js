const db = require('../../../data/dbConfig.js');

module.exports = {
    get,
    login
}

function get(id) {
    let users = db('users');

    if (id) {
        return users.where({ id }).first();
       
    }

    return users
}

function login(username) {
    let query = db('users').select('username', 'id', 'password');

    return query
        .where('username', username)
        .first()
}