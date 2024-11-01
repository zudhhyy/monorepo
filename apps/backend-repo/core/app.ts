import express from 'express';
import cors from 'cors';

import userRoutes from '../routes/userRoutes';
import { errorHandler } from '../utils/errorHandler';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true }));

app.use('/api/users', userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server is running on port ${PORT}`);
});

export default app;
