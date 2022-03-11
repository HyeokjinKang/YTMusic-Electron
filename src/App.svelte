<script>
  import { Router, Link, Route } from "svelte-routing";
  import Index from "./routes/Index.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path=""><Index /></Route>
  </div>
</Router>