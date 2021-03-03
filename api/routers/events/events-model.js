const db = require('../../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

//Returns all events for all users

function find() {
    return db('events').select('title', 'body', 'id');
}

//Returns a single event by event id

function findById(id) {
    return db('events')
        .where({ id })
        .first()
}

//Adds a event to the events 

function add(event) {
    return db('events')
        .insert(event, '*')
}

//Updates a single event

function update(id, changes) {
    return db('events')
        .where({ id })
        .update(changes, '*')
}

//Removes a single event by id

function remove(id) {
    return db('events')
        .where({ id })
        .del();
}