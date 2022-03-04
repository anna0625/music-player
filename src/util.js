import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Embers",
            artist: "Molly",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
            // generate random ID for us
            id: uuidv4(),
            // is the song playing right now?
            active: true,
            color: ['#BA4A46', "#FDF0DD"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=30135'
        },
        {
            name: "Rewind",
            artist: "SwuM",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
            // generate random ID for us
            id: uuidv4(),
            // is the song playing right now?
            active: false,
            color: ['#BA4A46', "#FDF0DD"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=30134'
        },
        {
            name: "Drift",
            artist: "Somni",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
            // generate random ID for us
            id: uuidv4(),
            // is the song playing right now?
            active: false,
            color: ['#BA4A46', "#FDF0DD"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=30133'
        }
    ];
}

export default chillHop;