import { db } from '../config/firebaseConfig';
import { UserType } from '@packages/shared/user';

const USERS_COLLECTION = 'USERS';

export const createUser = async (userId: string, data: UserType) => {
  await db.collection(USERS_COLLECTION).doc(userId).set(data);
};

export const fetchUserData = async (userId: string): Promise<UserType | null> => {
  try {
    const userDoc = await db.collection(USERS_COLLECTION).doc(userId).get();

    if (!userDoc.exists) return null;

    return userDoc.data() as UserType;
  } catch (error) {
    console.error('Error fetching user data:', error);

    throw new Error('Error fetching user data');
  }
};

export const updateUserData = async (userId: string, data: Partial<UserType>): Promise<UserType | null> => {
  try {
    const userDoc = await db.collection(USERS_COLLECTION).doc(userId).get();

    if (!userDoc.exists) return null;

    await db.collection(USERS_COLLECTION).doc(userId).update(data);

    return userDoc.data() as UserType;
  } catch (error) {
    console.error('Error updating user data:', error);

    throw new Error('Error updating user data');
  }
};
