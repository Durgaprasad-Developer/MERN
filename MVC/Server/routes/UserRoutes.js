const express = require('express');
const {getAllUsers,getUsersById,createUsers, createBulkUsers, updateUsers, deleteBulkUsers} = require('@controllers/userControllers.js');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:_id', getUsersById);

router.post('/', createUsers);

router.post('/bulk', createBulkUsers);

router.put('/:_id', updateUsers);

router.delete('/:_id', deleteBulkUsers);

router.delete('/', deleteBulkUsers);

module.exports = router;
