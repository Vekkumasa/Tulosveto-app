import axios, { AxiosRequestConfig } from 'axios';
import Constants from 'expo-constants';
import { Response } from './types';

const Request = async () => { 
  if (Constants.manifest?.extra) {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
      params: {league: '39', season: '2021'},
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        'x-rapidapi-key': Constants.manifest?.extra.x_rapidapi_key
      }
    };
  
    const response = await axios.request<Response>(options);
  
    return response.data;
  } 
  return null;
};

export default Request;