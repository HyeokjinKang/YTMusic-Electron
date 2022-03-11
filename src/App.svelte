<script>
  import { Router, Route } from "svelte-routing";

  import Index from "./routes/Index.svelte";

  import Home from "./routes/home/Home.svelte";
  import Explore from "./routes/home/Explore.svelte";
  import Library from "./routes/home/Library.svelte";
  
  import Sidebar from "./components/Sidebar.svelte";
  import Player from "./components/Player.svelte";

  export let url = "";
  export let screen = 0;
</script>

<Router url="{url}">
<div id="mainContainer">
  <Sidebar selected={screen} />
  <div id="contentContainer">
      <Route path=""><Index /></Route>
      <Route path="/home"><Home /></Route>
      <Route path="/explore"><Explore /></Route>
      <Route path="/library"><Library /></Route>
  </div>
</div>
</Router>
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