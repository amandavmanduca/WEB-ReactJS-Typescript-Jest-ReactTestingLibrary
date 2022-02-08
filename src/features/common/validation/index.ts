
import Validator from 'fastest-validator'
import { formMessages } from './validation-messages'

export const fv = new Validator({
  messages: formMessages,
})
