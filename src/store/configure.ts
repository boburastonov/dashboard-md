import {
  Action,
  applyMiddleware,
  compose,
  legacy_createStore,
  Store,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import type { Persistor } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";

import config from "@/config";

import rootSaga from "./sagas";
import rootReducer from "./reducers";
import middleware, { sagaMiddleware } from "./middleware";

import type * as Types from "./types";

export default (
  initialState: Partial<Types.IState> = {}
): { store: Store<Types.IState>; persist: Persistor } => {
  const composeEnhancer =
    process.env.NODE_ENV === "development" ? composeWithDevTools({}) : compose;

  Object.keys(localStorage).forEach((key) => {
    const matches = key.match(/persist:version-(.*)/);

    if (!matches || matches.length < 2) {
      return;
    }
    const version = matches[1];

    if (version !== config.app.version) {
      localStorage.removeItem(key);
    }
  });

  const persistConfig = {
    key: `version-${config.app.version}`,
    storage,
    whitelist: [],
  };
  const persistedReducer = persistReducer<Types.IState>(
    persistConfig,
    rootReducer
  );
  // @ts-ignore
  const store: Store<Types.IState> = legacy_createStore<
    Types.IState,
    Action<any>,
    unknown,
    unknown
  >(persistedReducer, composeEnhancer(applyMiddleware(...middleware)));
  const persist = persistStore(store);

  sagaMiddleware.run(rootSaga);

  /* istanbul ignore next */

  // if (module) {
  //   // @ts-ignore
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(require('./reducers'));
  //   });
  // }

  return { store, persist };
};
