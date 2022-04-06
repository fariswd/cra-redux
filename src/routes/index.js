import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";
import ProfileDetail from "./Profile/Detail";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />}>
        <Route path=":id" />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default Routing;
