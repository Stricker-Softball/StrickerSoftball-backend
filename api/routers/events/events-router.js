const express = require('express');
const Events = require('./events-model')
const router = express.Router();

module.exports = router;

router.get('/', getEvents)
router.get('/:id', getEventById);
router.post('/', addEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

//Retrieves all events from events table

async function getEvents(req, res) {
    try {
        const events = await Events.find();

        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the events database' });
    }
}

//Retrieves a single event by event id

async function getEventById(req, res) {
    try {
        const { id } = req.params;
        const event = await Events.findById(id);

        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the specified event' });
    }
}

//Posts to events table

async function addEvent(req, res) {
    try {
        const newevent = await Events.add(req.body);

        res.status(201).json(newevent);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to add the event.' });
    }
}

//Posts image to events table 
async function addEventImage() {
    try {

    } catch (err) {

    }
}

//Does a put request to a single event using event id

async function updateEvent(req, res) {
    try {
        const { id } = req.params;
        const updateEvent = await Events.update(id, req.body);

        updateEvent
            ? res.status(200).json({ message: 'successfully updated event' })
            : res.status(404).json({ message: 'event not found' })
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to update the event.' });
    }
}

//Deletes a single event from events table using event id

async function deleteEvent(req, res) {
    try {
        const { id } = req.params;
        const success = await Events.remove(id);

        success ?
            res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to delete the event.' });
    }
}
