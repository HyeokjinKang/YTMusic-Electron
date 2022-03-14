<script>
  import { onMount } from "svelte";

  export let data;

  let type = "";

  onMount(() => {
    if(data.year) {
      type = "Album";
    } else if(data.artists) {
      if(data.artists[0].name == "Song" && data.artists.length > 1) {
        type = "Song";
      } else {
        type = "Video";
      }
    } else if(data.subscribers) {
      type = "Artist";
    } else if(data.description && !data.author) {
      type = "Mix";
    } else {
      type = "Playlist";
    }
  });
</script>

<div id="curationContainer">
  <div id="imageContainer" style="background-image: url('{data.thumbnails[data.thumbnails.length - 1].url}')">
    <div id="infoContainer">
      <span id="infoLeft">
        {type}
      </span>
      <span id="infoRight">
        {#if type == "Album"}
          {data.year}
        {:else if type == "Song"}
          {data.artists[1].name}
        {:else if type == "Video"}
          {data.artists[0].name}
        {/if}
      </span>
    </div>
  </div>
  <span id="curationTitle">{data.title}</span>
  {#if data.description}
    <span id="curationExplanation">{data.description}</span>
  {/if}
</div>

<style>
  #curationContainer {
    cursor: pointer;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 0 0 auto;
    width: 12vw;
    margin-right: 2vw;
  }

  #imageContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 auto;
    width: 12vw;
    height: 12vw;
    background-position: center;
    background-size: cover;
    border-radius: 1vh;
  }

  #curationTitle {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    margin-top: 2vh;
    font-size: 2.5vh;
    font-weight: 700;
    max-height: 3.2em;
    overflow: hidden;
  }

  #infoContainer {
    box-sizing: border-box;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    width: 100%;
    backdrop-filter: blur(5px);
    background-color: #000000aa;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 1vw;
    opacity: 0;
    border-radius: 0 0 1vh 1vh;
    transition-duration: .3s;
  }

  #imageContainer:hover > #infoContainer {
    opacity: 1;
    height: 1.5vw;
  }

  #infoLeft {
    font-size: 1.7vh;
    font-weight: 600;
  }

  #infoRight {
    text-align: right;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 70%;
    font-size: 1.7vh;
    font-weight: 400;
    overflow-x: hidden;
  }

  #curationExplanation {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    color: #ffffffcc;
    margin-top: 1vh;
    font-size: 1.7vh;
    font-weight: 500;
    max-height: 3.2em;
    overflow-y: hidden;
  }
</style>