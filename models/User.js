import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String},
    password: { type: String},
    email: { type: String}
})

const userModel = model("User", userSchema);

export default userModel;