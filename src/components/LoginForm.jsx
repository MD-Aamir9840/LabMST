import { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (role) => (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      alert('Please enter a username');
      return;
    }
    if (!password.trim()) {
      alert('Please enter a password');
      return;
    }
    
    // CRITICAL: Order must be (username, password, role)
    onLogin(username, password, role);
  };

  return (
    <form className="login-card" onSubmit={(e) => e.preventDefault()}>
      <label className="login-label" htmlFor="username">
        Username
      </label>
      <input
        id="username"
        type="text"
        className="login-input"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
      />

      <label className="login-label" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type="password"
        className="login-input"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="btn-row">
        <button
          type="button"
          className="btn btn-admin"
          onClick={handleSubmit('Admin')}
        >
          Login as Admin
        </button>
        <button
          type="button"
          className="btn btn-viewer"
          onClick={handleSubmit('Viewer')}
        >
          Login as Viewer
        </button>
      </div>
    </form>
  );
}

export default LoginForm;