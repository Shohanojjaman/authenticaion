import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Authentication</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center h-screen gap-5 from-bg text-white">
        <h1 className="text-5xl">Home</h1>

        <div className="flex gap-6">
          <div className="text-center">
            <p>Do you have account?</p>
            <Link to="/signin" className="mt-3">
              <button className="border px-4 py-2 rounded-lg bg-green-400 hover:bg-green-600 font-bold">Sign In</button>
            </Link>
          </div>
          <div className="text-center">
            <p>Don&apos;t you have account?</p>
            <Link to="/signup">
              <button className="border px-4 py-2 rounded-lg bg-green-400 hover:bg-green-600 font-bold">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
