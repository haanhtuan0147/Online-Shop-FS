const BaseController =require('./BaseController');
const baseController = new BaseController();
const Service=require('../Service/Uploadimage')
//const service = new Service();
exports.UploadAvatar=(req, res, next) => {
        Service.UploadAvatar(req, res).then(result => {
            baseController.sendResponse(result, req, res); 
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
exports.UploadArray=(req, res, next) => {
        Service.UploadArray(req, res).then(result => {
            baseController.sendResponse(result, req, res); 
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
