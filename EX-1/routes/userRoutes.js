import express from 'express';
import { getUsers, getUser, createNewUser, updateExistingUser, deleteExistingUser } from '../controllers/userController.js';
import validateUser from '../middleware/validateUser.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', validateUser, createNewUser);
router.put('/:id', validateUser, updateExistingUser);
router.delete('/:id', deleteExistingUser);

export default router;