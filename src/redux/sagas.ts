import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { setSongs } from "./songSlice";  // Import the correct action from your slice

// Define the Song interface
interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const API_URL = "https://mern-backend-for-song.onrender.com/api/songs"; // Replace with your actual API URL

// Define the fetchSongs generator function
function* fetchSongs() {
  try {
    // Perform the API call and specify the response type
    const response: AxiosResponse<Song[]> = yield call(axios.get, API_URL);

    // Dispatch the setSongs action with the received data
    yield put(setSongs(response.data)); // Correctly dispatch the data to the Redux store
  } catch (error) {
    console.error("Failed to fetch songs", error);
  }
}

// Watch for the fetchSongs action
function* watchSongs() {
  yield takeEvery("songs/fetchSongs", fetchSongs); // Watch for the fetchSongs action to trigger the saga
}

// Root saga combining all sagas
export default function* rootSaga() {
  yield watchSongs(); // Start watching for the action
}
