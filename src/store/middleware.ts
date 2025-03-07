import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

import config from '@/config';

const middleware = [sagaMiddleware];

if (config.app.isDev) {
  const {createLogger} = await import('redux-logger')
  // @ts-ignore
  middleware.push(createLogger());
  
}

export default middleware;
