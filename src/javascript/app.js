var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'i5Ggp9W7LclN94Wv2IXP7FqnS',
  consumer_secret: 'ugpwVDFkIpXTG3bB8d1h9e5b1YxcgCzmX8B7Gi6PS9DX1MLXWo',
  access_token_key: '	23433346-T6ZURW2thjBVx9w6oacNg7IPboPGuRugZToMUbeca',
  access_token_secret: 'ntIKosmnTM6mHsVZn0vkcTumtvkxsJVwnnZy5mGYHqUyO'
});


client.get('search/tweets', {q: '#cats'}, function(error, tweets, response) {
   console.log(tweets);
   console.log(response);
});