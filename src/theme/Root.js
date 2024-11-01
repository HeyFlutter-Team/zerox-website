import React from 'react';
import { AuthProvider } from '@site/src/components/AuthContext';
import ProtectedRoute from '@site/src/components/ProtectedRoute';

export default function Root({ children }) {
  return (
    <AuthProvider>
      <ProtectedRoute>{children}</ProtectedRoute>
    </AuthProvider>
  );
}