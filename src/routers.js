import React from "react";
import { Route, Routes } from "react-router-dom";
import SayeonWri from "./component/SayeonWri";
import Login from "./component/Login";
import MusicLink from "./component/MusicLink";
import MusicReco from "./component/MusicReco";
import App from "./App";
import Write from "./component/write";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="/" element={<App />} />
      <Route path="/musicLink" element={<MusicLink />} />
      <Route path="/musicReco" element={<MusicReco />} />
      <Route path="/sayeonWri" element={<SayeonWri />} />
      <Route path="/writepage" element={<Write />} />
    </Routes>
  );
};
export default Router;
