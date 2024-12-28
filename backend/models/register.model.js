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
    },
    contactnumber:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,

    }

})

export const Register = mongoose.model("Register", registerSchema)

