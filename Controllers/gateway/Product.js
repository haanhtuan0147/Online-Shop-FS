
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Product')
const service = new Service();
module.exports=class Product {

    findAll = (req, res, next) => {
        service.findAll(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
     }
     pagecountfindAll = (req, res, next) => {
        service.pagecountfindAll(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
     }

    create =  (req, res, next) => {
        service.create(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }

    update =  (req, res, next) => {
        service.update(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    delete=  (req, res, next) => {
        service.delete(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }

    findOne =  (req, res, next) => {
        service.findOne(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findItem =  (req, res, next) => {
        service.findItem(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    pagecountfindItem =  (req, res, next) => {
        service.pagecountfindItem(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    searchbyname =  (req, res, next) => {
        service.searchbyname(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    pagecountsearchbyname =  (req, res, next) => {
        service.pagecountsearchbyname(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    searchbyprice =  (req, res, next) => {
        service.searchbyprice(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    pagecountsearchbyprice =  (req, res, next) => {
        service.pagecountsearchbyprice(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    searchbypriceBetween =  (req, res, next) => {
        service.searchbypriceBetween(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    pagecountsearchbypriceBetween =  (req, res, next) => {
        service.pagecountsearchbypriceBetween(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    checkArrayCategory =  (req, res, next) => {
        service.checkArrayCategory(req).then((result) => {
            next()
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findAVGNumberStarProduct=  (req, res, next) => {
        service.findAVGNumberStarProduct(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    countpagefindDetailsProduct=  (req, res, next) => {
        service.countpagefindDetailsProduct(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findDetailsProduct=  (req, res, next) => {
        service.findDetailsProduct(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    
}