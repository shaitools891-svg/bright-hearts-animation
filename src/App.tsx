import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Website } from '@/components/Website';
import Admin from '@/pages/Admin';
import NotFound from '@/pages/NotFound';
import { useTranslation } from 'react-i18next';

function App() {
  const { ready } = useTranslation();

  // Show loading spinner while i18n is initializing
  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
