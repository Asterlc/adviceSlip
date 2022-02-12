const api = require('../api/api');

exports.get = async (req, res, next) => {
    try {
        const { data } = await api.get('advice');
        return res.status(200).send({ Advice: data.slip.advice });
    } catch (error) {
        console.log(`error`, error);
        throw error
    }
}

exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const { data } = await api.get(`advice/${id}`);
        return res.status(200).send({ Advice: data.slip.advice });
    } catch (error) {
        console.log(`error`, error);
        throw error
    }
}