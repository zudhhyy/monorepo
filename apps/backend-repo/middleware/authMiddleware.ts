import { Request, Response, NextFunction } from 'express';

import { HttpError } from '../utils/error';
import { auth } from '../config/firebaseConfig';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authorization = req.headers.authorization;

  try {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new HttpError('Unauthorized: No token provided', 401);
    }

    const token = authorization.split(' ')[1];

    const decodedToken = await auth.verifyIdToken(token);

    if (!decodedToken) {
      throw new HttpError('Unauthorized: Invalid token', 401);
    }

    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    next(error);
  }
};
