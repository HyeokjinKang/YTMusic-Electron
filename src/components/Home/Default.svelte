<script>
  export let data;
</script>

<div id="curationContainer">
  <div id="imageContainer" style="background-image: url('{data.thumbnails[data.thumbnails.length - 1].url}')"></div>
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
  }
</style>