
const passport =require("passport");
const ServiceUser =require('../Service/User')
const Service=new ServiceUser()
const localStrategy = require('passport-local').Strategy;
 passport.use(new localStrategy(async (username, password, done) => {
 await Service.findEmailPass(username, password).then(result=>{
    return done(null, result);
   }).catch((error)=>{
    return done(null, error)
  }); //truy vấn db
}
))
 passport.serializeUser((user, done) => {
    done(null, user); //lấy dữ liệu từ return done done(null, authenticated_user)
})

  passport.deserializeUser(async (username, done) => { //hàm giải mã định dạng
    done(null, username)
})
exports.Authenticate =(req, res, next) => {
    passport.authenticate('local', async(err, user) => {
    if (!user.Email) return res.status(user.status).json({ message: user.rs});
    else {
        //res.json(user.Email)
        req.user =user.Email;
        next();
    }
})(req, res, next)
}