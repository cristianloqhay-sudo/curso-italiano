import React from 'react';
import { ViewType, CategoryKey } from '../types';
import { DATA } from '../constants';

interface SidebarProps {
  currentView: ViewType;
  visitedModules: Set<string>;
  onNavigate: (view: ViewType) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, visitedModules, onNavigate, isOpen, onClose }) => {
  const progressPercent = Math.min(100, Math.round((visitedModules.size / 7) * 100));

  const navItems: { key: ViewType; label: string; icon: string }[] = [
    { key: 'home', label: 'Inicio / Dashboard', icon: '🏠' },
    { key: 'saludos', label: 'Saludos y Básicos', icon: '👋' },
    { key: 'presentacion', label: 'Presentaciones', icon: '🤝' },
    { key: 'numeros', label: 'Números (1-10)', icon: '🔢' },
    { key: 'colores', label: 'Colores', icon: '🎨' },
    { key: 'animales', label: 'Animales y Casa', icon: '🐶' },
    { key: 'viajes', label: 'Viajes y Salud', icon: '✈️' },
    { key: 'clima', label: 'Clima y Tiempo', icon: '☀️' },
    { key: 'quiz', label: 'Test de Vocabulario', icon: '🧠' },
  ];

  const handleNavClick = (key: ViewType) => {
    onNavigate(key);
    onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={onClose}
        ></div>
      )}

      <nav 
        className={`
          fixed md:relative z-20 w-64 h-full bg-[#008C45] text-white flex flex-col shadow-xl transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-6 border-b border-white/20 hidden md:block">
          <h1 className="text-2xl font-bold tracking-wide">
            🇮🇹 Italiano<br/>
            <span className="text-sm font-normal text-gray-100">para el Día a Día</span>
          </h1>
        </div>
        
        <div className="px-6 pt-6 pb-2">
          <button 
            onClick={() => handleNavClick('saludos')} 
            className="animate-heartbeat w-full bg-[#CD212A] hover:bg-[#A51A22] text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 border border-red-800"
          >
            <span>🚀</span> ¡Empecemos!
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentView === item.key;
              return (
                <li key={item.key}>
                  <button 
                    onClick={() => handleNavClick(item.key)}
                    className={`
                      w-full text-left px-6 py-3 transition-colors border-l-4
                      ${isActive 
                        ? 'bg-[#007038] font-semibold border-[#CD212A]' 
                        : 'hover:bg-[#007038] border-transparent'}
                    `}
                  >
                    {item.icon} {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-6 bg-[#006030] mt-auto border-t border-white/10">
          <p className="text-xs text-gray-200 mb-2">Progreso de sesión</p>
          <div className="w-full bg-[#004d26] rounded-full h-2.5 border border-white/10">
            <div 
              className="bg-[#F4F4F4] h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-xs text-center mt-2 text-gray-200">{visitedModules.size}/7 Temas explorados</p>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;