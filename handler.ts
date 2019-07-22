import { SQSEvent, SNSMessage } from 'aws-lambda'
import 'source-map-support/register';

const escaper = (str: string) => str.replace(/\\n/g, "\\n")
  .replace(/\\'/g, "\\'")
  .replace(/\\"/g, '\\"')
  .replace(/\\&/g, "\\&")
  .replace(/\\r/g, "\\r")
  .replace(/\\t/g, "\\t")
  .replace(/\\b/g, "\\b")
  .replace(/\\f/g, "\\f")

interface CustomJsonMessage {
  type: string,
  hello: string,
}

export const push = async (event: SQSEvent) => {
  const messages: Array<CustomJsonMessage> = event.Records
  .map((message) => {
    const snsMessage = JSON.parse(escaper(message.body)) as SNSMessage
    return JSON.parse(snsMessage.Message) as CustomJsonMessage
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: messages,
      input: event,
    }, null, 2),
  };
}
