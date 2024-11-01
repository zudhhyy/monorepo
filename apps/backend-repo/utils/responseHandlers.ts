import { Response } from 'express';

export const successHandler = (res: Response, data: any, message: string, status: number = 200): void => {
  res.status(status).json({
    success: true,
    message,
    data,
  });
};
