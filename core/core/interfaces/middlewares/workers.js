const cluster = require('cluster')
require('dotenv').config() // TODO env

var workers = []
if (cluster.isMaster) {
  var numWorkers = process.env.NODE_WORKER || 2

  for (var i = 0; i < numWorkers; i++) {
    var worker = cluster.fork({ RUN_CRON: i === 0, wid: i + 1 })
    workers.push(worker)
  }

  cluster.on('online', (worker) => { })
  worker.on('message', (msg) => { })
  cluster.on('message', (msg) => { })

  cluster.on('exit', (worker, code, signal) => {
    if (workers[0].process.pid == worker.process.pid)
      workers[0] = cluster.fork({ RUN_CRON: true, wid: worker.id })
    else
      cluster.fork({ RUN_CRON: false, wid: worker.id })
  })
} else {
  require('./global').setglobal()
  if (process.env.RUN_CRON === 'true') { }
  else require('../http/www')
}