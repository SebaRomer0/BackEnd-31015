const log4js = require('log4js')
const express = require('express')
const app = express()

log4js.configure({
    appenders: {
        myLoggerConsole: {type: "console"},

        archivoWarn: { type:'file', filename:'warn.log' },
        archivoError: { type:'file', filename:'error.log' },

        loggerWarn:{ type:'logLevelFilter', appender:'archivoWarn', level: 'warn' },
        loggerError:{ type:'logLevelFilter', appender:'archivoError', level: 'error' }
    },
    categories: {
        default: {appenders: ['myLoggerConsole'], level: "trace"},
        logWarn:{ appenders:[ 'loggerWarn' ], level: 'all' },
        logError:{ appenders:[ 'loggerError' ], level: 'all' },
        produccion: { appenders:[ 'loggerError' ], level:'error' }
    }
})

const loggerConsola = log4js.getLogger('default')
const loggerWarn = log4js.getLogger('logWarn')
const loggerError = log4js.getLogger('logError')



app.get('/:num?', (req, res) => {
    let num = req.params.num

    // Peticiones recibidas por el  Servidor
    if(num == 'favicon.ico') {
        // logger22.warn('No es apto para el browser')
        loggerWarn.warn('No es apto para el browser')
        return res.send('ok')
    }

    // Peticion por ruta inexistente
    if(!num) {
        loggerConsola.trace('No viene la data num, default 1')
        num = 1
    } else {
        loggerConsola.info(`Num es ${num}`)
    }

    // Peticiones de error por mal Numero
    let  result = 0
    if(num != 0) {
        result = 500 / num
    }else {
        loggerError.error('El numero tiene que ser distinto de 0')
    }

    loggerConsola.info(`Result is ${result}`)
    res.send({result})
})

app.listen(8080)