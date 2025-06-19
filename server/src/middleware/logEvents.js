const {format}  = require('date-fns');
const {v4: uuid} = require('uuid');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvent = async(message, fileName)=>{
    const dateTime = `${format(new Date(), 'dd/MM/yy \t HH:mm:ss')}`;
    const logItems = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItems);
    if(!fs.existsSync(path.join(__dirname, '../','logs'))){
        await fsPromises.mkdir(path.join(__dirname,'..','logs'));
    }
    await fsPromises.appendFile(path.join(__dirname,'..','logs',fileName),logItems)
}

const logger = (req,res,next)=>{
    logEvent(`${req.method}\t${req.header.origin}\t${req.url}`, 'logItems.txt');
    console.log(`${req.method}\t${req.path}`);
    next()
}

module.exports = {
    logEvent,
    logger
}