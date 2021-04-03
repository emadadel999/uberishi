import axios from "axios";
import { BACKEND_SERVER } from "../globals/ServerAddress";

export const createTrip = (trip, history) => {
  axios
    .post(`${BACKEND_SERVER}/api/trips`, trip)
    .then((res) => {
      const response = res.data.responseCode;
      if (response != 200) throw new Error(`error ${response}`);
      history.push("/trips");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getLocations = () => {
  return axios.get(`${BACKEND_SERVER}/api/locations`).then((res) => {
    return res.data;
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
export const getDriverTrips = (driverId, roleId) => {
  return axios.get(`${BACKEND_SERVER}/api/trips/${driverId}/${roleId}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
}

export const getTrips = () => {
  return axios.get(`${BACKEND_SERVER}/api/listTrips/1/2`).then((res) => {
    console.log(res);
    return res;
  });
  //   .catch((err) => {
  //     const error = err.response ? err.response.data.message : err.message;
  //     dispatch(fetchAuthFailed(error));
  //   });
};

export const reserveTrips = () => {};

export const cancelReservation = () => {};
