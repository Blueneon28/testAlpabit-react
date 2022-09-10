import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "../utils/context";

import Home from "../pages";
import AddContact from "../pages/addContact";
import EditContact from "../pages/editContact";

export default function AppRouter() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/editContact/:id" element={<EditContact />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}
