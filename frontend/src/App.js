import { Toaster } from '@/components/ui/sonner';
import '@/App.css';
import LandingPage from '@/pages/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;