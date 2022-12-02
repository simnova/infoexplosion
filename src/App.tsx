import './App.css';
import { Root } from './layouts/root';
import { Home } from './layouts/root/pages/home';
import { Route, Routes } from 'react-router-dom';
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;