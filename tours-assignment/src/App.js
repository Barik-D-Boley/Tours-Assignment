import React, { useState, useEffect } from 'react';
import TourBox from './Components/TourBox';
import ErrorPage from './Components/ErrorPage';
import LoadingPage from './Components/LoadingPage';

let url = "https://course-api.com/react-tours-project";
// let name;

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [city, setCity] = useState([]);

    const getCity = async () => {
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
    
    // fetch(url)
    // .then(response => {
    //     console.log('Tour');
    //     name = response.json();
    //     console.log(name);
    // })
    // .catch(err => {
    //     console.log(err);
    // })

    if (isLoading === true) {
        return <LoadingPage />
    }
    if (isError === true) {
        return <ErrorPage />
    }

    console.log(city);
    return (
        <>
            <h1 id='title'>Our Tours</h1>
            <div className='cityCards'>
                {city.map((card) => {
                    return <TourBox data={card} key={card.id}/>
                })}
            </div>
        </>
    )
}

export default App