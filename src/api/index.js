import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    // request
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude:  sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "3f3eb66346msh0a4b6db882d8ffcp1b248ajsn8647f29403d6",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
