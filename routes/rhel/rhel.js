const express = require('express');
const router = express.Router();

const osData = require('../../resource/os');
const cpuData = require('../../resource/cpu');
const memData = require('../../resource/mem');
const diskData = require('../../resource/disk');
const fsData = require('../../resource/fsSize');
const networkData = require('../../resource/network');

router.get('/', (req, res, send) => {
    res.send('this is rhel page');
})

router.post('/os', async(req, res) => {
    console.log('====== get osData ======');
    res.json(await osData());
})

router.post('/cpu', async (req, res) => {
    console.log('====== get cpuData ======');
    res.json(await cpuData());
});

router.post('/mem', async (req, res) => {
    console.log('====== get memData ======');
    res.json(await memData());
})

router.post('/disk', async(req, res) => {
    console.log('====== get diskData ======')
    res.json(await diskData());
})

router.post('/fs', async(req, res) => {
    console.log('====== get fsData ======')
    res.json(await fsData());
})

router.post('/network', async(req, res) => {
    console.log('====== get networkData ======')
    res.json(await networkData());
})

module.exports = router;