import React, { useState, useEffect } from 'react';
import TourBox from './Components/TourBox';
import ErrorPage from './Components/ErrorPage';
import LoadingPage from './Components/LoadingPage';

const url = "https://course-api.com/react-tours-project";

function App() {
    const [destination, setDestination] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

        fetch(url)
        .then(response => {
            console.log('Destination');
            const name = response.json();
            setDestination(name);
            console.log(name);  
        })
        .catch(err => {
            console.log(err);
        })
    
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [])

    if (isLoading === true) {
        return <LoadingPage />
    }
    if (isError === true) {
        return <ErrorPage />
    }

    return (
        <>
            <div>
                {destination.map((card) => {
                    return <TourBox data={card} key={card.id}/>
                })}
            </div>
        </>
    )
}

export default App
