import Router from './router/Router';
import AuthProvider from '../src/contexts/AuthContext';
import PicsProvider from '../src/contexts/PicsContext';

function App() {
  return (
    <AuthProvider>
      <PicsProvider>
        <Router />
      </PicsProvider>
    </AuthProvider>
  );
}

export default App;
