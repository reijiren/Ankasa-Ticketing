const { failed } = require('../helper/response');

module.exports = {
    isAdmin: (req, res, next) => {
        if(req.APP_DATA.tokenDecode.level === 0){
            next();
        }else{
            failed(res, null, 'failed', 'User dont have access');
        }
    },

    isCustomer: (req, res, next) => {
        if(req.APP_DATA.tokenDecode.level === 1){
            next();
        }else{
            failed(res, null, 'failed', 'user dont have access');
        }
    },
}