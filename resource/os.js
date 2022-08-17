const shell = require('shelljs');
const si = require('systeminformation');


let osData = async() => {
    try {
        let data = new Promise((resolve, reject, err) => {
            if(err){
                reject(new Error('osData error'))
            }
            resolve(si.osInfo())
        });
        return await data;
    } catch (error) {
        return error;
    }
}
module.exports = osData;