import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../models/userModel.js';

export const getUsers = (req, res) => {
    const users = getAllUsers();
    res.json(users);
};

export const getUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = getUserById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const createNewUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = createUser({ name, email });
    res.status(201).json(newUser);
};

export const updateExistingUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const updatedUser = updateUser(userId, { name, email });
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });
    res.json(updatedUser);
};

export const deleteExistingUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const deleted = deleteUser(userId);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
};