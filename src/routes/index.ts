import { Router } from "express";
let router = Router();
import apiRoute from './api'
router.use('/api', apiRoute);

export default router;