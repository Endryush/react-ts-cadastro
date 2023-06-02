import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import api from './utils/rest-api';
import Header from './components/Header';
import RegisterPage from './pages/RegisterPage';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage api={api} />} />
        <Route path='cadastro' element={<RegisterPage api={api} />} />
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}