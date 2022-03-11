<script>
  import Router from "svelte-spa-router";

  import Index from "./routes/Index.svelte";

  import Home from "./routes/home/Home.svelte";
  import Explore from "./routes/home/Explore.svelte";
  import Library from "./routes/home/Library.svelte";
  
  import Sidebar from "./components/Sidebar.svelte";
  import Player from "./components/Player.svelte";
  import Searchbox from "./components/Searchbox.svelte";

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
    <Searchbox />
    <div id="routerContainer">
      <Router {routes}/>
    </div>
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
    display: flex;
    flex-direction: column;
    padding-left: 15vw;
    box-sizing: border-box;
    width: 100vw;
    height: 100%;
  }

  #routerContainer {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    padding: 0vw 2vw 0vw 2vw;
    box-sizing: border-box;
  }
</style>