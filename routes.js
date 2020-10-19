const router=require('express').Router()

const {
    getAllContact,
    createContact,
    getSingleContact,
    UpdateContact,
    deleteContact
}=require('./controlar')

router.get('/',getAllContact)

router.get('/:id',getSingleContact)

router.post('/',createContact)

router.put('/:id',UpdateContact)

router.delete('/:id',deleteContact)

module.exports=router