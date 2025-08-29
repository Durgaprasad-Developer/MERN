const UserModel = require('@models/user.js')
// get All Users
exports.getAllUsers = async(req,res)=>{
    try{
        const users = await UserModel.find();
        if(!users) return res.status(404)
            res.status(200).send(users)
    }catch(err){
        res.status(500).send(err.message)
    }
}

// get Users By Id
exports.getUsersById = async(req,res)=>{
    try{
        let userId = req.params._id;
        const user = await UserModel.findById(userId);
        if(!user) return res.status(404).send("invalid user id");
        res.status(200).send(user)
    }catch(err){
        res.status(500).send(err.message)
    }
}

// post create Users
exports.createUsers = async(req,res)=>{
    try{
        const data = req.body
        let newUser = await UserModel.create({
            user_name: data.user_name,
            email: data.email,
            password: data.password,
            phone: data.phone
        });
        res.status(201).send(newUser);
    }catch(err){
        res.status(500).send(err.message);
    }
}

// create Bulk Users
exports.createBulkUsers = async(req,res)=>{
    try{
        let newUsers = await UserModel.insertMany(req.body);
        res.status(201).send(newUsers)
    }catch(err){
        res.status(500).send(err.message)
    }
}

// update User
exports.updateUsers = async(req,res)=>{
    try{
        let userId = req.params._id
        let updateUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set:req.body,
                new: true
            }
        )
        if(!updateUser) return res.status(404).send("invalid user");
        res.status(200).send(updateUser)
    }catch(err){
        res.status(500).send(err.message)
    }
}


exports.deleteBulkUsers = async(req,res)=>{
    try{
        let userId = []

        if(req.body._id && Array.isArray(req.body._id)){
            userId = req.body._id
        }else if (req.params._id){
            userId = [req.params._id]
        }
        if(!userId || !Array.isArray(userId) || userId.length === 0) return res.status(404).send({message: 'Invalid Id'});

        const users = await UserModel.deleteMany({_id:{$in: userId}});

        if(users.deleteCount ===0) return res.status(404).send({message: 'No Products found with this ids'});

        res.status(200).send({deletedCount: users.deleteCount});
    }catch(err){
        res.status(500).send(err.message)
    }
}