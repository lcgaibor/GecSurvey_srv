import { Router } from "express";
import * as UsuarioCtrl from '../controllers/usuario.controller'

const router = Router();

router.post('/', UsuarioCtrl.darUsuarioConEncuestas);
router.put('/:usuario', UsuarioCtrl.actualizarUsuario);

export default router;