import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import catfoto from '../Assests/cat_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

import '../CSS/CatSingle.css'

function CatSingle() {
    const { id } = useParams();
    const [cat, setCat] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/cat/${id}`, {
            method: 'GET',
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then((data) => {
                setCat(data);
                setError(false);
            })
            .catch((err) => {
                console.error("Error retrieving data:", err);
                setError(true);
            });
    }, [id]);

    return (
        <>
            {error ? (
                <div>Error fetching data</div>
            ) : cat ? (

                <div id='background'>
                    <Navbar />

                    <div id='catOne'>
                        <div id='catimage'>
                            <img src={catfoto} alt="" />

                        </div>
                        <div id='about'>
                            <h1>Hi my name is <em>{cat.CAT_NAME}</em></h1>
                            <h2 style={{ color: "black" }}>General information</h2>

                        </div>

                        <div id='catdescription1'>
                            <h1>About</h1>
                            <br />
                            <h3>Name: {cat.CAT_NAME}</h3>
                            <h3>Age: {cat.CAT_AGE}</h3>
                            <h3>Vaccinated: {cat.CAT_VACCINATED === 1 ? <FontAwesomeIcon icon={faCheck} style={{ color: 'lightgreen' }} /> : <FontAwesomeIcon icon={faClose} style={{ color: 'red' }} />}</h3>
                        </div>
                        <div id='catdescription2'>
                            <p>Meet Whiskers, an adventurous feline with striking emerald-green eyes that sparkle with curiosity. Always eager to explore, Whiskers can often be found scaling bookshelves, peering into hidden nooks, or chasing fluttering leaves outdoors. With a daring spirit and a playful nature, this cat brings excitement and a touch of mystery to every day!</p>
                            <button id='meetMeButton'>Meet me</button>
                        </div>

                    </div>
                    <Footer />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default CatSingle;
