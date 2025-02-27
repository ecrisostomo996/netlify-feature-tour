const fetch = require('node-fetch');

exports.handler = async () => {
  const siteName = process.env.SITE_NAME;
  const deployContext = process.env.DEPLOY_CONTEXT;
  const slackUserId = process.env.SLACK_WEBHOOK_USER_ID;
  const slackChannelId = process.env.SLACK_WEBHOOK_CHANNEL_ID;
  const slackApiSecret = process.env.SLACK_WEBHOOK_API_SECRET;
  const deployId = process.env.DEPLOY_ID;

  const webhookUrl = `https://hooks.slack.com/services/${slackUserId}/${slackChannelId}/${slackApiSecret}`;
  const buildLogUrl = `https://app.netlify.com/sites/${siteName}/deploys/${deployId}`;


  // Only send message during main production deployment
  await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
    blocks: [
        {
          type: 'section',
          text: {
              type: 'mrkdwn',
              text: `There's a new deploy in process for ${deployContext} \n>Visit the <${buildLogUrl} |build log ${process.env.DEPLOY_ID}>`,
            },
        },
      ],
    }),
  });
      


  return {
    statusCode: 200
  };
};
