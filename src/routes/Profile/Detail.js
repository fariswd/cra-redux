import { useParams, useSearchParams } from "react-router-dom";

const ProfileDetail = () => {
  const params = useParams();
  const [queryParams] = useSearchParams();

  const page = queryParams.getAll("page");

  return (
    <>
      <h1>this is profile detail page: {page.toString()}</h1>
      <p>just profile detail {params && params.id}</p>
    </>
  );
};

export default ProfileDetail;
