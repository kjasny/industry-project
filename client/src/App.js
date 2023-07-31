import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./screens/Error/Error";

import CustomerTable from "./screens/CustomerTable/CustomerTable";
import UploadPage from "./screens/UploadPage/UploadPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customers" element={<CustomerTable />} />
        <Route path="/" element={<UploadPage />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;