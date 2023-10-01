import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { IoLockClosed, IoMailOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.config';

const SignIn = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const uppercaseRegex = /(?=.*?[A-Z])/;
  const lowercaseRegex = /(?=.*?[a-z])/;
  const digitRegex = /(?=.*?[0-9])/;
  const specialCharacterRegex = /(?=.*?[#?!@$%^&*-])/;

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (passwordValue.length <= 8) {
      toast.error('Make sure your password has at least 8 characters.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    } else if (!uppercaseRegex.test(passwordValue)) {
      toast.error('Make sure your password has at least one uppercase letter (A-Z).', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    } else if (!lowercaseRegex.test(passwordValue)) {
      toast.error('Make sure your password has at least one lowercase letter (a-z)..', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    } else if (!digitRegex.test(passwordValue)) {
      toast.error('Make sure your password has at least one number (0-9).', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    } else if (!specialCharacterRegex.test(passwordValue)) {
      toast.error('MMake sure your password has at least one special character, (#?!@$%^&*-).', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((result) => {
        toast.success('Successfully sign in!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        });
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Sign In | Authentication</title>
      </Helmet>

      <section className="from-bg flex justify-center items-center min-h-screen w-full bg-center bg-cover">
        <div className="relative w-96 h-[450px] bg-transparent border-2 border-solid border-[#ffffff80] rounded-3xl backdrop-blur-lg flex justify-center items-center text-white">
          <form onSubmit={handleSignInSubmit}>
            <h2 className="text-4xl font-bold text-center">Sign In</h2>
            <div className="relative w-80 my-8 border-b-2 border-solid border-white group">
              <IoMailOutline className="absolute right-2 top-5 text-white text-xl"></IoMailOutline>
              <input
                onChange={(event) => setEmailValue(event.target.value)}
                className="w-full h-12 bg-transparent border-none focus:outline-none text-base pr-9 pl-1"
                type="email"
                name="email"
                id="email"
                required
              />
              <label
                className={`${
                  emailValue ? `-top-1 ` : `top-1/2`
                } absolute  left-1 -translate-y-1/2 text-base pointer-events-none duration-500 group-focus-within:-top-1 font-semibold`}
                htmlFor="email">
                Email
              </label>
            </div>
            <div className="relative w-80 my-8 border-b-2 border-solid border-white group">
              {passwordValue ? (
                <div onClick={() => setShow(!show)}>
                  {show ? (
                    <AiFillEyeInvisible className="absolute right-2 top-5 text-white text-xl"></AiFillEyeInvisible>
                  ) : (
                    <AiFillEye
                      // onClick={setShow(!show)}
                      className="absolute right-2 top-5 text-white text-xl"></AiFillEye>
                  )}
                </div>
              ) : (
                <IoLockClosed className="absolute right-2 top-5 text-white text-xl"></IoLockClosed>
              )}

              <input
                onChange={(event) => setPasswordValue(event.target.value)}
                className="w-full h-12 bg-transparent border-none focus:outline-none text-base pr-9 pl-1"
                type={show ? 'text' : 'password'}
                name="password"
                id="password"
                required
              />
              <label
                className={`${
                  passwordValue ? '-top-1' : 'top-1/2'
                } absolute  left-1 -translate-y-1/2 text-base pointer-events-none duration-500 group-focus-within:-top-1 font-semibold`}
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
            {error && <p>{error}</p>}
          </form>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="colored"
        />
      </section>
    </div>
  );
};

export default SignIn;
