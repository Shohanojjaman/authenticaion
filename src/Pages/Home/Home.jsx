import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Authentication</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <h1 className="text-5xl">Home</h1>
        <Link to='/login'>
          <button className="border px-4 py-2 rounded-lg bg-green-400 hover:bg-green-600 font-bold">
            Click to Signin
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
