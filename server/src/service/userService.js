const User = require('../models/user');

class userService{

    async createD(desc, amount, location){
        const newUser = new User({desc, amount, location})
        return newUser.save();
    }

    async getAllUsers(){
        return await User.find();
    }

    async getUserById(userId){
        return await User.findById(userId);
    }

    async updateUser(userId, updateDta){
        return await User.findByIdAndUpdate(userId, updateDta,{
            new:true
        })
    }
    async deleteUser(userId){
        return await User.findByIdAndDelete(userId);
    }
}

module.exports = new userService();