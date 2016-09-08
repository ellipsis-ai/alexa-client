/* Copyright 2016 by Ellipsis, Inc. All Rights Reserved */

var Https       = require('https');
var QueryString = require('querystring');

// Endpoint Configuration
var ENDPOINT_HOST    = 'bot.ellipsis.ai';
var ENDPOINT_PATH    = '/api/post_message';

// Endpoint Query Arguments
var AUTH_TOKEN       = 'Q2kGATdBSTKxtVj8KnGc_g'; // TODO: Needs to come from session
var RESPONSE_CONTEXT = 'slack';                  // TODO: Context should be configurable
var RESPONSE_CHANNEL = 'alexa';                  // TODO: ...as well as the target channel

var Ellipsis = function () {
    // TODO: Initialize Session and associated contextual variables
};

Ellipsis.prototype.performQuery = function (query, callback) {
    console.log("Heard Query: " + query);
    
    // Endpoint Query String
    var post_data = QueryString.stringify({
        'message':         query,
        'responseContext': RESPONSE_CONTEXT,
        'channel':         RESPONSE_CHANNEL,
        'token':           AUTH_TOKEN
    });
    
    // HTTP POST (As WWW Form)
    var post_options = {
        host: ENDPOINT_HOST,
        path: ENDPOINT_PATH,
        method: 'POST',
        headers: {
            'Content-Type':  'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };

    // Creates POST request over HTTPS
    var post_req = Https.request(post_options, function(res) {
        console.log("Query Response Code: HTTP " + res.statusCode);
        var answer = '';

        // Recieved Response Chunk
        res.on('data', function (chunk) {
            answer += chunk;
        });

        // Response Completed
        res.on('end', function () {
            console.log("Answer Recieved: " + answer);
            callback(answer);
        });
    });

    // Kick off the request to Ellipsis
    post_req.write(post_data);
    post_req.end();
    console.log("Query Submitted to Ellipsis...");
};

module.exports = Ellipsis;