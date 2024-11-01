import { Request, Response, NextFunction } from 'express';
import { updateUserData } from '../../repository/userCollection';

import { successHandler } from '../../utils/responseHandlers';
import { HttpError } from '../../utils/error';

export const updateUserDataHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.params.userId;
  const updateData = req.body;

  try {
    const data = await updateUserData(userId, updateData);

    if (!data) {
      throw new HttpError('User not found', 404);
    }

    successHandler(res, data, 'User data updated successfully');
  } catch (error) {
    next(error);
  }
};
