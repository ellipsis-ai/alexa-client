/* Copyright 2016 by Ellipsis, Inc. All Rights Reserved */

'use strict';

//
// Required Stuff
//
var AlexaSkill = require('./AlexaSkill');
var Ellipsis   = require('./Ellipsis');

//
// "Constants"
//
var APP_ID               = 'amzn1.ask.skill.7c941a95-1dc6-49a9-a5f7-842788fa6342';
// Canned Text Responses
var LAUNCH_PROMPT        = "Hi, I'm Ellipsis. Ask me anything and I'll try my best to help!";
var LAUNCH_REPROMPT      = "If you need help with what you can ask me, say help.";
var INTENT_QUERY_ERROR   = "Something went horribly, terribly, awfully wrong.";
var INTENT_STOP          = "Cheers!";
var INTENT_CANCELLED     = "Cancelled";
var INTENT_HELP_PROMPT   = "You can also install new behaviors or teach me something new yourself.";
var INTENT_HELP_REPROMPT = "You can say help to see what I can do.";

//
// CTOR
//
var EllipsisConnector = function () {
    AlexaSkill.call(this, APP_ID);
};
EllipsisConnector.prototype             = Object.create(AlexaSkill.prototype);
EllipsisConnector.prototype.constructor = EllipsisConnector;

//
// Handles the invocation of the skill without a command
//
EllipsisConnector.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    response.ask(LAUNCH_PROMPT, LAUNCH_REPROMPT);
};

// Handles invocation of skill intents
EllipsisConnector.prototype.intentHandlers = {
    "QueryIntent": function (intent, session, response) {
        var querySlot = intent.slots.Query;
        if (querySlot && querySlot.value){
            // Pass the handling of the query over to the Ellipsis class
            new Ellipsis().performQuery(querySlot.value.toLowerCase(), function (answer) {
                response.tell(answer);
            });
        } else {
            // The query slot or the value of the slot somehow ended up being null...
            response.tell(INTENT_QUERY_ERROR);
            console.log("Alexa returned a null or empty Query slot");
        }
    },
    "AMAZON.StopIntent": function (intent, session, response) {
        response.tell(INTENT_STOP); // TODO: Make response varied?
    },
    "AMAZON.CancelIntent": function (intent, session, response) {
        response.tell(INTENT_CANCELLED); // TODO: Make response varied?
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask(INTENT_HELP_PROMPT, INTENT_HELP_REPROMPT); // TODO: Make response varied?
    }
};

exports.handler = function (event, context) {
    new EllipsisConnector().execute(event, context);
};
