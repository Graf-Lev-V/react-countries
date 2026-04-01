import Home from './components/Home';
import Layout from "./components/Layout";
import Users from './components/Users';
import NotFound from './components/NotFound';
import Profile from './components/Profile';

import { Routes, Route, Navigate} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="users/:id" element={<Users/>} />
          <Route path="users" element={<Navigate to='/users/1'/>}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </>
  );
}