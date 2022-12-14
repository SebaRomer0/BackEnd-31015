const DbClient = require('./dbClient')
const Config = require('./config')
const mongoose = require('mongoose')

class MongoClient extends DbClient {

    constructor() {
        this.connected = false
        this.client = mongoose
    }

    async connect() {
        try {
            const url = Config.db.connectString + Config.db.name
            await this.client.connect(url)

            this.connected = true
            console.log('DB mongo connected!');
        } catch (e) {
            throw new Error('error connect mongo ', e)
        }
    }

    async disconnect() {
        try {
            await this.client.connection.close()

            this.connected = false
            console.log('DB mongo disconnected!');
        } catch (e) {
            throw new Error('error disconnect mongo ', e)
        }
    }

}

module.exports = MongoClient