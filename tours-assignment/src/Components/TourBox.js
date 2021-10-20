import React, { useState } from 'react'

function TourBox({data}) {
    const { id, image, info, name, price } = data;
    const [readMore, setReadMore] = useState(false);
    const [cities, setCities] = useState(data)

    console.log(data);

    function removeCard(id) {
        document.getElementById(id).style.display = 'none';
    }

    return (
        <div className='cardContainer' id={id}>
            <img className='image' src={image} alt={name} />
            <div className='textContainer'>
                <p className='tourName'>{name}</p>
                <p className='price'>${price}</p>
                {readMore ?
                    <span>
                        <p className='info'>{info}</p>
                        <a className='readMore' onClick={() => setReadMore(false)}>Read Less</a>
                    </span>
                    :
                    <span>
                        <p className='info'>{info.split(' ').splice(0, 35).map((word) => {
                            return (
                                word + ' '
                            )
                        })}</p>
                        <a className='readMore' onClick={() => setReadMore(true)}> <p className='info'>...</p> Read More</a>
                    </span>
                }
                <a className='notInterested' onClick={() => removeCard(id)}>Not Interested</a>
            </div>
        </div>
    )
}

export default TourBox
