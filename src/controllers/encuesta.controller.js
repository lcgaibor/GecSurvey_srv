import Encuesta from '../models/encuesta.model'
export const registrarEncuesta = async (req, res) => {
    console.log(req.body)
    /*if (req.body.usuario == "") {
        return res.status(200).send();
    }*/ 
    const encuesta = new Encuesta(req.body);
    await encuesta.save();
    if (!encuesta) {
        return res.status(200).send();
    } else {
        return res.status(200).json({ status: 1 });
    }
}