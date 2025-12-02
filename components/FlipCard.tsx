import React, { useState } from 'react';
import { VocabItem } from '../types';

interface FlipCardProps {
  item: VocabItem;
}

const FlipCard: React.FC<FlipCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Determine card styles based on props
  const cardBgStyle = item.color ? { backgroundColor: item.color } : undefined;
  const textColorClass = item.color 
    ? (item.text === 'white' ? 'text-white' : 'text-gray-900') 
    : 'text-[#008C45]';
  const subtitleColorClass = (item.color && item.text === 'white') 
    ? 'text-white/80' 
    : 'text-gray-600';
  const borderColorClass = (item.color && item.border) 
    ? 'border-gray-300' 
    : 'border-gray-200';

  return (
    <div 
      className="group h-48 w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`
          relative h-full w-full text-center transition-transform duration-500 transform-style-3d shadow-lg rounded-xl border ${borderColorClass}
          ${isFlipped ? '[transform:rotateY(180deg)]' : ''}
        `}
        style={{ transformStyle: 'preserve-3d' }}
      >
        
        {/* Front Face */}
        <div 
          className={`
            absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-xl 
            ${!item.color ? 'bg-white' : ''}
          `}
          style={{ ...cardBgStyle, backfaceVisibility: 'hidden' }}
        >
          {item.icon && <div className="text-4xl mb-2">{item.icon}</div>}
          <h3 className={`text-2xl font-bold ${textColorClass}`}>{item.it}</h3>
          <p className={`text-sm font-semibold mt-1 ${subtitleColorClass}`}>{item.es}</p>
          <p className="font-mono text-xs mt-1 text-[#CD212A] uppercase">[{item.pron}]</p>
          
          <div className="absolute bottom-2">
            <span className="bg-[#008C45] text-white text-xs px-3 py-1 rounded-full shadow-md">
              Ver Frase
            </span>
          </div>
          <div className="absolute bottom-3 right-3 text-gray-300">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center backface-hidden bg-[#008C45] text-white rounded-xl p-4 [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <p className="text-xs uppercase tracking-widest text-green-100 mb-1">Frase de Ejemplo</p>
          <p className="text-base italic mb-2 font-light text-center">"{item.fraseIt || item.context}"</p>
          
          <p className="font-mono text-xs mt-1 text-[#CD212A] bg-white px-2 py-0.5 rounded uppercase font-bold">[{item.frasePron || '...'}]</p>
          
          <p className="text-xs uppercase tracking-widest text-green-100 mt-2 mb-1">(Español)</p>
          <p className="text-sm font-semibold text-white text-center">"{item.fraseEs || item.context}"</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;