## koa-frouter

File/Folder as `path`, another router middleware for koa.

### Install

    npm i koa-paths-router --save

### Usage

```
router(app, options)
```
- app: {Object} koa instance.
- options: {Object|String->root}
  - root: {String} router directory
  - \_: {Boolean} '_' will be replace by '/'

### Example

**File tree**

```
├── app.js
├── package.json
├── ...
└── routes
    ├── users
    │   └── $uid.js
    │
    ├── posts
    │   ├── month
    │   │   └── $id.js
    │   ├── week
    │   │   └── $id!.js
    │   └── day
    │       └── $id.js
    ├── index.js
    └── links.js
```

**\*uid.js**

```
const validator = require("./validator")
exports.post = [
    validator.isLogin(),
    validator.password(),
    async cxt => {

        // let data = await ....
        cxt.status = 200
        cxt.body = {
            // data
        }
    }
]
```

**\*id.js**

```
exports.get = async cxt => {

    // let data = await ....
    cxt.status = 200
    cxt.body = {
        // data
    }
}
```

**index.js**

```
exports.get = async cxt => {

    // let data = await ....
    cxt.status = 200
    cxt.body = {
        // data
    }
}
```

**links.js**

```
exports.get = cxt => {

    // let data = ....
    cxt.status = 200
    cxt.body = {
        // data
    }
}
```

**app.js**

```
var koa = require('koa');
var router = require('koa-file-router');

var app = koa();
app.use(router(app, {
  root: './router',
  _: true
}));
app.listen(3000);
```

### Test

    npm test

### License

MIT
