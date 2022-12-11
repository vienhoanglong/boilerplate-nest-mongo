import { Request, Response } from 'express';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const { code, message } = exception.getResponse() as any;
    const status: HttpStatus = exception.getStatus();
    const httpErrorResponse = {
      status: status || HttpStatus.INTERNAL_SERVER_ERROR,
      message: exception.message,
      errors: [{ code, message }],
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    };
    response.status(httpErrorResponse.status).json(httpErrorResponse);
  }
}
