// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Challenge, Post, Comment } = initSchema(schema);

export {
  Challenge,
  Post,
  Comment
};