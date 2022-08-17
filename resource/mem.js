const shell = require('shelljs');
const si = require('systeminformation');


let memData = async() => {
    try {
        let data = new Promise((resolve, reject, err) => {
            if(err){
                reject(new Error('memData error'))
            }
            resolve(si.mem())
        });
        return await data;
    } catch (error) {
        return error;
    }
}

module.exports = memData;