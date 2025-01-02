import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/member/Login";
import Register from "./pages/member/Register";
import FindId from "./pages/member/FindId";

import Error from "./pages/Error";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/find-id" element={ <FindId/> } />

        <Route path="/main" element={ <Layout/> }>

        </Route>

        <Route path="*" element={ <Error/> } />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
