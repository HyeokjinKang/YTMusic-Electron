<script>
  import Router from "svelte-spa-router";

  import Index from "./routes/Index.svelte";

  import Home from "./routes/home/Home.svelte";
  import Explore from "./routes/home/Explore.svelte";
  import Library from "./routes/home/Library.svelte";
  
  import Sidebar from "./components/Sidebar.svelte";
  import Player from "./components/Player.svelte";

  const routes = {
    '/': Index,
    '/home': Home,
    '/explore': Explore,
    '/library': Library,
  };

  export let screen = 0;
</script>

<div id="mainContainer">
  <Sidebar selected={screen} />
  <div id="contentContainer">
    <Router {routes}/>
  </div>
</div>
<Player />

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