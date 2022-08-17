const shell = require('shelljs');
const si = require('systeminformation');


let fsSizeData = async() => {
    try {
        let data = new Promise((resolve, reject, err) => {
            if(err){
                reject(new Error('fsSizeData error'))
            }
            resolve(si.fsSize())
        });
        return await data;
    } catch (error) {
        return error;
    }
}

module.exports = fsSizeData;