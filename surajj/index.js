

const cors = require("cors");

const express= require(`express`);
const app = express();

require("dotenv").config();
app.use(
    cors({
        origin: "http://localhost:3000",
        method:"GET,POST,PUT,DELETE ",
        credentials: true,
    })
)
const PORT= process.env.PORT || 4000;
app.use(express.json());


const roomsRoute = require("./routes/roomsRoutes");
const usersRoute = require("./routes/userRoute");
const bookingsRoute = require("./routes/bookingsRoute");
app.use(`/api/rooms`,roomsRoute);
 app.use(`/api/user`,usersRoute);
 app.use('/api/bookings',bookingsRoute)
app.listen(PORT,()=>{
    console.log(`server started at port no ${PORT}`);
})

const connect= require("./db");
connect();