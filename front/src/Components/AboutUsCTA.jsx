import React from 'react'
import girl from '../Assests/Rochelle1.jpg'
import '../CSS/CTA.css'
import '../CSS/AboutUsCTA.css'


function AboutUsCTA() {
  return (
    <div className='CTA' id='AboutUs'>
        <div className='leftbox'>
            <div>
                <h1>About Us</h1>
                <h2>Owner: Rochelle du Toit</h2>
            </div>
            

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis autem repudiandae voluptates ipsum. Repellat harum quibusdam, doloribus sed doloremque voluptatibus illo blanditiis alias, adipisci maxime perspiciatis suscipit eius consectetur saepe. 
            </p>

            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ea nobis, magni magnam eveniet ex doloremque suscipit, quidem voluptates velit tempore distinctio eum tenetur nulla recusandae, pariatur voluptatum est vitae.

            </p>

            


        </div>
        <div className='rightbox'>
            <img src={girl} alt="" />
        </div>
    </div>
  )
}

export default AboutUsCTA