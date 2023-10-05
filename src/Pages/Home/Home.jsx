import { Helmet } from 'react-helmet-async';
import Navbar from '../../Components/Header/Navbar';

const Home = () => {
  return (
    <div className="from-bg text-white">
      <Helmet>
        <title>Home | Authentication</title>
      </Helmet>
      <div className="container mx-auto max-sm:px-5 ">
        <Navbar></Navbar>

        <div className="flex flex-col justify-center items-center h-screen gap-5  text-white">
          <h1 className="text-5xl">Home</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
