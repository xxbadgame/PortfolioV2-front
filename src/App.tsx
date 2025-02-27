import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './components/theme-provider.tsx'
import Home from './components/pages/home.tsx';
import TiktokPage from './components/pages/tiktok.tsx';
import GleamPage from './components/pages/gleam.tsx';
import HomeservePage from './components/pages/homeserve.tsx';
import MinishellPage from './components/pages/minishell.tsx';
import OsmozePage from './components/pages/osmoze.tsx';
import TradingPage from './components/pages/trading.tsx';
import TranscendancePage from './components/pages/transcendance.tsx';
import WinorwinPage from './components/pages/winorwin.tsx';
import YoutubePage from './components/pages/youtube.tsx';
import ScrollToTop from './components/my-ui/scrollToTop.tsx';

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiktok" element={<TiktokPage />} />
          <Route path="/gleam" element={<GleamPage />} />
          <Route path="/homeserve" element={<HomeservePage />} />
          <Route path="/minishell" element={<MinishellPage />} />
          <Route path="/osmoze" element={<OsmozePage />} />
          <Route path="/trading" element={<TradingPage />} />
          <Route path="/transcendance" element={<TranscendancePage />} />
          <Route path="/winorwin" element={<WinorwinPage />} />
          <Route path="/youtube" element={<YoutubePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
