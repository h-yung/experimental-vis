import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import TrackPage from "./views/TrackPage/TrackPage";
import "./App.css";

// import { sampleData } from './utils/sampleData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage /*qList={sampleData}*/ />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trackpad" element={<TrackPage />} />
      </Route>
    </Routes>
  );
}

export default App;
