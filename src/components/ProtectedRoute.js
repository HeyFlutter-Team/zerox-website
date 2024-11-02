import React from 'react';
import { useAuth } from './AuthContext';
import styles from './ProtectedRoute.module.css';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, login } = useAuth();
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login(password)) {
      alert('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.authWrapper}>
        <div className={styles.authContainer}>
          <h2>Protected Content</h2>
          <form onSubmit={handleSubmit} className={styles.authForm}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={styles.authInput}
            />
            <button type="submit" className={styles.authButton}>
              Access Documentation
            </button>
          </form>
        </div>
      </div>
    );
  }

  return children;
}