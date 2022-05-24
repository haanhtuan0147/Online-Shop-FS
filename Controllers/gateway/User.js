
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/User')
const service = new Service();
module.exports=class User {

    findAll = (req, res, next) => {
        service.findAll(req, res, next,baseController)
     }

     create =  (req, res, next) => {
        service.create(req, res, next,baseController)
    }

     update =  (req, res, next) => {
        service.update(req, res, next,baseController)
    }

    findOne =  (req, res, next) => {
        service.findOne(req, res, next,baseController)
    }
    findItem =  (req, res, next) => {
        service.findItem(req, res, next,baseController)
    }
    findUser=  (req, res, next) => {
        service.findUser(req, res, next,baseController)
    }
    RegisterToken=  (req, res, next) => {
        service.RegisterToken(req, res, next,baseController)
    }
    RegisterUser=  (req, res, next) => {
        service.RegisterUser(req, res, next,baseController)
    }
    RegisterAdmin=  (req, res, next) => {
        service.RegisterAdmin(req, res, next,baseController)
    }
    Login=  (req, res, next) => {
        service.Login(req, res, next,baseController)
    }
}