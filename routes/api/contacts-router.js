import express from 'express';

import contactsController from '../../controller/contacts-controller';
import { isEmptyBody } from '../../middleware/isEmptyBody.js';


const router = express.Router()

router.get('/', contactsController.getAll);

router.get('/:contactId', contactsController.getById);

router.post('/', isEmptyBody, contactsController.addNew);

router.delete('/:contactId', contactsController.deleteById);

router.put('/:contactId', isEmptyBody, contactsController.updateById);

export default router;
