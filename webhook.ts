import { readFileSync,existsSync } from 'fs';

webhook();
function webhook() {
  console.log('SENDING WEBHOOK')
  const fetch = require('node-fetch');
  const webhookURL = process.env.GOOGLE_CHAT_WEBHOOK;
  const resultLogFilePath ='./logs/results.log'
  const resultErrorFilePath ='./logs/resultsErrors.log'

  let logFile = '';
  let errorLogFile = '';

  if(existsSync(resultLogFilePath)){
    logFile = readFileSync('./logs/results.log', 'utf-8');
    errorLogFile = readFileSync('./logs/resultsErrors.log', 'utf-8');
  }else{
    logFile = '<br>'+'<b>Test Result: <font color="#ff0000">FAILED</font></b>' +
              '<br>'+'Error Info: '+ 'Failed to start test due to whitelist script error.'
    errorLogFile = '';
  }

  if (errorLogFile != ''){
    errorLogFile = 'Failed Scenarios: <br>' +errorLogFile;
  }

  const data = JSON.stringify({
    "cardsV2": [
      {
        "cardId": "unique-card-id",
        "card": {
          "header": {
            "title": "Jobs Automated Health Check",
            "subtitle": "Staging",
            "imageUrl":
            "https://developers.google.com/chat/images/quickstart-app-avatar.png",
            "imageType": "CIRCLE",
            "imageAltText": "Autobots transform"
          },
          "sections": [
            {
              "header": "Test Result",
              "widgets": [
                {
                  "decoratedText": {
                    "text": logFile
                  }
                },
                {
                  "decoratedText": {
                    "text": errorLogFile
                  }
                },
                {
                  "buttonList": {
                    "buttons": [
                      {
                        "text": "Open Github Actions",
                        "onClick": {
                          "openLink": {
                            "url": "https://github.com/cloudstaff-apps/jobs-automation-test/actions"
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      }
    ]
  })
  let resp;
  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: data,
  }).then((response) => {
    resp = response;
    console.log(response);
    console.log('WEBHOOK SENT')
  });
  return resp;
}
