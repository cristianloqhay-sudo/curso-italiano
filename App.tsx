import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import CardsView from './components/CardsView';
import QuizView from './components/QuizView';
import { ViewType, CategoryKey } from './types';
import { DATA } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [visitedModules, setVisitedModules] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    if (view !== 'home' && view !== 'quiz') {
      setVisitedModules(prev => {
        const newSet = new Set(prev);
        newSet.add(view);
        return newSet;
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row bg-[#F9FAFB] font-sans">
      
      {/* Mobile Header */}
      <header className="md:hidden bg-[#008C45] text-white p-4 flex justify-between items-center z-30 shadow-md">
        <h1 className="text-xl font-bold">🇮🇹 Léxico Italiano</h1>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="animate-heartbeat bg-[#CD212A] hover:bg-[#A51A22] text-white px-4 py-2 rounded-lg font-bold shadow-md transition-all active:scale-95 flex items-center gap-2"
        >
          {isSidebarOpen ? 'CERRAR' : 'MENÚ'}
        </button>
      </header>

      {/* Sidebar */}
      <Sidebar 
        currentView={currentView}
        visitedModules={visitedModules}
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative p-4 md:p-8">
        {currentView === 'home' && (
          <HomeView onNavigate={handleNavigate} />
        )}

        {currentView === 'quiz' && (
          <QuizView />
        )}

        {currentView !== 'home' && currentView !== 'quiz' && (
          <CardsView categoryKey={currentView as CategoryKey} />
        )}
      </main>

    </div>
  );
};

export default App;