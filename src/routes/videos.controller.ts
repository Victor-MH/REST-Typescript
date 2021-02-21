import {RequestHandler} from 'express';
import Video from './Video';

export const getVideos: RequestHandler = async (req, res) => {
    const videos = await Video.find()
    return res.json(videos);
};

export const getVideo: RequestHandler = (req, res) => {
    res.json('getting a single video');
};

export const createVideos: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url});
    if(videoFound)
        return res.status(301).json({message: 'The URL already exists'})
    
    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
};

export const deleteVideos: RequestHandler = (req, res) => {
    res.json('deleting a video');
};

export const updateVideos: RequestHandler = (req, res) => {
    res.json('updating a video');
};