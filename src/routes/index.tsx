import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import api from '../utils/rest-api';

export default function AppRouter() {
  return (
    <Router>
      {/* <Menu /> */}
      <Routes>
        <Route path='/' element={<MainPage api={api} />} >
          {/* <Route path='/cadastro' element={<RegiterPage />} /> */}
        </Route>
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}