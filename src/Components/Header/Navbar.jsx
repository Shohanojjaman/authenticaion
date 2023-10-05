import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const randomNum = Math.round(Math.random() * 1000);
  console.log(randomNum);
  const NavLinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'/blog'}>Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Authentication</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end flex items-center gap-4">
            <h2>{user.displayName ? user.displayName : `User${randomNum}`}</h2>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : 'https://th.bing.com/th/id/OIP.xhNRYJNoL4UX0QDwjOZnMgHaGe?pid=ImgDet&w=182&h=159&c=7'
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-600 rounded-box w-52">
              <li>
                <Link to={'/profile'}>Profile</Link>
              </li>
              <li>
                <Link to={'/settings'}>Settings</Link>
              </li>
              <li>
                <Link onClick={userSignOut}>Sign Out</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={'/signin'} className="btn bg-cyan-500 hover:bg-cyan-600 border-none text-black">
            Get Start
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
