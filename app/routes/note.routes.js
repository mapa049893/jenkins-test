const express = require('express');
const router = express.Router();
const dataReq = require('../controllers/note.controller.js');
router.get('/v1/*', dataReq.externalAPIGETV1);
router.post('/v1/*', dataReq.externalAPIPOSTV1);
router.get('/v2/*', dataReq.externalAPIGETV2);
router.post('/v2/*', dataReq.externalAPIPOSTV2);
router.get('/v3/*', dataReq.externalAPIGETV3);
router.post('/v3/*', dataReq.externalAPIPOSTV3);
router.get('/v4/*', dataReq.externalAPIGETV4);
router.post('/v4/*', dataReq.externalAPIPOSTV4);

module.exports = router;