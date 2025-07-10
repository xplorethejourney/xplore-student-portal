export class CustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = "CustomError";
    Error.captureStackTrace(this, this.constructor);
  }
}

// usage:
export const errorHandler = (statusCode: number, message: string) => {
  return new CustomError(statusCode, message);
};
