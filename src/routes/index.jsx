import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail/:movie_id" element={<DetailMovie />} /> */}
      </Routes>
    </Router>
  );
}
