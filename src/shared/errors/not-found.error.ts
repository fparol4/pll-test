import { HttpError } from './http.error'

export class NotFoundError extends HttpError {
  constructor(message = 'Conteudo não encontrado') {
    super(message, 404)
  }
}
