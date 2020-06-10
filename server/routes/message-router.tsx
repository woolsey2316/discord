import * as express from 'express'
import Message from '../models/message-model'
import controller from '../controllers/message-ctrl'
const router = express.Router()
export {};

router.get('/messages', controller.getMessages)
router.get('/message/:id', controller.getMessageById)
router.post('/message', controller.createMessage)
router.put('/message/:id', controller.editMessage)
router.delete('/message/:id', controller.deleteMessage)


export default router;
