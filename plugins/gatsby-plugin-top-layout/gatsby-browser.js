import * as React from 'react';
import TopLayout from './TopLayout';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../../src/app/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

export const wrapRootElement = ({ element }) => {
  let persistor = persistStore(store);
  return (
    <CookiesProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TopLayout>{element}</TopLayout>
        </PersistGate>
      </ReduxProvider>
    </CookiesProvider>
  );
};
