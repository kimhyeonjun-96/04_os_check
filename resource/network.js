const shell = require('shelljs');
const si = require('systeminformation');


let networkData = async() => {
    try {
        let data = new Promise((resolve, reject, err) => {
            if(err){
                reject(new Error('networkData error'))
            }
            resolve(si.networkInterfaces())
        });
        return await data;
    } catch (error) {
        return error;
    }
}

module.exports = networkData;