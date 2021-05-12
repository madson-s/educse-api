import { Router, Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Message from './apps/models/Message'

const routes = Router()

routes.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

routes.post('/message', async (request, response) => {
  const { text, origin, sent_at } = request.body
  const create_at = new Date().toLocaleString()
  const messageRepository = getRepository(Message)
  const message = messageRepository.create({ text, origin, sent_at, create_at })
  await messageRepository.save(message)
  request.io?.emit('chat message', text)
  response.status(200).json()
})

export default routes;