import {useNavigate} from 'react-router-dom'
import ProfileInfo from './ProfileInfo'
import SearchBar from './SearchBar';
import { useState } from 'react';

const Navbar = ({onSearchNote, handleClearSearch}) => {
    const [searchQuery, setSearchQuery] = useState("");
    
    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery);
            setSearchQuery("");
        }
    }

    const onClearSearch = () => {
        setSearchQuery("");
        handleClearSearch();
    }

    const navigate = useNavigate("/login");
    
    const onLogout = () => {
        localStorage.clear();
        navigate("/login");
    }

  return (
    <nav className='bg-white flex items-center justify-between px-6 py-2 drop-shadow '>
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>
        
        <SearchBar 
            value={searchQuery}
            onChange={({ target }) => {
                setSearchQuery(target.value);
            }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
        />

        <ProfileInfo onLogout={onLogout}/>
    </nav>
  )
}

export default Navbar