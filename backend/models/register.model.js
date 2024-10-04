import mongoose, {Schema} from "mongoose"

const registerSchema = new Schema({

    username:{
        type:String,
        required:true,
        unique:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    fullname:{
        type:String,
        required:true,
        unique:true,
    },
    contactnumber:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,

    }

})

export const Register = mongoose.model("Register", registerSchema)

