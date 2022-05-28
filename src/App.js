import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';
import { DefaultLayout } from '~/layouts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, i) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout === null) {
              Layout = React.Fragment;
            } else if (route.layout) {
              Layout = route.layout;
            }

            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
