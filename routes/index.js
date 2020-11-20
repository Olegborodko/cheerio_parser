const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const axios = require("axios");

async function fetchHTML(url) {
    const { data } = await axios.get(url)
    return cheerio.load(data)
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function getScript($) {
    const findText = 'window.initData = ';
    const objectSize = Object.size($('script'));
    for (let i=0; i<=objectSize; i++){
        const text = $($('script')[i]).html();
        if (text.indexOf('window.initData = ') > -1) {
            const res = text.substr(findText.length + 1, text.length - findText.length - 3);
            return JSON.parse(res)
        }
    }
    return false
}

router.post('/getData', async function(req, res, next) {
  try{
    const param = req.body

    if (param.url) {
        const $ = await fetchHTML(param.url)
        res.json(getScript($))
        return;
    }

    res.json({ body: false })
  } catch(err){
    console.log(err)
    next(err)
  }
});

module.exports = router
