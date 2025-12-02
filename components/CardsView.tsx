import React from 'react';
import { DATA } from '../constants';
import { CategoryKey } from '../types';
import FlipCard from './FlipCard';

interface CardsViewProps {
  categoryKey: CategoryKey;
}

const CardsView: React.FC<CardsViewProps> = ({ categoryKey }) => {
  const category = DATA[categoryKey];

  if (!category) return <div>Category not found</div>;

  return (
    <section className="max-w-5xl mx-auto animate-fade-in">
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-3xl font-bold text-[#008C45]">{category.title}</h2>
        <p className="text-gray-600 mt-2">{category.desc}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item, index) => (
          <FlipCard key={`${item.it}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CardsView;