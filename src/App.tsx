import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { LoginPage } from './components/auth/LoginPage';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './components/pages/Dashboard';
import Tasks from './components/pages/Tasks';
import Habits from './components/pages/Habits';
import Pomodoro from './components/pages/Pomodoro';
import Settings from './components/pages/Settings';

function App() {
  const theme = useStore((state) => state.theme);

  return (
    <AuthProvider>
      <Router>
        <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
                    <Sidebar />
                    <div className="flex-1 flex flex-col overflow-hidden">
                      <Header />
                      <main className="flex-1 overflow-y-auto p-4">
                        <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/tasks" element={<Tasks />} />
                          <Route path="/habits" element={<Habits />} />
                          <Route path="/pomodoro" element={<Pomodoro />} />
                          <Route path="/settings" element={<Settings />} />
                        </Routes>
                      </main>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;