import React from 'react';
import { HeaderComponent } from './components/header/header.component';
import { SearchEngineComponent } from './components/search-engine/search.engine.component';

export const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <SearchEngineComponent />
    </>
  );
}
