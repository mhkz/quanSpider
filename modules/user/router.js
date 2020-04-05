const ctrl = require("./controller");

exports.userRoute = (app) => {
    app.get('/active', ctrl.active);
    app.post('/login', ctrl.login);
}