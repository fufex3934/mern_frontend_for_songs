import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { setSongs } from "./songSlice";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const API_URL = "https://mern-backend-for-song.onrender.com/api/songs";

function* fetchSongs() {
  try {
    const response: AxiosResponse<Song[]> = yield call(axios.get, API_URL);

    yield put(setSongs(response.data));
  } catch (error) {
    console.error("Failed to fetch songs", error);
  }
}

function* watchSongs() {
  yield takeEvery("songs/fetchSongs", fetchSongs);
}

export default function* rootSaga() {
  yield watchSongs();
}
