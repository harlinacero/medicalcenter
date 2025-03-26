import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import { Home, Us, Affiliations, Affiliates, Employers, CareNetwork, Contact, Login, PatientHome, Register, Appoiments, CreateAppoiments } from './pages/pages';
import './App.css';
import PrivateRoute from './components/privateRoute/privateRoute';

function App() {

  const increaseFontSize = () => {
    const html = document.documentElement;
    const currentFontSize = parseFloat(getComputedStyle(html).fontSize);
    html.style.fontSize = `${currentFontSize + 1}px`;
  };

  const decreaseFontSize = () => {
    const html = document.documentElement;
    const currentFontSize = parseFloat(getComputedStyle(html).fontSize);
    if (currentFontSize > 10) {
      html.style.fontSize = `${currentFontSize - 1}px`;
    }
  };

  const updateContrast = () => {
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('contrast');
    }
  };

  return (
    <Router>
      <div className="app">
        <div className="accessibility-controls">
          <button onClick={updateContrast} aria-label="Contraste">C</button>
          <button onClick={increaseFontSize} aria-label="Aumentar tamaño de fuente">A+</button>
          <button onClick={decreaseFontSize} aria-label="Disminuir tamaño de fuente">A-</button>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Menu />
                <main className="body">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/us" element={<Us />} />
                    <Route path="/affiliations" element={<Affiliations />} />
                    <Route path="/affiliates" element={<Affiliates />} />
                    <Route path="/employers" element={<Employers />} />
                    <Route path="/careNetwork" element={<CareNetwork />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/phome" element={
                      <PrivateRoute allowedRoles={['patient']}>
                        <PatientHome />
                      </PrivateRoute>
                    }
                    />
                    <Route path="/register" element={
                      <PrivateRoute allowedRoles={['patient']}>
                        <Register />
                      </PrivateRoute>
                    } />
                    <Route path="/appointments" element={
                      <PrivateRoute allowedRoles={['patient']}>
                        <Appoiments />
                      </PrivateRoute>
                    } />
                    <Route path="/createAppoiments" element={
                      <PrivateRoute allowedRoles={['patient']}>
                        <CreateAppoiments />
                      </PrivateRoute>
                    } />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
