import { Router } from "express";
import partnersRoute from './partners'
let router = Router();

router.use('/partners', partnersRoute);

export default router;