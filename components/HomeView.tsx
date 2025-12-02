import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { DATA } from '../constants';
import { ViewType } from '../types';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const chartData = Object.entries(DATA).map(([key, category]) => ({
    name: category.title.split(' ')[0],
    value: category.items.length
  }));

  const COLORS = ['#008C45', '#009955', '#33a36b', '#CD212A', '#D93b44', '#E0555d', '#A3A3A3'];

  return (
    <section className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#008C45] mb-2">Benvenuto! Bienvenido.</h2>
        <p className="text-gray-600">Esta aplicación interactiva está diseñada para ayudarte a dominar el vocabulario italiano esencial. Explora las categorías en el menú para comenzar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Info Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#CD212A]">
          <h3 className="font-bold text-xl mb-4 text-[#008C45]">Cómo usar esta app</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start"><span className="mr-2 text-[#CD212A]">➤</span> <span><strong>Paso 1:</strong> Presiona el botón <strong className="text-[#CD212A]">"¡Empecemos!"</strong> para iniciar tu primera lección.</span></li>
            <li className="flex items-start"><span className="mr-2 text-[#CD212A]">➤</span> <span>Navega por los temas usando el menú lateral.</span></li>
            <li className="flex items-start"><span className="mr-2 text-[#CD212A]">➤</span> <span><strong>Haz clic en las tarjetas</strong> para revelar la frase de ejemplo.</span></li>
            <li className="flex items-start"><span className="mr-2 text-[#CD212A]">➤</span> <span>Practica en voz alta usando la guía fonética simplificada (ej. <em>[cháo]</em>).</span></li>
            <li className="flex items-start font-bold text-[#CD212A]"><span className="mr-2 text-[#CD212A]">➤</span> <span>¡Haz el **Test de Vocabulario** para saber tu nivel de italiano!</span></li>
          </ul>
        </div>

        {/* Visualization */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center border-t-4 border-[#008C45]">
          <h3 className="font-bold text-lg mb-2 text-[#008C45]">Composición del Vocabulario</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200">
        <h3 className="text-[#008C45] font-bold text-lg mb-2">¡Únete a la Comunidad y Sigue Aprendiendo!</h3>
        <p className="text-sm text-gray-600 mb-6">Síguenos en redes para más tips y contenido gratuito, o empieza tu curso digital ahora.</p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <div className="flex flex-col items-center">
            <a href="https://www.instagram.com/lexigo2.0/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg text-white transition-all duration-200 hover:scale-[1.05] shadow-md bg-pink-600">
              <span className="text-2xl">📷</span>
            </a>
            <span className="text-xs mt-1 font-semibold text-gray-700">Instagram</span>
          </div>

          <div className="flex flex-col items-center">
            <a href="https://www.facebook.com/profile.php?id=61583705050960" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg text-white transition-all duration-200 hover:scale-[1.05] shadow-md bg-blue-600">
              <span className="text-2xl">👍</span>
            </a>
            <span className="text-xs mt-1 font-semibold text-gray-700">Facebook</span>
          </div>

          <div className="flex flex-col items-center">
            <a href="https://www.tiktok.com/@lexigo2.0" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg text-white transition-all duration-200 hover:scale-[1.05] shadow-md bg-gray-800">
              <span className="text-2xl">🎵</span>
            </a>
            <span className="text-xs mt-1 font-semibold text-gray-700">TikTok</span>
          </div>
        </div>

        {/* Digital Course Button (Red for CTA) */}
        <a href="https://go.hotmart.com/U103170151V" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#CD212A] w-full max-w-sm text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-[#A51A22] mt-4 transition-all shadow-md">
          <span className="text-xl mr-2">📚</span>
          Iniciar Curso Digital
        </a>
      </div>
    </section>
  );
};

export default HomeView;