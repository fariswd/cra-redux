import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>this is home</h1>
      <Link to="/profile">
        <div>click to profile</div>
      </Link>
      <button
        onClick={() =>
          navigate("/profile", {
            state: { data: "this is data passing from home" },
          })
        }
      >
        to profile programatically
      </button>
    </>
  );
};

export default Home;
