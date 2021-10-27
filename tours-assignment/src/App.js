import React, { useState, useEffect } from 'react';
import TourBox from './Components/TourBox';
import ErrorPage from './Components/ErrorPage';
import LoadingPage from './Components/LoadingPage';

let url = "https://course-api.com/react-tours-project";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [city, setCity] = useState([]);

    const getCity = async () => { // Fetches from the api
        const response = await fetch(url);
        const city = await response.json();
        console.log(city);
        setCity(city);
    }

    useEffect(() => {
        getCity()
            .then(setIsLoading(false))
            .catch((error) => {
                console.log(error);
                setIsError(true);
            })
    },[])

    if (isLoading === true) { // Loading Page
        return <LoadingPage />
    }
    if (isError === true) { // Error Page
        return <ErrorPage />
    }

    return (
        <>
            <h1 id='title'>Our Tours</h1>
            <button onClick={() => setIsError(true)}>Error</button>
            {/* Passes each set of data into the TourBox component */}
            <div className='cityCards'>
                {city.map((card) => {
                    return <TourBox data={card} key={card.id}/>
                })}
            </div>
        </>
    )
}

export default App