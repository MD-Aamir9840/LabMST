import { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // CRITICAL: Order must be (name, password, role)
  const handleLogin = (name, password, role) => {
    // This console log will help you debug. Check your browser console (F12)
    console.log(`Login Attempt -> Name: ${name}, Password: ${password}, Role: ${role}`);
    
    // Set the user with the correct role
    setUser({ name: name.trim(), role: role });
  };

  const handleLogout = () => setUser(null);

  return (
    <div className="app">
      <h1>🔐 Role-Based Login Portal</h1>

      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;