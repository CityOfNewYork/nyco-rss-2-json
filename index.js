const fetch = require('node-fetch');
const xmltojs = require('xml2js').parseString;
// Test example response of Medium RSS feed
// const junkData = require('response.js');

const sendRes = (status, body) => {
  const response = {
    isBase64Encoded: true | false,
    statusCode: status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  };

  return response;
};

const isObject = obj => typeof obj === 'object' && !Array.isArray(obj);

const walk = (array, fn) => {
  return array.map(item => {
    item = fn(item);

    if (isObject(item)) {
      Object.keys(item).map(i => {
        item[i] = fn(item[i]);
        item[i] = Array.isArray(item[i]) ? walk(item[i], fn) : item[i];
      });
    }

    return Array.isArray(item) ? walk(item, fn) : item;
  });
};

const formatter = item => {
  if (Array.isArray(item) && item.length === 1 && !isObject(item[0])) {
    item = item[0];
  } else if (Array.isArray(item) && isObject(item[0])) {
    cleanUpJsonItem(item[0]);
  } else if (Array.isArray(item)) {
    item.forEach(element => {
      if (typeof element === 'string') {
        element = element;
      }
    });
  } else {
    item = item;
  }
  return item;
};

const cleanUpJsonItem = jsonItem => {
  Object.keys(jsonItem).forEach(key => {
    if (Array.isArray(jsonItem[key]) && jsonItem[key].length === 1) {
      jsonItem[key] = jsonItem[key].shift();
    } else {
      jsonItem[key] = jsonItem[key];
    }

    return jsonItem;
  });
};

exports.handler = async event => {
  let rssFeed = event.queryStringParameters.rssFeed;
  let msgKey = 'error';
  let response = {};

  response[msgKey] = 'No items found.';

  await fetch(rssFeed)
    .then(response => {
      return response.text();
    })
    .then(text => {
      xmltojs(text, (err, result) => {
        if (err) {
          response[msgKey] = err;
        }

        response = walk(result.rss.channel, formatter);
      });
    });

  return sendRes(200, response);
};
