import "./App.css";
import "./Media.css";
import "./Account.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MailLogin from "./pages/MailLogin";

import Dashboard from "./pages/Account/Dashboard";
import Deposit from "./pages/Account/Deposit";
import Help from "./pages/Account/Help";
import History from "./pages/Account/History";
import Profile from "./pages/Account/Profile";
import Referral from "./pages/Account/Referral";
import Withdrawal from "./pages/Account/Withdrawal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PasswordReset from "./pages/PasswordReset";
import PasswordResett from "./pages/PasswordResett";
import ReferralSignup from "./pages/ReferralSignup";

import Admin from "./pages/Admin/Admin"

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/faq" exact element={<Faq />} />
            <Route path="/prices" exact element={<Portfolio />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/login/:mail" exact element={<MailLogin />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route
              path="/referred-signup/:sponsor"
              exact
              element={<ReferralSignup />}
            />
            <Route path="/password-reset" exact element={<PasswordReset />} />
            <Route
              path="/password-reset/:email"
              exact
              element={<PasswordResett />}
            />
            <Route path="/dashboard/" exact element={<Dashboard />} />
            <Route path="/deposit/" exact element={<Deposit />} />
            <Route path="/account-history/" exact element={<History />} />
            <Route path="/help/" exact element={<Help />} />
            <Route path="/profile/" exact element={<Profile />} />
            <Route path="/referral/" exact element={<Referral />} />
            <Route path="/withdrawal/" exact element={<Withdrawal />} />
            <Route path="/admin/admin" exact element={<Admin/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
