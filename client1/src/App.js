
import './index.css'
import Home from './pages/Home.jsx';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { routers } from './routers/index.js';
import { Fragment } from 'react';
import Header from './partials/Header.jsx';
import Footer from './partials/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        {routers.map((route) => {
            const Page = route.page;
            const Layout= route.isShowHeader ? Header : Fragment
            const Footer1 =route.isShowFooter ? Footer : Fragment
            return <Route key={route.path} path={route.path} 
            element={
              <Layout>
            <Page />
            <Footer/>
            </Layout>
          } />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
