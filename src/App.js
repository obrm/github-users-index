import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SharedLayout } from './components';
import { Home, About, NotFound, User } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="user/:id" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter >
  );
};

export default App;
