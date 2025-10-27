const User = require("../models/User");

const getAllUsers = async(req, res)=>{
    const users = await User.find().select("first_name last_name email -_id").lean();

    if(!users.length){
        return res.status(400).json({ message: "No Users Found" });
    }

    res.json(users);
};

const deleteCurrentUser = async(req, res)=>{
    const userId = await req.user;

    if(!userId) return res.status(401).json({ message: "Unauthorized" });
    
    const deleteUser = await User.findByIdAndDelete(userId);
    
    if(!deleteUser) return res.status(404).json({ message: "User not found" });

    res.clearCookie("jwt");

    res.json({ message: "Account deleted successfully" });
};

module.exports = {
    getAllUsers,
    deleteCurrentUser,
}