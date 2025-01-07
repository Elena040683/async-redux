import { useState, lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
// Статические импорты
// import HomePage from './pages/Home/Home';
// import PexelsPage from './pages/Pixels/Pexels';
// import ProductsPage from './pages/Products/Products';
import {Loader} from './components/Loader/Loader';
import { Navigation } from './components/Navigation/Navigation';
// import { useHistory, useLocation } from 'react-router';

// Динамический импорт через lazy загрузку
const HomePage = lazy(() =>
  import('./pages/Home/Home' /* webpackChunkName: 'Home Page'*/),
);
const PexelsPage = lazy(() =>
  import('./pages/Pexels/Pexels' /* webpackChunkName: 'Pexels Page'*/),
);
const ProductsPage = lazy(() =>
  import('./pages/Products/Products' /* webpackChunkName: 'Products Page'*/),
);

function App() {
// const history = useHistory();
  // console.log('App history:', history);
  // const location = useLocation();
  // console.log('App location:', location);

  // const backToHome = () => {
  //   history.push(location?.state?.from?.location ?? '/');
  // };
 
  return (
    <>
      <header>
        <Navigation/>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/pexels">
              <PexelsPage title="Main Title" /> 
            </Route>
            <Route path="/products" component={ProductsPage} />
            <Route>
              <p>Page not found! please back to Home</p>
              {/* <button type="button" onClick={backToHome}>
                back to Home
              </button> */}
            </Route>
          </Switch>
        </Suspense>
      </main>
      <footer>
        <p>&copy; FE-35 all rights reserved</p>
      </footer>
    </>
  );
}

export default App;