import React, { useState }  from 'react'
import axios from "axios"
import { useEffect } from "react"
import Rom from '../components/Rom'
import 'antd/dist/reset.css';
import moment from 'moment';
import Loader from '../components/Loader';
import Error from '../components/Error'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
function HomeScreen  ()  {
  const [rooms,setrooms]=useState([]);
  const [loading,setloading]=useState();
  const[error,seterror]=useState();
  const [fromdate,setfromdate]=useState();
  const [todate,settodate]=useState();


useEffect(() => {
  (async () => {
    try {
      setloading(true);
      const data = (await axios.get(`http://localhost:5000/api/rooms/getallRooms`)).data
      console.log(data);
      setrooms(data)
      setloading(false);
      
    } catch (err) {
    seterror(true)
      console.log(error);
      seterror(false)
    }
  })();
},[]);

  function filterByDate(dates){
     //console.log(dates);
              // console.log((dates[0]).format('DD-MM-YYYY'));
              // console.log((dates[1]).format('DD-MM-YYYY'));
              setfromdate((dates[0]).format('DD-MM-YYYY'));
              settodate((dates[1]).format('DD-MM-YYYY'));
  }

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-3'>
        <RangePicker format='DD-MM-YYYY' onChange={filterByDate}/>
        </div>

      </div>
     <div className="row justify-content-center mt-5">
     {loading? (<h1><Loader/></h1>):error ?(<Error/>):(rooms.map((room)=>{
        return <div key={room._id} className="col-md-9 mt-2">
        <Rom room={room} fromdates={fromdate} todates={todate}/>

        </div>
      }))}
     </div>
        
      </div>
  )
}

export default HomeScreen;