import express from 'express';
import { fetchUserDataHandler, loginUserDataHandler, updateUserDataHandler } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/login', loginUserDataHandler);
router.get('/fetch-user-data/:userId', authMiddleware, fetchUserDataHandler);
router.patch('/update-user-data/:userId', authMiddleware, updateUserDataHandler);

export default router;
