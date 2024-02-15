import { HttpError } from './http.error'

export class BadRequestError extends HttpError {
  constructor(message = 'An error ocurred on this request') {
    super(message, 400)
  }
}
