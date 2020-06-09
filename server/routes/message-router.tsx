const express = require('express')
const messageCtrl = require('../controllers/message-ctrl')
const router = express.Router()
export {};

router.post('/message', messageCtrl.createMessage)
router.put('/message/:id', messageCtrl.editMessage)
router.delete('/message/:id', messageCtrl.deleteMessage)
router.get('/message/:id', messageCtrl.getMessageById)
router.get('/messages', messageCtrl.getMessages)

module.exports = router;
