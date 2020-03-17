const aws = require('aws-sdk');
const functions = require('firebase-functions');

const config = functions.config();
const secrets = config.secrets;

const ses = new aws.SES({
    accessKeyId: secrets.key,
    secretAccessKey: secrets.pass,
    region: 'us-east-1'
});

exports.sendEmail = function(recipient, message, subject) {
    console.log('email sent!', recipient, message, subject);
    return ses
        .sendEmail({
            Source: 'David Durlan <david.aurel001@gmail.com>',
            Destination: {
                ToAddresses: [recipient]
            },
            Message: {
                Body: {
                    Text: {
                        Data: message
                    }
                },
                Subject: {
                    Data: subject
                }
            }
        })
        .promise();
};
