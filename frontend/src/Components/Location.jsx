import '../styles/Location.css';

function Location({setLocation}){

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    return(
        <div className='location'>
        <input 
                type="text" 
                placeholder="Select for location" 
                className='location-input'
                onChange={handleLocationChange}
            ></input>
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
    );
}

export default Location;