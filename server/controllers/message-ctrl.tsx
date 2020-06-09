const Message = require('../models/message-model.tsx')
import { Request, Response } from 'express';

const createMessage = async (req : Request, res : Response) => {
  try {
    const body = req.body
    if (!body) {
      return res.status(400).json({
        success: false,
        error: req,
      })
    }
    await body.jsonArray.forEach((field, err) => {
      const message = new Message(field)

      if (!message) {
        return res.status(400).json({ success: false, error: err })
      }

      message
        .save()
        .then(() => {
          return res.status(201).json({
            success: true,
            id: message._id,
            message: 'Message created!',
          })
        })
        .catch(error => {
          return res.status(400).json({
            error,
            message: 'Message not created!',
          })
        })
    })
  } catch (err) {
    res.status(404).send(err.message)
  }
}

const editMessage = async (req : Request, res : Response) => {
  const body = req.body
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }
  Message.findOne({ _id: req.params.id }, (err, message) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Message not found!',
      })
    }
    message.content = body.content
    message
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: message._id,
          message: 'Message updated!',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Message not updated!',
        })
      })
  })
}

const deleteMessage = async (req : Request, res : Response) => {
  await Message.findOneAndDelete({ _id: req.params.id }, (err, message) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!message) {
      return res
        .status(404)
        .json({ success: false, error: `message not found ` })
    }

    return res.status(200).json({ success: true, data: message })
  }).catch(err => console.log(JSON.stringify(err)))
}

const getMessageById = async (req : Request, res : Response) => {
  await Message.findOne({ _id: req.params.id }, (err, message) => {
    if (err) {
      throw res.status(400).json({ success: false, error: err })
    }

    if (!message) {
      throw res
        .status(404)
        .json({ success: false, error: `Message not found ` })
    }
    return res.status(200).json({ success: true, data: message })
  }).catch(err => console.log(JSON.stringify(err)))
}

const getMessages = async (err, req : Request, res : Response, next) => {
  try {
    const messages = await Message.findAll()
    res.status(200).send(messages);
  } catch (err) {
    console.log(JSON.stringify(err))
    res.status(404).send(err.message)
  }
}

module.exports = {
  createMessage,
  editMessage,
  deleteMessage,
  getMessages,
  getMessageById,
}
