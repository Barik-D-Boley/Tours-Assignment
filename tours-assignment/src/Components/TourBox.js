import React, { useState } from 'react'

function TourBox({data}) {
    const { id, image, info, name, price } = data;
    const [readMore, setReadMore] = useState(false);

    function removeCard(id) {
        document.getElementById(id).style.display = 'none';
    }

    return (
        <div className='cardContainer' id={id}>
            <img className='image' src={image} alt={name} />
            <div className='textContainer'>
                <div class='titleContainer'>
                    <p className='tourName'>{name}</p>
                    <p className='price'>${price}</p>
                </div>
                {/* Ternary statement that displays more or less information based on what the value of readMore is */}
                {readMore ?
                    // if readMore is selected, then it displays all the information
                    <>
                        <p className='info'>{info}</p>
                        <a className='readMore' onClick={() => setReadMore(false)}> Read Less</a>
                    </>
                    :
                    // else the number of words is limited to the first 35
                    <>
                        <p className='info'>{info.split(' ').splice(0, 35).map((word) => {
                            return (
                                word + ' '
                            )
                        })}</p>
                        <a className='readMore' onClick={() => setReadMore(true)}> <p className='info'>...</p> Read More</a>
                    </>
                }
                <div className='notInterestedDiv'><a className='notInterested' onClick={() => removeCard(id)}>Not Interested</a></div>
            </div>
        </div>
    )
}

export default TourBox