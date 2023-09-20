import React, {useState, useEffect} from 'react';

const DestinationsListPage = () => {
    
    let [destinations, setDestinations] = useState([])

    useEffect(() => {
        getDestinations();
    }, [])

    let getDestinations = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/destinations/')
        let data = await response.json();
        setDestinations(data)
    }

    return (
        <div className='destinations-list'>
            {destinations.map((destination, index) => (
                <p>{destination.name}</p>
            ))}
        </div>
    )
}

export default DestinationsListPage