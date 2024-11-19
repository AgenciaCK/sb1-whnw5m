import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '@/hooks/use-user';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from '@/pages/DashboardPage';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useUser();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}