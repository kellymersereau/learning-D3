module.exports = {
	consumer_key: 'i5Ggp9W7LclN94Wv2IXP7FqnS',
	consumer_secret:'ugpwVDFkIpXTG3bB8d1h9e5b1YxcgCzmX8B7Gi6PS9DX1MLXWo',
	access_token: '	23433346-VW634IUa7UrjVEMTxd3ipiLho4WYOsXe2Qr9DKWsc',
	access_token_secret: '	zKDfW7YtN4cDdrCZ2XGkPbqcy7bocBpCaIXbt57X4zWEj',
};

'use strict'

const Twitter = require('twitter')
const config = require('../../config')

const client = new Twitter({
  consumer_key: config.twitter.consumerKey,
  consumer_secret: config.twitter.consumerSecret,
  access_token_key: config.twitter.accessTokenKey,
  access_token_secret: config.twitter.accessTokenSecret
})

module.exports = client