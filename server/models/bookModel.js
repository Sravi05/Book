import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            requirerd:true,
        },
        author:{
            type:String,
            requirerd:true,
        },
        publishYear:{
            type:Number,
            requirerd:true,
        },
    },{
        timestamps:true,
    }
);
export const Book=mongoose.model("cat",bookSchema);