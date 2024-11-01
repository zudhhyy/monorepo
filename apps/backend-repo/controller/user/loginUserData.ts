import { auth } from '../../config/firebaseConfig';
import { fetchUserData } from '../../repository/userCollection';
import { HttpError } from '../../utils/error';
import { successHandler } from '../../utils/responseHandlers';
import { NextFunction, Request, Response } from 'express';

export const loginUserDataHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { idToken } = req.body;

  if (!idToken) {
    throw new HttpError('ID token is required', 404);
  }

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;

    let userData = await fetchUserData(uid);

    if (!userData) {
      throw new HttpError('User is not registered yet', 404);
    }

    successHandler(res, userData, 'User successfully login');
  } catch (error) {
    next(error);
  }
};
