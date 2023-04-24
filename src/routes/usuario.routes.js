import { Router } from "express";
import * as UsuarioCtrl from '../controllers/usuario.controller'

const router = Router();

router.post('/', UsuarioCtrl.darUsuarioConEncuestas);
//router.post('/signup', LoginCtrl.registrarUsuario);

export default router;