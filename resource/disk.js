const shell = require('shelljs');
const si = require('systeminformation');


let diskData = async() => {
    try {
        let data = new Promise((resolve, reject, err) => {
            if(err){
                reject(new Error('diskData error'))
            }
            resolve(si.blockDevices())
        });
        return await data;
    } catch (error) {
        return error;
    }
}

module.exports = diskData;