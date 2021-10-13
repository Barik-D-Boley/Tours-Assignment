import React, { useState } from 'react'

function TourBox({data}) {
    const { image, info, name, price } = data;
    // console.log('Destination');
    // console.log(data);

    function expandText(text) {
        let letterCount = text.info.split('').length;
        console.log(letterCount);
        if (letterCount >= 200) {
            info = 'More than 200 letters'
        } else {
            info = 'Less than 200 letters'
        }
    }

    function removeCard() {

    }

    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="extra-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
            commodi officia aliquam! Maxime.
        </p>
    </div>
    const linkName = readMore?'Read Less << ':'Read More >> '

    return (
        <div className='cardContainer'>
            <button onClick={() => expandText({info})}>Hallo</button>
            <img className='image' src={image} alt={name} />
            <p className='name'>{name}</p>
            <p className='price'>{price}</p>
            <p className='info'>
                {info}
                <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                {readMore && extraContent}
            </p>
            <button onClick={() => removeCard()}>Not Interested</button>
        </div>
    )
}

export default TourBox
