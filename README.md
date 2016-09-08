# alexa-client
For integrating Amazon Echo / Alexa Skills API with Ellipsis

# Initialization
Describes the steps/settings that were taken to initialize the services which the Alexa Client uses.

## [Alexa Developer Portal](https://developer.amazon.com/edw/home.html#/)
Note that the settings for the skills developer portal are more-or-less a one-time configuration. There is no need for
any sort of automated deployment as the skill is designed to be as simple and generic as possible.

1. Alexa Skills Kit -> Get Started
2. Add New Skill

### Skill Information
1. Skill Type: Custom Interaction Model
2. Name: Ellipsis Connector
3. Invocation Name: ellipsis
4. Audio Player: No (Might change in the future)

### Interaction Model
1. Intent Schema. See alexa-skill/intent_schema.json
2. Custom Slot Types: None.
3. Sample Utterances: See alexa-skill/utterances.txt

### Configuration
1. Endpoint: Lambda ARN (Amazon Resource Name)
2. Endpoint ARN: `arn:aws:lambda:us-east-1:170937251085:function:AlexaSkillFunction`
3. Account Linking: TBD.

### Test
N/A

### Publishing Information
TBD.

### Privacy & Compliance
TBD.

## AWS Lambda

### Setup Notes
1. As of this writing, Lambda Functions serving the Alexa API only work with the us-east (N. Virginia) region.
2. Runtime is Node.js 4.3
3. Function timeout should account for the Ellipsis endpoint response times (currently set for 30s).
