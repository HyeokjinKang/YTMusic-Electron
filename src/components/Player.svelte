<script>
  import { onMount } from "svelte";
  import { Howl, Howler } from "howler";
  import { id, type } from '../stores.js';

  let playing = [];
  let favoIcon = [];
  let trackName = "";
  let producerName = ["", ""];
  let basicAuth = [];
  
  const fetchWithAuth = async (url) => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${btoa(`${basicAuth[1]}:${basicAuth[2]}`)}`
      }
    });
    const json = await res.json();
    return json;
  }

  const trackInitialize = async (id) => {
    const information = await fetchWithAuth(`${basicAuth[0]}/track/${id}`);
      trackName = information.videoDetails.title;
      producerName[0] = information.videoDetails.author;
    // @ts-ignore
    const stream = await window.electronAPI.getStream(id);
    console.log(stream);
  };

  const subscribeId = id.subscribe(async value => {
    playing[1] = value;
    if(value != "") {
      trackInitialize(value);
    }
  });

  const subscribeType = type.subscribe(value => {
    playing[0] = value;
  });

  onMount(async () => {
    // @ts-ignore
    const auth = await window.electronAPI.getSavedData();
    if(auth[0] != undefined) {
      basicAuth[0] = auth[0]; //url
      basicAuth[1] = auth[1]; //id
      basicAuth[2] = auth[2]; //pw
    }
  });
</script>

<div id="playerVerticalContainer">
  <div id="playerDurationContainer">
    <div id="playerDuration"></div>
  </div>
  <div id="playerContainer">
    <div id="albumContainer">
      <div id="albumArt"></div>
      <div id="albumInfoContainer">
        <span id="trackName">{trackName}</span>
        <span id="producerName">{producerName[0]}</span>
      </div>
      <img src="./icons/favorite.svg" bind:this={favoIcon[0]} alt="favorite" id="favorite" class="playerIcons">
      <img src="./icons/dislike.svg" bind:this={favoIcon[1]} alt="dislike" id="dislike" class="playerIcons">
    </div>
    <div id="controllerContainer">
      <span id="durationTime" class="controllerTimes">0:00</span>
      <img src="./icons/previous.svg" alt="previous" id="previous" class="controllerIcons">
      <img src="./icons/play.svg" alt="play" id="play">
      <img src="./icons/next.svg" alt="next" id="next" class="controllerIcons">
      <span id="lengthTime" class="controllerTimes">0:00</span>
    </div>
    <div id="menuContainer">
      <img src="./icons/volume.svg" alt="volume" id="volume" class="playerIcons">
      <input type="range" id="volumeSlider">
      <img src="./icons/shuffle.svg" alt="shuffle" id="shuffle" class="playerIcons">
      <img src="./icons/repeat.svg" alt="repeat" id="repeat" class="playerIcons">
      <img src="./icons/expand.svg" alt="expand" id="expand" class="playerIcons">
    </div>
  </div>
</div>

<style>
  #playerVerticalContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  #playerDurationContainer {
    cursor: pointer;
    background-color: #444;
    width: 100%;
    height: 5%;
  }

  #playerDuration {
    cursor: pointer;
    background-color: #EC4C4C;
    height: 100%;
    width: 0%;
    transition-duration: 0.3s;
  }

  #playerContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 95%;
  }

  #albumContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 30%;
  }

  #albumArt {
    background-color: #444;
    height: 9.5vh;
    width: 9.5vh;
  }

  #albumInfoContainer {
    margin-left: 1vw;
    margin-right: 1vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  #trackName {
    font-size: 2.5vh;
    font-weight: 700;
  }

  #producerName {
    color: #ffffffbb;
    font-size: 1.8vh;
    font-weight: 400;
  }

  #controllerContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 40%;
  }

  #menuContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    margin-right: 2vw;
    height: 100%;
    width: 30%;
  }

  #dislike {
    margin-left: 0.3vw;
  }

  #play {
    cursor: pointer;
    height: 5.5vh;
  }

  #volume {
    margin-right: 0.3vw;
  }

  .playerIcons {
    cursor: pointer;
    margin-left: 0.7vw;
    height: 2.5vh;
  }

  .controllerIcons {
    cursor: pointer;
    margin-left: 1vw;
    margin-right: 1vw;
    height: 4vh;
  }

  .controllerTimes {
    font-size: 1.7vh;
    color: #ffffff99;
  }
</style>