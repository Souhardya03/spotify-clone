const bcrypt = require("bcrypt");

//Hasing Passowrd

const hashPassword = async(passowrd)=>{
    try {
        const salt = 10;
        const hash = await bcrypt.hash(passowrd, salt);
        return hash;
    } catch (error) {
        console.log(error);
        console.log("Error From hashPassword");
    }
}

//Password Compare
const comparePassword = async(password, hash)=>{
    const result = await bcrypt.compare(password, hash);
    return result;
}


module.exports = {hashPassword, comparePassword};