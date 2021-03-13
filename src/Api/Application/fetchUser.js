import { call, put } from 'redux-saga/effects'
import axios from "axios";
export default () => axios({
  method: 'GET',
  url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
  headers: {
    accept: 'application/json',
    'x-rapidapi-key': 'd70e7b3db5msh9b8196f5d7ce8efp17337djsn930872bf399a',
    'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
  }
}).then( (response) => {
  console.log(response.data);
  return response.data
}).catch(function (error) {
  console.error(error);
});