import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>React countries</h1>
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/users/1"
      >
        Users
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/profile"
      >
        Profile
      </NavLink>
    </header>
  );
}
