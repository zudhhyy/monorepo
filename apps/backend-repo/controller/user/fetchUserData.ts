import { Request, Response, NextFunction } from 'express';

import { fetchUserData } from '../../repository/userCollection';

import { successHandler } from '../../utils/responseHandlers';
import { HttpError } from '../../utils/error';

export const fetchUserDataHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.params.userId;

  try {
    const userData = await fetchUserData(userId);

    if (!userData) {
      throw new HttpError('User not found', 404);
    }

    successHandler(res, userData, 'User data fetched successfully');
  } catch (error) {
    next(error);
  }
};
