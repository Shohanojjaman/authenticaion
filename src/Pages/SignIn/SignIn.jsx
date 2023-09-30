import { Helmet } from 'react-helmet-async';
import { IoLockClosed, IoMailOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <Helmet>
        <title>Sign In | Authentication</title>
      </Helmet>

      <section className="from-bg flex justify-center items-center min-h-screen w-full bg-center bg-cover">
        <div className="relative w-96 h-[450px] bg-transparent border-2 border-solid border-[#ffffff80] rounded-3xl backdrop-blur-lg flex justify-center items-center text-white">
          <form>
            <h2 className="text-4xl font-bold text-center">Sign In</h2>
            <div className="relative w-80 my-8 border-b-2 border-solid border-white group">
              <IoMailOutline className="absolute right-2 top-5 text-white text-xl"></IoMailOutline>
              <input
                className="w-full h-12 bg-transparent border-none focus:outline-none text-base pr-9 pl-1"
                type="email"
                name="email"
                id="email"
                required
              />
              <label
                className="absolute top-1/2 left-1 -translate-y-1/2 text-base pointer-events-none duration-500 group-focus-within:-top-1 font-semibold"
                htmlFor="email">
                Email
              </label>
            </div>
            <div className="relative w-80 my-8 border-b-2 border-solid border-white group">
              <IoLockClosed className="absolute right-2 top-5 text-white text-xl"></IoLockClosed>
              <input
                className="w-full h-12 bg-transparent border-none focus:outline-none text-base pr-9 pl-1"
                type="password"
                name="password"
                id="password"
                required
              />
              <label
                className="absolute top-1/2 left-1 -translate-y-1/2 text-base pointer-events-none duration-500 group-focus-within:-top-1 font-semibold"
                htmlFor="password">
                Password
              </label>
            </div>
            <input
              className="w-full h-10 rounded-full bg-white border-none focus:outline-none text-base font-semibold cursor-pointer text-black"
              type="submit"
              value="Sign In"
            />
            <p className="text-center text-sm mt-6 mb-3">
              Don&apos;t have a account?{' '}
              <Link to={'/signup'} className="font-semibold">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
