
const passport =require("passport");
const ServiceUser =require('../Service/User')
const Service=new ServiceUser()
const localStrategy = require('passport-local').Strategy;
 passport.use(new localStrategy(async (username, password, done) => {
    let authenticated_user = await Service.findUser(username, password); //truy vấn db
    if (Object.keys(authenticated_user).length == 0) { //object rỗng trả về false
        //console.log(authenticated_user)
        return done(null, false);
    }
    else {
        return done(null, authenticated_user) //trả về username
    }
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
        
    if (!user) return res.status(401).json({ message: "Wrong login information" });
    else {
        //res.json(user.Email)
        req.user =user.Email;
        next();
    }
})(req, res, next)
}