import axios from "axios";
import { BACKEND_SERVER } from "../globals/ServerAddress";

export const createTrip = (trip) => {
  axios
    .post(`${BACKEND_SERVER}/api/reservation`, trip)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
};


export const getTrips = () => {
   
    return axios.get(`${BACKEND_SERVER}/api/listTrips/1/2`)
      .then((res) => {
       
        console.log(res);
        return res;
      })
    //   .catch((err) => {
    //     const error = err.response ? err.response.data.message : err.message;
    //     dispatch(fetchAuthFailed(error));
    //   });
   
 };

export const reserveTrips = () => {
    
};

export const cancelReservation = () => {
    
};

