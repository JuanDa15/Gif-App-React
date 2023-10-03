import { useState } from 'react';
import SearchBar from './components/Searchbar';
import CategoryPreview from './components/CategoryPreview';

export default function App() {
  const [categories, setCategories] = useState<string[]>([
    'dragon ball',
    'pokemon',
    'naruto',
  ]);

  const onAddCategory = (category: string) => {
    if (categories.filter((item) => item === category).length > 0) return;
    const newCategories = structuredClone(categories)
    newCategories.unshift(category)
    setCategories(newCategories);
  };

  return (
    <div className='min-h-screen min-w-full bg-black'>
      <div className='max-w-[80ch] mx-auto'>
        <h1 className='text-6xl text-center animate-wiggle animate-infinite animate-duration-[7000ms] animate-ease-out'>
          {' '}
          {'<'}GIF'S
          <span className='underline text-purple-700 font-bold'>APP</span>
          {'>'}
        </h1>

        <div className='my-6'>
          <SearchBar onSearch={onAddCategory} />
        </div>

        {categories.map((category) => (
          <CategoryPreview 
            key={category}
            category={category} 
          />
        ))}
      </div>
    </div>
  );
}
