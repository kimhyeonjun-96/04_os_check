const shell = require('shelljs');
const si = require('systeminformation');


let cpuData = async() => {
    try {
        let data = new Promise((resolve, reject, err) => {
            if(err){
                reject(new Error('cpuData error'))
            }
            resolve(si.cpuCurrentSpeed())
        });
        return await data;
    } catch (error) {
        return error;
    }
}
module.exports = cpuData;