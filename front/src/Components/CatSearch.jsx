import React from 'react'
import { useState, useEffect } from 'react';



function CatSearch() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cat/all', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setCats(data),

                console.log(cats))
            .catch(error => console.error('Fetching cat array failed', error));
    }, []);
    return (
        <div>
            <h1>Cats</h1>
            <h2>Ready to be adopted</h2>
            <div id='CatTiles'>
                {cats.map(cat =>

                    <div key={cat.CAT_ID} className='catsingle'>
                        <h3>{cat.CAT_NAME}</h3>
                        <p>{cat.CAT_DESCRIPTION}</p>
                        <h4>
                        Vaccinated: {cat.CAT_VACCINATED === 1 ? "Yes" : "No"}
                        </h4>

                    </div>

                )}

            </div>


        </div>
    )
}

export default CatSearch