# alexa-client
For integrating Amazon Echo / Alexa Skills API with Ellipsis

# Initialization
Describes the steps/settings that were taken to initialize the services which the Alexa Client uses.

## [Alexa Developer Portal](https://developer.amazon.com/edw/home.html#/)
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
2. Endpoint ARN: TBD.
3. Account Linking: TBD.

### Test
N/A

### Publishing Information
TBD.

### Privacy & Compliance
TBD.