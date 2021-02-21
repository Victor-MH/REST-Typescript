import { Schema, model } from 'mongoose';

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

}, 
{
    versionKey: false,
    timestamps: true,
},
);

export default model('Video', videoSchema);