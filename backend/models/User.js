const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
    },
    company: {
        type: String,
        required: [true, "Company is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    country: {
        type: String,
        required: [true, "Country is required"],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        match: [/^[0-9()+-\s]*$/, "Invalid phone number"],
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        trim: true,
        minlength: [10, "Message must be at least 10 characters"],
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: null,
    },
    agree: {
    type: Boolean,
    required: [true, "You must accept the policy"],
    validate: {
        validator: (v) => v === true,
        message: "You must accept the policy",
    },
},
},
{ timestamps: true });

module.exports = mongoose.model("User", userSchema);
