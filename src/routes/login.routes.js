import { Router } from "express";
import * as LoginCtrl from '../controllers/login.controller'

const router = Router();

router.post('/sign', LoginCtrl.loguearUsuario);
router.post('/signup', LoginCtrl.registrarUsuario);

export default router;