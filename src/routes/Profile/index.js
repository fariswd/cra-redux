import { useLocation, useParams, useSearchParams } from "react-router-dom";
import CounterMe from "../../features/counterMe/CounterMe";

const Profile = () => {
  const location = useLocation();
  const [queryParams] = useSearchParams();
  const params = useParams();

  const page = queryParams.get("page");
  const sort = queryParams.get("sort");
  const data = location.state.data;

  return (
    <>
      <h1>
        this is profile screen {page} {sort}
      </h1>
      <p>{JSON.stringify(data)}</p>
      <CounterMe />
    </>
  );
};

export default Profile;
