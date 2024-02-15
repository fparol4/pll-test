export class HttpError extends Error {
  public status: number
  public errors?: string[]

  constructor(message = 'Unresolved server error', status: number = 500) {
    super(message)
    this.status = status
    this.errors = []
  }
}
