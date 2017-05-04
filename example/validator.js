const common = require("./common")
const Goods = require("./methods").Goods

// 是否已登录
exports.isLogin = () => (cxt, next) => {
    if (cxt.session.user) return next()
    else {
        throw { status: 401, code: 10004 }
    }
}


// 密码是否正确
exports.password = (key = 'request.body.old_password') => (cxt, next) => {
    let user = cxt.session.user
    let password = common.md5(_.get(cxt, key, ''), user.email)

    if (user.password !== password) {
        throw {status: 403, code: 10003}
    }

    return next()
}

// body中是否含有必需的参数
exports.isExist = arr => (cxt, next) => {
    let body = cxt.request.body
    for (let i = 0; i < arr.length; i++) {
        if (!body[arr[i]]) {
            throw { status: 400, code: 40000 }
        }
    }

    return next()
}