import axios from "axios";
import { SERVICE_KEY } from "../../constants/constants";

export const getTMByCity = async (city: string) => {
  try {
    const data = await axios.get(
      `https://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getTMStdrCrdnt`,
      {
        params: {
          serviceKey: SERVICE_KEY,
          returnType: "json",
          pageNo: 1,
          umdName: city,
        },
      }
    );

    return data.data;
  } catch (err) {
    return err;
  }
};

export const getCityByTm = async (x: string, y: string) => {
  try {
    const data = await axios.get(
      "https://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList",
      {
        params: {
          serviceKey: SERVICE_KEY,
          returnType: "json",
          tmX: x,
          tmY: y,
          ver: 1.0,
        },
      }
    );

    return data.data;
  } catch (err) {
    return err;
  }
};

export const getAtmosphereByCity = async (city: string) => {
  try {
    const data = await axios.get(
      "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty",
      {
        params: {
          serviceKey: SERVICE_KEY,
          returnType: "json",
          numOfRows: 100,
          pageNo: 1,
          stationName: city,
          dataTerm: "DAILY",
          ver: 1.0,
        },
      }
    );

    return data.data;
  } catch (err) {
    return err;
  }
};
