const express = require('express');
const router = express.Router();
const { sendMessages,getMessages} = require('../controllers/messageController');

/**
 * @swagger
 * /api/messages:
 *   post:
 *     summary: Send a message
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sender:
 *                 type: string
 *               receiver:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message sent successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Message Not Send
 */
router.post('/messages',sendMessages);

/**
 * @swagger
 * /api/messages:
 *   get:
 *     summary: Get messages between two users
 *     tags: [Messages]
 *     parameters:
 *       - in: query
 *         name: sender
 *         schema:
 *           type: string
 *         required: true
 *       - in: query
 *         name: receiver
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Messages fetched successfully
 *       500:
 *         description: Failed to Fetch Messages
 */

router.get('/messages',getMessages);

module.exports = router;