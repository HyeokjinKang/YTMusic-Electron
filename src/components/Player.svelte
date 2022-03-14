<script>
  import { id, type } from '../stores.js';

  let playing = [];

  const subscribeId = id.subscribe(value => {
    playing[1] = value;
    console.log(playing);
  });

  const subscribeType = type.subscribe(value => {
    playing[0] = value;
    console.log(playing);
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
        <span id="trackName">-</span>
        <span id="producerName"></span>
      </div>
      <img src="./icons/favorite.svg" alt="favorite" id="favorite" class="playerIcons">
      <img src="./icons/dislike.svg" alt="dislike" id="dislike" class="playerIcons">
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