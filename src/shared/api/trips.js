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


export const getTrips = (id, roleId) => {
  console.log("getTrips");
   return axios.get(`${BACKEND_SERVER}/api/trips/available/${id}/${roleId}`)
      .then((res) => {
        return res.data;
      })
    };

export const reserveTrips = (id,roleId,tripId) => {
  console.log(id,roleId,tripId);
  return axios.post(`${BACKEND_SERVER}/api/reservations`,
    {
      passengerId:id,
      rolId:roleId,
      tripId:tripId
    }
    )
    .then(res => {
      console.log("Success")
  })
  .catch(error => {
    console.log(error)
  })
};

export const cancelReservation = (id,roleId,tripId) => {
  console.log("handleCancel");
    return axios.delete(`${BACKEND_SERVER}/api/reservations`,
    {data:{
      passengerId:id,
      rolId:roleId,
      tripId:tripId
    }})
  .then((res) => {
    return res.data;
  })
};

