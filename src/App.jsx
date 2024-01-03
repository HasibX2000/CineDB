import Footer from './Components/Footer';
import Header from './Components/Header';
import AllRoutes from './Routes/AllRoutes';
import './assets/index.css';
import './index.css';

function App() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Header />
      <AllRoutes />

      <Footer />
    </div>
  );
}

export default App;
