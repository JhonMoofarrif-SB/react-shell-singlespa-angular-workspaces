import {
  InMemoryCache,
} from '@apollo/client';
import { environment } from '../../environments/environment';

export const apiConfigInit = {
    uri: environment.JELPIT_URI_WIDGET,
    headers: {
      'x-api-key': String(environment.JELPIT_KEY_GRAPHQL),
    },
    cache: new InMemoryCache(),
}