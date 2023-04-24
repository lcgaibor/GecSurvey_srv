import Usuario from '../models/usuario.model'

export const loguearUsuario = async (req, res, next) => {
    console.log(req.body)
    if (req.body.usuario == "" || req.body.contrasenia == "") {
        return res.status(200).send();
    }
    const usuario = await Usuario.findOne(req.body);
    if (!usuario) {
        return res.status(200).send();
    } else {
        return res.status(200).json({ status: 1 });
    }
}

export const registrarUsuario = async (req, res) => {
    console.log(req.body)
    if (req.body.usuario == "" || req.body.contrasenia == "") {
        return res.status(200).send();
    }
    const usuario = new Usuario(req.body);
    await usuario.save();
    if (!usuario) {
        return res.status(200).send();
    } else {
        return res.status(200).json({ status: 1 });
    }
}

export const darUsuarioConEncuestas = async (req, res) => {
    if (req.body.usuario == "") {
        return res.status(200).send();
    }

    const usuario = await Usuario.aggregate([
        {
          $match: { usuario: req.body.usuario }
        },
        {
          $lookup: {
            from: 'encuestas',
            localField: 'usuario',
            foreignField: 'usuario',
            as: 'encuestas'
          }
        },
        {
          $project: {
            nombre: 1,
            apellido:1,
            encuestasRealizadas: { $size: '$encuestas' }
          }
        }
      ]);
    if (!usuario) {
        return res.status(200).send();
    } else {
        return res.send(usuario);
    }
}