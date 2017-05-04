let validator = require('../../validator')

exports.put = [
    validator.isLogin(),
    validator.password(),
    async cxt => {

        // ....
        cxt.status = 200
        cxt.body = {
            // ...
        }
    }
]