import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyCSeGEG5T1fpnVSmnSRMutTMoFupmO_-P4"; 

const App = () => { 
  const [videos, setVideos] = useState([]); 
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => { 
    onTermSubmit('building');
  }, [])

 const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0])
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className=" ui row">
            <div className='eleven wide column'> 
            <VideoDetail video={selectedVideo} />
            </div>
          <div className='five wide column'>
          <VideoList
            onVideoSelect={(video) => setSelectedVideo(video) }
            videos={videos}
          />
          </div>
        </div>
      </div>
    </div>
  );

};

export default App;
