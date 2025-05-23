import React from 'react'
import '../CSS/CatSearch.css'
import catfoto from '../Assests/cat_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CatSearch() {
    const [cats, setCats] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/cat/all?term=${search}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setCats(data),

                console.log(cats))
            .catch(error => console.error('Fetching cat array failed', error));
    }, [search]);

    return (
        <div id='background'>

            <div id='Cat'>
                <h1>Cats </h1>
                <label>Search for a cat :</label>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <br />
                <br />
                <h2>Ready to be adopted</h2>
                <div id='catTiles'>
                    {cats.length > 0 ? (
                        cats.map(cat => (
                            <Link to={`/CatSingle/${cat.CAT_ID}`}>
                            <div key={cat.CAT_ID} className='catsingle'>
                                <img src={catfoto} alt="" />
                                <div className='catsingleteks'>
                                    <h1>{cat.CAT_NAME}</h1>
                                    <div>
                                    <h4>Age: {cat.CAT_AGE}</h4>
                                    <h4>Breed: {cat.CAT_BREED}</h4>
                                    <h4>Vaccinated: {cat.CAT_VACCINATED === 1 ? <FontAwesomeIcon icon={faCheck} style={{ color: 'lightgreen' }} /> : <FontAwesomeIcon icon={faClose} style={{ color: 'red' }} />}</h4>
                                    </div>
                                    
                                </div>

                            </div>
                            </Link>
                        ))
                    ) : (
                        <p id='pcat'>No cats found matching your search.</p>
                    )}
                </div>



            </div>
        </div>

    )
}

export default CatSearch