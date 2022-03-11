<script lang="ts">
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";

  export let selected;

  let indicator;

  const links = ["/home", "/explore", "/library"]

  const link = (n) => {
    selected = n;
    push(links[n]);
    indicator.style.marginTop = `${6 * selected}vh`;
  };

  onMount(() => {
    indicator.style.marginTop = `${6 * selected}vh`;
  });
</script>

<div id="sideBar">
  <img src="./images/icon.png" alt="YTM" id="logoIcon">
  <div id="sideBarSelectionContainer">
    <div id="sideBarSelectionIndicator" bind:this={indicator}></div>
    <div id="sideBarSelection">
      {#if selected == 0}
        <span class="selection selected">Home</span>
      {:else}
        <span class="selection" on:click={() => {link(0)}}>Home</span>
      {/if}
      {#if selected == 1}
        <span class="selection selected">Explore</span>
      {:else}
        <span class="selection" on:click={() => {link(1)}}>Explore</span>
      {/if}
      {#if selected == 2}
        <span class="selection selected">Library</span>
      {:else}
        <span class="selection" on:click={() => {link(2)}}>Library</span>
      {/if}
    </div>
  </div>
</div>

<style>
  #sideBar {
    box-sizing: border-box;
    background-color: #333;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 15vw;
    height: 100%;
    padding-top: 3vh;
  }

  #logoIcon {
    padding-left: 2vw;
    width: 6vh;
    height: 6vh;
  }

  #sideBarSelectionContainer {
    margin-top: 3vh;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 18vh;
  }

  #sideBarSelectionIndicator {
    margin-top: 0vh;
    background-color: #EC4C4C;
    width: 0.5vw;
    height: 6vh;
    transition-duration: 0.3s;
  }

  #sideBarSelection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }

  .selection {
    cursor: pointer;
    color: #FFFFFFCD;
    text-decoration: none;
    padding-left: 1.5vw;
    font-size: 3vh;
    font-weight: 300;
  }

  .selection.selected {
    cursor: default;
    color: #FFFFFF;
    font-weight: 700;
  }
</style>