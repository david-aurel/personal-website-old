const aws = require('aws-sdk');
const functions = require('firebase-functions');
// for dev
// const { secrets } = require('./.runtimeconfig.json');

// for production
const secrets = functions.config().secrets;

const ses = new aws.SES({
    accessKeyId: secrets.key,
    secretAccessKey: secrets.secret,
    region: 'us-east-1',
});

exports.sendEmail = function (recipient, message, subject) {
    console.log('email sent!', recipient, message, subject);
    return ses
        .sendEmail({
            Source: 'David Durlan <david.aurel001@gmail.com>',
            Destination: {
                ToAddresses: [recipient],
            },
            Message: {
                Body: {
                    Text: {
                        Data: message,
                    },
                },
                Subject: {
                    Data: subject,
                },
            },
        })
        .promise();
};
