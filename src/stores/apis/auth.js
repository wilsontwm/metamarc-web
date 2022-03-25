import http from "./../utils/http";

export function authenticate({ accountId, walletType }) {
  return async (dispatch, getState) => {
    // const response = await http.GET(
    //   `place-api/place/details/json?place_id=${place.place_id}&key=${process.env.VITE_GOOGLE_MAPS_API_KEY}`
    // );
    // if (response.status == "OK") {
    //   const p = new Place({
    //     id: place.place_id,
    //     name: place.description,
    //     latitude: response.result.geometry.location.lat,
    //     longitude: response.result.geometry.location.lng,
    //   });
    //   // Add to the list
    //   dispatch({ type: "places/placeAdded", payload: p });
    // }
  };
}
