const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const siteName = process.env.SITE_NAME;
  const deployContext = process.env.CONTEXT;
  const slackUserId = process.env.SLACK_WEBHOOK_USER_ID;
  const slackChannelId = process.env.SLACK_WEBHOOK_CHANNEL_ID;
  const slackApiSecret = process.env.SLACK_WEBHOOK_API_SECRET;
  const deployId = process.env.DEPLOY_ID;

  const webhookUrl = `https://hooks.slack.com/services/${slackUserId}/${slackChannelId}/${slackApiSecret}`;
  const buildLogUrl = `https://app.netlify.com/sites/${siteName}/deploys/${deployId}`;

  console.log(JSON.parse(event.body))

    return {
      statusCode: 200
    };
};
