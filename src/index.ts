import { NowRequest, NowResponse } from '@vercel/node';
import { Hello } from './hello';

export default (request: NowRequest, response: NowResponse) => {
  const { name = 'World' } = request.query;
  const result = Hello(name.toString());

  response.status(200).send(result);
};
