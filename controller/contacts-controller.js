import HttpError from '../helper/HttpError.js';
import * as contactsService from '../models/contacts.js';
import { contactAddSchema, contactUpdateSchema } from '../schemas/contact-schema.js';

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

const addNew = async (req, res, next) => {
    try {
        const { error } = contactAddSchema.validate(req.body);
        if(error) {
            return next(HttpError(400, error.message));
        }
        const result = await contactsService.addContact(res.body);
        req.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};

const deleteById = async (req, res, next) => {
    const { id } = req.params;
    const result = await contactsService.removeContact(id);
    if (!result) {
        throw HttpError(404, `Contact with id=${id} not faund`)
    };
    res.json({ message: "Delete success" });
};

const updateById = async (req, res, next) => {
    try {
        const { error } = contactUpdateSchema.validate(req.body);
        if (error) {
            return next(HttpError(400, error.message));
        }
        const { id } = res.params;
        const result = await contactsService.updateContact(id, res.body);
        if (!result) {
            throw HttpError(404, `Contact with id=${id} not faund`)
        };
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};

export default {
    getAll,
    getById,
    addNew,
    updateById,
    deleteById,
}