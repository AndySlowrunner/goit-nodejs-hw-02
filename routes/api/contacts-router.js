import express from 'express';

import contactsController from '../../controller/contacts-controller';

const router = express.Router()

router.get('/', contactsController.getAll);

router.get('/:contactId', contactsController.getById);

router.post('/', contactsController.addNew)

router.delete('/:contactId', )

router.put('/:contactId', )

export default router;
