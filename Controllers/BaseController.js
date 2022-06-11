
module.exports= class BaseController {
    sendResponse = (result, req, res) => {
        return new Promise((resolve, reject) => {
                res.status(result.status)
                res.set('Cache-Control', 'no-cache,no-store');
                res.json({result:result.rs})
            resolve();
        });
    };
}