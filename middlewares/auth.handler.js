const boom = require('@hapi/boom');
const {config} = require('./../config/config')


function checkApikey(req, res, next){
  const apiKey = req.headers['api']

  if( apiKey === config.apikey){
    next()
  }else{
    next(boom.unauthorized('Unauthorized'))
  }
}

module.exports = {checkApikey}
