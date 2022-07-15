const define = require('node-constants')(exports)

define({
    db: {
        mysql: 'mysql',
        mongo: 'mongo'
    },
    pagesize: 15,
    paging: 1
})