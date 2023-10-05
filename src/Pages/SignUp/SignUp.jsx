import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { IoLockClosed, IoMailOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Components/AuthProvider';

const SignUp = () => {
  const { createUser, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);

  const [user, setUser] = useState();
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const uppercaseRegex = /(?=.*?[A-Z])/;
  const lowercaseRegex = /(?=.*?[a-z])/;
  const digitRegex = /(?=.*?[0-9])/;
  const specialCharacterRegex = /(?=.*?[#?!@$%^&*-])/;

  const handleSignUpSubmit = (event) => {
    event.preventDefault();

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

    createUser(emailValue, passwordValue)
      .then((result) => {
        setUser(result.user);
        toast.success('Successfully sign up!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        });
        navigate('/');
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
    <div className="from-bg">
      <Helmet>
        <title>Sign Up | Authentication</title>
      </Helmet>

      <div className="navbar">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl text-white">
          Authentication
        </Link>
      </div>
      <section className=" flex justify-center items-center min-h-screen w-full bg-center bg-cover">
        <div className="relative w-96 py-4 bg-transparent border-2 border-solid border-[#ffffff80] rounded-3xl backdrop-blur-lg flex justify-center items-center text-white">
          <form onSubmit={handleSignUpSubmit}>
            <h2 className="text-4xl font-bold text-center">Sign Up</h2>
            <div className="relative w-80 my-8 border-b-2 border-solid border-white group">
              <BiUser className="absolute right-2 top-5 text-white text-xl"></BiUser>
              <input
                onChange={(event) => setNameValue(event.target.value)}
                className="w-full h-12 bg-transparent border-none focus:outline-none text-base pr-9 pl-1"
                type="text"
                name="userName"
                id="userName"
                required
              />
              <label
                className={`${
                  nameValue ? `-top-1 ` : `top-1/2`
                } absolute  left-1 -translate-y-1/2 text-base pointer-events-none duration-500 group-focus-within:-top-1 font-semibold`}
                htmlFor="userName">
                Name
              </label>
            </div>
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
                    <AiFillEye className="absolute right-2 top-5 text-white text-xl"></AiFillEye>
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
              value="Sign up"
            />

            <div className="flex justify-center mt-4 flex-col gap-3">
              <div
                onClick={() =>
                  signInWithGoogle()
                    .then((result) => {
                      setUser(result.user);
                      toast.success('Successfully sign up with Google!', {
                        position: 'top-center',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: 'colored',
                      });
                      navigate('/');
                    })
                    .catch((error) => console.error(error))
                }
                className="bg-[#4186f5] p-[3px] rounded flex cursor-pointer">
                <img
                  className="w-12 rounded self-center"
                  src="https://premiumitsolutions.com.au/wp-content/uploads/2015/10/google-logo-2015-google-beta.jpg"
                  alt=""
                />
                <div
                  onClick={() =>
                    signInWithFacebook()
                      .then((result) => {
                        setUser(result.user);
                        toast.success('Successfully sign up with Facebook!', {
                          position: 'top-center',
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: false,
                          progress: undefined,
                          theme: 'colored',
                        });
                        navigate('/');
                      })
                      .catch((error) => console.error(error))
                  }
                  className="px-4 py-3">
                  <p className="font-bold">Sign up with Google</p>
                </div>
              </div>
              <div className="bg-white p-[3px] rounded flex cursor-pointer">
                <img
                  className="w-12 rounded self-center"
                  src="https://th.bing.com/th/id/R.51ae405e1b464603ee8ac65599eb5c95?rik=Hz2DT9FdIMH3cQ&pid=ImgRaw&r=0"
                  alt=""
                />
                <div className="px-4 py-3">
                  <p className="font-bold text-black">Sign up with Facebook</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm mt-6 mb-3">
              Already have a account?{' '}
              <Link to={'/signin'} className="font-semibold">
                Sign in
              </Link>
            </p>
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

export default SignUp;
