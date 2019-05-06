import axios from 'axios';

const KEY = 'AIzaSyDL3a4N6vFHsMj6WVSil8EnlJsQqy6irFg';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});