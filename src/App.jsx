import "./App.css";
import "./Blog.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NewsandInsights from "./pages/NewsandInsights";
import NewsandInsightsRead from "./pages/NewsandInsightsRead";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import Training from "./pages/Training";
import Pricing from "./pages/Pricing";
import Candidates from "./pages/Candidates";
import Organization from "./pages/Organization";
import FAQs from "./pages/FAQs";
import BlogAdmin from "./pages/BlogAdmin";
import Terms from "./pages/Terms";
import Moderngovernance from "./pages/Moderngovernance";
import Boardrole from "./pages/Boardrole";
import Boardseatexecindividual from "./pages/Boardseatexecindividual";
import Boardseatexecsignup from "./pages/Boardseatexecsignup";

function App() {
  return (
    <Router>
      <div className="w-full">
        <Navbar />
        <div className="relative top-[90px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<NewsandInsights />} />
            <Route path="/newsread" element={<NewsandInsightsRead />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/training" element={<Training />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/organisation" element={<Organization />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/boardseats-blog" element={<BlogAdmin />} />
            <Route path="/terms-of-use" element={<Terms />} />
            <Route path="/modern-governance" element={<Moderngovernance />} />
            <Route path="/setting-up" element={<Boardrole />} />
            <Route path="/signup/candidate" element={<Boardseatexecindividual />} />
            <Route path="/signup/organization" element={<Boardseatexecsignup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
