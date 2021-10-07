import React, { useState } from 'react';
import TourBox from './Components/TourBox';
import ErrorPage from './Components/ErrorPage';
import LoadingPage from './Components/LoadingPage';

let url = "https://course-api.com/react-tours-project";
let name;

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    fetch(url)
    .then(response => {
        console.log('Tour');
        name = response.json();
        console.log(name);  
    })
    .catch(err => {
        console.log(err);
    })

    if (isLoading === true) {
        return <LoadingPage />
    }
    if (isError === true) {
        return <ErrorPage />
    }
    console.log('name2');
    console.log(name);

    return (
        <>
            <div>
                <TourBox data={name} /* key={destination.id} *//>
            </div>
        </>
    )
}

export default App
