import HttpError from '../helper/HttpError.js';
import * as contactsService from '../models/contacts.js';

const getAll = async (req, res) => {
    const result = await contactsService.listContacts();
    res.json(result);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await contactsService.getContactById(id);
    if (!result) {
        throw HttpError(404, `Contact with id=${id} not faund`)
    };
    res.json(result);
};

const addNew = async (req, res) => {
    const result = await contactsService.addContact(res.body);
    req.status(201).json(result);
};

export default {
    getAll,
    getById,
    addNew,
}