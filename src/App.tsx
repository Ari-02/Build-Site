import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { LoginPage } from './components/auth/LoginPage';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/pages/Dashboard';
import Tasks from './components/pages/Tasks';
import Habits from './components/pages/Habits';
import Pomodoro from './components/pages/Pomodoro';
import Team from './components/pages/Team';
import Settings from './components/pages/Settings';

function App() {
  const theme = useStore((state) => state.theme);

  return (
    <AuthProvider>
      <Router>
        <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''} bg-cyberpunk-100 dark:bg-cyberpunk-900 text-cyberpunk-900 dark:text-cyberpunk-100`}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <div className="flex flex-col h-screen">
                    <Navbar />
                    <main className="flex-1 overflow-y-auto p-4">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/habits" element={<Habits />} />
                        <Route path="/pomodoro" element={<Pomodoro />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/settings" element={<Settings />} />
                      </Routes>
                    </main>
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

