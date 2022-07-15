const redis = require('redis'),
  assert = require('assert'),
  db = process.env.REDIS_DB,
  password = process.env.REDIS_PASSWORD

let client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: (options) => {
    if (options.error && options.error.code === 'ECONNREFUSED') return 'The server refused the connection'
    if (options.total_retry_time > 1000 * 60 * 60) return 'Retry time exhausted'
    if (options.attempt > 10) return undefined
    return Math.min(options.attempt * 100, 3000)
  }
})

client.select(db, (err, result) => { });

client.on('error', (err) => {
  assert(err instanceof Error)
  assert(err instanceof redis.AbortError)
  assert(err instanceof redis.AggregateError)
  assert.strictEqual(err.errors.length, 2)
  assert.strictEqual(err.code, 'NR_CLOSED')
})

module.exports = class {
  constructor() {
    this.client = client
  }

  async setKey({ key, value, expireTime = 24 * 60 * 60 }) {
    try {
      return new Promise((resolve, reject) => {
        client.set(key, JSON.stringify(value), 'EX', expireTime, (err, result) => {
          if (!err) resolve(result)
          reject(err)
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  async getKey(key) {
    try {
      return new Promise((resolve, reject) => {
        client.get(key, (err, result) => {
          if (!err) resolve(result)
          reject(err)
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  async removeKey(key) {
    try {
      return new Promise((resolve, reject) => {
        client.del(key, (err, result) => {
          if (!err) resolve(result)
          reject(err)
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }

}
