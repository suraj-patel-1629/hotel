import React,{useState} from "react"
import {Modal,Button,Carousel} from "react-bootstrap"
import {Link} from 'react-router-dom';

const Rom = ({ room,fromdates,todates }) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageUrls[0]} alt={room.name} className="smallimg" />
      </div>
      <div className="col-md-7">
        <h1>{room.name}</h1>
        <b>
          <p>max Count : {room.maxCount}</p>
          <p>Phone Number : {room.phoneNumber}</p>
          <p>Type :{room.type}</p>
        </b>
        <div style={{ float: `right` }}>
            <Link to={`/book/${room._id}/${fromdates}/${todates}`}>
            <button className="btn btn-primary m-2" onClick={handleShow}>Book Now</button>
            </Link>
          <button className="btn btn-primary" onClick={handleShow}>view Detail</button>
        </div>
      </div>

      

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header >
          <Modal.Title ><b>{room.name}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel >
     
      {room.imageUrls.map(url=>{
        return  <Carousel.Item>
        <img
          className="d-block w-100 bigimg"
          src={url}
          alt="First slide"
        />
        
      </Carousel.Item>
      })}
        
    </Carousel>
    <p className="dispara">{room.
description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>





    </div>
  );
};

export default Rom;
