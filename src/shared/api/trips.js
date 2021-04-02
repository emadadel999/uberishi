import axios from "axios";
import { BACKEND_SERVER } from "../globals/ServerAddress";

export const createTrip = (trip) => {
  axios
    .post(`${BACKEND_SERVER}/api/createTrip`, trip)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
};

export const getTrips = () => {

};

export const reserveTrips = () => {
    
};

export const cancelReservation = () => {
    
};

