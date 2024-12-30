import React, { useEffect, useState } from 'react'
import "../CSS/Booking.css"
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';


function Booking() {

    

    const formatToSQLDate = (date) => {
        const year = date.getFullYear(); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

    const [token,setToken] = useState('')
    const [user,setUser] = useState('')
    const [date, setDate] = useState(null);
    const [time,setTime] = useState("9:00")
    const [catID, setCatID] = useState(null)

    

    const handleDate = (date) => {
        setDate(date)
    }


    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if(storedToken){
            setToken(storedToken)
        }
        
    } , [])

    useEffect(() => {

        if(!token){
            return console.log("Unvalid token")
        }
        const fetchUser = async() => {
        try {
            const response = await 
            fetch('http://localhost:5000/user', {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            if(!response.ok){
                const error = await response.json()
                window.alert(`Invalid token ${error}`)
                return;
            }
            const user = await response.json()
            setUser(user)
            

        } catch (error) {
            console.error("There was an error" , error);

        }
    };
    fetchUser();
    },[token])

    // headers:`Bearer ${token}`

    const handleCreateBooking = async(catID,date,time) => {
        const currentDate = new Date();
        if(date < currentDate){
            return window.alert(`Error: Date(${date}) has already passed`)
        }
        date = formatToSQLDate(date)
        try {
            const createBooking = await 
            fetch('http://localhost:5000/booking' , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                },
                body: JSON.stringify(
                    {cat_id:catID,
                    date:date,
                    time:time
                    }
                )
            })

            if(!createBooking.ok){
                const err = await res.json();
                window.alert(`Error: ${err.error}`)
            }

            const res = createBooking.json()
            window.alert("Booking succesfully booked")
            setCatID(null)
            setDate('')
            setTime("9:00")


        } catch (error) {
            console.error("There was an error" , error);

        }
    }

  return (
    <div id="background">
        <div id='Booking'>
            {
                token ? 
                (
                    user ? (
                    <>
                        <div id='headercomponent'>
                            <h1 >Bookings</h1>
                        </div>
                        
                        <div id='bookingcomponent'>
                        
                        <h2>Book a time to join our furry friends , <em>{user.USER_NAME}</em></h2> 
                        <div id='kalender'>
                            <h3>Book date</h3>
                        <Calendar id="calender" onChange={handleDate} value={date} />
                        
                        </div>
                        
                        <div id='tyd'>
                            <label htmlFor="timeslot"><h3>Select a time</h3></label>
                                <select id="timeslotlist" name="timeslot" value={time} onChange={e => setTime(e.target.value)}>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                </select>
                        </div>

                        
                        
                    </div>

                    <div id='calenderform'>
                        
                        <h2>Booked date</h2>
                            <label className='labels'>Booking Date:</label>
                            <br />
                            <p>{date ? date.toISOString().split("T")[0] : "None"}</p>
                            <br />

                            <label className='labels'>Booking Time:</label>
                            <br />
                            <p>{time}</p>
                            <br />

                            <button id='scheduleButton' onClick={() => {handleCreateBooking(catID,date,time)}}>Schedule</button>
                    </div>
                    </>
                    
                    
                )
                    :
                    (<div> Loading Data </div>)
                    
                )
                :
                (
                    <div>
                        Please <Link to='/Login'>login</Link> before scheduling a meeting
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Booking