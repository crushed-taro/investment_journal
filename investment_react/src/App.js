import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/member/Login";
import Register from "./pages/member/Register";
import FindId from "./pages/member/FindId";
import FindPassword from "./pages/member/FindPassword";
import ChangePassword from "./pages/member/ChangePassword";

import Main from "./pages/Main";
import AddInvestmentJournal from "./pages/investment/AddInvestmentJournal";
import InvestmentJournalDetail from "./pages/investment/investmentJournalDetail";

import Error from "./pages/Error";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/find-id" element={ <FindId/> } />
        <Route path="/find-password" element={ <FindPassword/> } />
        <Route path="/change-password" element={ <ChangePassword/> } />

        <Route path="/main" element={ <Layout/> }>
          <Route index element={ <Main />} />
          <Route path="addInvestmentJournal" element={ <AddInvestmentJournal />} />
          <Route path="investmentJournalDetail/:investmentCode" element={ <InvestmentJournalDetail />} />
        </Route>

        <Route path="*" element={ <Error/> } />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
