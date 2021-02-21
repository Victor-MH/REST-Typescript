import {RequestHandler} from 'express';
import Video from './Video';

export const getVideos: RequestHandler = (req, res) => {
    res.json('getting videos');
};

export const getVideo: RequestHandler = (req, res) => {
    res.json('getting a single video');
};

export const createVideos: RequestHandler = async (req, res) => {
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