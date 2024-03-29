import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'; 
import Loader from '../components/Loader'
import Error from '../components/Error';
import moment from 'moment';
moment().format();

function BookScreen() {
  const params = useParams();
  const [loading,setloading]=useState(true);
  const[error,seterror]=useState(false);
  const[room,setroom]=useState();
  
  // const room = params.roomid;
   const fromdate=params.fromdates;
   
   const todate=params.todates;

   const d1= moment(fromdate,'DD-MM-YYYY');
   
   
   const d2= moment(todate,'DD-MM-YYYY');
   const totaldays= d2.diff(d1,'days')+1;
   
  const [totalamount,settotalamount]= useState();
  
   
  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const data = (await axios.post(`http://localhost:5000/api/rooms/getroombyid`,{roomid : params.roomid})).data
        setroom(data)
        settotalamount(data.rentPerDays*totaldays)
        setloading(false);
        
      }
      
      
      
      catch (err) {
        console.log(err);
      seterror(true)
        setloading(false);
      }
    })();
  },[]);

   async function bookRoom(){
         const bookingDetails= {
          room,
          userid:JSON.parse(localStorage.getItem('currentUser'))._id,
          totaldays,
          fromdate,
          todate,
          


          


         }
         
       
         try{
          const result=await axios.post('http://localhost:5000/api/bookings/bookroom',bookingDetails)
         console.log(result);
         }catch(error){

         }
   }
  
  
  return (
    
   
     <div  className="m-5">
      {/* <h1>room id = {room._id}</h1> */}
      {loading ?(<h1><Loader/></h1>):error?(<Error/>):(<div>
        <div className="row justify-content-center mt-5 bs">
          <div className='col-md-5'>
            <h1>{room.name}</h1>
            <img src={room.imageUrls[0]} alt={room.name} className='bigimg'/>

           

            </div>
            <div className='col-md-5'>
             <div style={{textAlign:"right"}}>
             <b>Booking Details</b>
              <hr />
              <b> <p>Name : </p>
              <p>From Date :{fromdate}</p>
              <p>To Date :{todate}</p>
              <p>Max Count : {room.maxCount}</p>
            </b>
             </div>
            <div style={{textAlign:"right"}}>
              <h1>Amount</h1>
              <hr></hr>
              <b> <p>Total Days :{totaldays}</p>
                  <p>Rent Per Day : {room.rentPerDays}</p>
                  <p>Total Amounts :{totalamount}</p>
                
              </b>
             </div>
             <div style={{float:'right'}}>
              <button className="btn btn-primary" onClick={bookRoom}>Pay Now</button>
             </div>
          </div>
         
        </div>
      </div>)}
    </div>
    
  )
}

export default BookScreen