import { Routes, Route } from 'react-router-dom';
import App from './App';
import { AIReadinessGuide } from './pages/AIReadinessGuide';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ai-readiness-guide" element={<AIReadinessGuide />} />
    </Routes>
  );
}
