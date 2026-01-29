const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');

/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Creates a New User
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *      responses:
 *          201:
 *              description: User Create Successfully
 *          400:
 *              description: Bad request
 *          500:
 *              description: Server error
 *      
 */
router.post('/users',createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users',getUsers);

module.exports = router;