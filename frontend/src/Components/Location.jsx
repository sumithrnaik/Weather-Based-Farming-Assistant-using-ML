import '../styles/Location.css';

function Location({ setLocation }) {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setLocation(e.target.value);
        }
    };

    return (
        <div className='location'>
            <input 
                type="text" 
                placeholder="Select for location" 
                className='location-input'
                onKeyDown={handleKeyDown}
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
    );
}

export default Location;
