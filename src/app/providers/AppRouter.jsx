import { Route, Routes } from 'react-router-dom';

import { PageCards } from 'pages/PageCards';
import MainLayout from './MainLayout';
import { PageUserProfile } from 'pages/PageUserProfile';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<PageCards />}/>
          <Route path='user' element={<PageUserProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRouter;