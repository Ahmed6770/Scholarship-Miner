import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import Layout from "./components/layout/Layout";
import Search from "./pages/search/SearchPage";
import Saved from "./pages/saved/SavedPage";
import Details from "./pages/details/DetailsPage";
import HowItWorksPage from "./pages/howItWorks/HowItWorksPage";
import SavedProvidor from "./context/SavedContext";
import ScholarshipsProvider from "./context/ScholarshipsContext";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <>
      <ScholarshipsProvider>
        <SavedProvidor>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="scholarships" element={<Search />} />
                <Route path="scholarships/:id" element={<Details />} />
                <Route path="details" element={<Details />} />
                <Route path="search" element={<Search />} />
                <Route path="how-it-works" element={<HowItWorksPage />} />
                <Route path="about" element={<About />} />
                <Route path="saved" element={<Saved />} />
                </Route>
            </Routes>
          </ScrollToTop>
        </SavedProvidor>
      </ScholarshipsProvider>
    </>
  );
}

export default App;
