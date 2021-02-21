import {RequestHandler} from 'express';

export const getVideos: RequestHandler = (req, res) => {
    res.json('getting videos');
};

export const getVideo: RequestHandler = (req, res) => {
    res.json('getting a single video');
};

export const createVideos: RequestHandler = (req, res) => {
    res.json('creating videos');
};

export const deleteVideos: RequestHandler = (req, res) => {
    res.json('deleting videos');
};

export const updateVideos: RequestHandler = (req, res) => {
    res.json('updating videos');
};