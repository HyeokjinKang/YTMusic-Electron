<script>
  import { onMount } from "svelte";

  import Home from "./Home.svelte";
  import Explore from "./Explore.svelte";
  
  import Sidebar from "../../components/Sidebar.svelte";

  export let screen;
</script>

<main>
  <div id="mainContainer">
    <Sidebar selected={screen} />
    <div id="contentContainer">
      {#if screen == 0}
        <Home />
      {:else if screen == 1}
        <Explore />
      {/if}
    </div>
  </div>
</main>

<style>
  #mainContainer {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 90vh;
  }

  #contentContainer {
    padding-left: 2vw;
    padding-right: 2vw;
    box-sizing: border-box;
    width: 85vw;
    height: 100%;
  }
</style>