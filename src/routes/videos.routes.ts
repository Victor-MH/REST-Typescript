import {Router} from 'express';
import * as videoCtrlr from './videos.controller';
const router = Router();

router.get('/videos', videoCtrlr.getVideos);
router.get('/videos/:id', videoCtrlr.getVideos);
router.post('/videos', videoCtrlr.createVideos);
router.put('/videos/:id', videoCtrlr.updateVideos);
router.delete('/videos/:id', videoCtrlr.deleteVideos);




export default router;