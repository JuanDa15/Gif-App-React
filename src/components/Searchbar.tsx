import { useState } from "react"
import { HTMLAttributes, ChangeEventHandler, FormEventHandler } from 'react'
import SearchIcon from "../icons/SearchIcon"

interface Props extends HTMLAttributes<HTMLInputElement> {
  onSearch?: (category: string) => void
} 

export default function SearchBar({
  onSearch,
  ...others
}: Props): JSX.Element {
  const [search, setSearch] = useState<string>('')

  const handleChange:ChangeEventHandler<HTMLInputElement> =  (e) => {
    const { target: {value}} = e
    setSearch(value.toLocaleLowerCase())
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (search.length === 0) return;
    onSearch && onSearch(search.trim());
    setSearch('')
  }

  return (
    <form 
      className="flex justify-center items-center h-12" 
      role="searchbox"
      onSubmit={handleSubmit}
    >
      <input
        role="search"
        type="search"
        placeholder="Search..."
        className="w-full h-full px-4 py-2 bg-gray-900 rounded-md focus:outline-purple-700 focus:outline-2 focus:outline rounded-r-none"
        value={search}
        onChange={handleChange}
        {...others}
      />
      <button 
        type="submit"
        role="button"
        className="w-12 h-12 rounded-md bg-gray-900 hover:bg-purple-700 text-white grid place-items-center rounded-l-none transition-colors disabled:opacity-80"
        disabled={!search}
      >
        <SearchIcon />
      </button>
    </form>
  )
}