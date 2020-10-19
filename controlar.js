const Contact=require('./Contact')

exports.getAllContact=(req,res)=>{
    Contact.find()
        .then(contacts=>{
            res.send(contacts)
        })
        .catch(e=>{
            console.log(e);
            res.json({
                message:'Error Occurred'
            })
        })
}

exports.createContact=(req,res)=>{
    console.log(req.body);
    let {name,email,phone,description}=req.body
    let contact=new Contact({
        name,
        email,
        phone,
        description
    })

    console.log(contact);
    res.send(contact)
    contact.save()
        .then(c=>{
            res.send(c)
        })
        .catch(e=>{
            console.log(e);
            res.json({
                message:'Error Occured'
            })
        })
}

exports.getSingleContact=(req,res)=>{
    let {id}=req.params
    Contact.findById(id)
        .then(contact=>{
            res.json(contact)
        })
        .catch(e=>{
            console.log(e);
            res.json({
                message:'Error Occurred'
            })
        })
}

exports.UpdateContact=(req,res)=>{
     let {name,email,phone}=req.body.contact
    let id=req.body.id
    console.log(id,name,email,phone);
    Contact.findOneAndUpdate({
        _id:id
    },
    {
        $set:{
            name,
            email,
            phone
        }
    },
    {new:true}
    )
    .then(contact=>{
        res.json(contact)
    })
    .catch(e=>{
        console.log(e);
        res.json({
            message:'Error Occurred'
        })
    })
}

exports.deleteContact=(req,res)=>{
    let{id}=req.body
    Contact.findOneAndDelete({_id:id})
        .then(contact=>{
            res.json(contact)
        })
        .catch(e=>{
            console.log(e);
            res.json({
                message:'Error Occurred'
            })
        })
}