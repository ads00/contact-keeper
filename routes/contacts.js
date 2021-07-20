const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc   Get all user's contacts
// @access Private
router.get('/', (req, res) => {
    res.send('Get contacts of user');
});

// @route   POST api/contacts
// @desc   Add a new contact
// @access Private
router.post('/', (req, res) => {
    res.send('Adding contact to user');
});

// @route   PUT api/contacts/:id
// @desc   Updating an existing contact
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update contact ' + req.params.id);
});

// @route   DELETE api/contacts
// @desc   Delete a contact
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact ' + req.params.id);
});

module.exports = router;