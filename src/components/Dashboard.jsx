function Dashboard({ user, onLogout }) {
  const { name, role } = user;
  const isAdmin = role === 'Admin';

  const handleDelete = () => {
    alert('Post deleted! (Admin action)');
  };

  return (
    <div className={`dashboard ${isAdmin ? 'admin-view' : 'viewer-view'}`}>
      <div className="welcome-box">
        <h2 className="welcome-text">
          Welcome, <span className="username">{name}</span>{' '}
          <span className={`role-badge ${isAdmin ? 'badge-admin' : 'badge-viewer'}`}>
            ({role})
          </span>
        </h2>
      </div>

      <div className="role-content">
        {isAdmin ? (
          <>
            <p className="role-desc">You have full access as an Administrator.</p>
            <button className="btn btn-delete" onClick={handleDelete}>
              🗑 Delete Post
            </button>
          </>
        ) : (
          <p className="role-desc viewer-msg">🔒 Read-only access</p>
        )}
      </div>

      <button className="btn btn-logout" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;