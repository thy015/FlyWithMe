
import './index.css'
import Home from './pages/Home.jsx';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { routers } from './routers/index.js';
import { Fragment } from 'react';
import Header from './partials/Header.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        {routers.map((route) => {
            const Page = route.page;
            const Layout= route.isShowHeader ? Header : Fragment
            return <Route key={route.path} path={route.path} 
            element={
              <Layout>
            <Page />
            </Layout>
          } />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
