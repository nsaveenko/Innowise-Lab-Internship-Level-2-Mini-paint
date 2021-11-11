import Router from './router/Router';
import AuthProvider from '../src/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
