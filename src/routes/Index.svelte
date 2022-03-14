<script>
  import { homeData } from '../stores.js';
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";
  let url = "";
  let id = "";
  let pw = "";

  let formContainer, logContainer, log, isLoaded;

  const fetchWithAuth = async (url) => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
          "Authorization": `Basic ${btoa(`${id}:${pw}`)}`
      }
    });
    const json = await res.json();
    return json;
  }

  const loadingInterval = () => {
    log.innerText += ".";
  }

  const retryTimeout = () => {
    isLoaded = false;
    formContainer.classList.add("visible");
    logContainer.classList.add("invisible");
  }

  const verifyAuth = async () => {
    formContainer.classList.remove("visible");
    logContainer.classList.remove("invisible");
    log.innerText = "Connection";
    let interval = setInterval(loadingInterval, 250);
    try {
      const connection = await fetchWithAuth(url);
      clearInterval(interval);
      if(connection.status == "success" && connection.message == "welcome to YTM-server") {
        log.innerText += " ok";
      } else {
        setTimeout(retryTimeout, 1500);
        log.innerText += " failed";
        return;
      }
      log.innerText += "\nAuth";
      interval = setInterval(loadingInterval, 250);
      const auth = await fetchWithAuth(`${url}/auth`);
      clearInterval(interval);
      console.log(auth);
      if(auth.status == "success" && auth.message == "authentication successful") {
        log.innerText += " ok";
      } else {
        setTimeout(retryTimeout, 1500);
        log.innerText += " failed";
        return;
      }
      log.innerText += "\nFetch Data";
      interval = setInterval(loadingInterval, 250);
      const data = await fetchWithAuth(`${url}/getHome/15`);
      clearInterval(interval);
      if(data.length == 15) {
        homeData.set(data);
        log.innerText += " ok";
        if(isLoaded) {
          return replace('/home');
        }
      } else {
        setTimeout(retryTimeout, 1500);
        log.innerText += " failed";
        return;
      }
      log.innerText += "\nSaving Data";
      interval = setInterval(loadingInterval, 250);
      try {
        // @ts-ignore
        const result = await window.electronAPI.initializeSave(url, id, pw);
        clearInterval(interval);
        if(result == "complete") {
          log.innerText += " success";
          setTimeout(() => {
            replace('/home');
          }, 500);
        } else {
          setTimeout(retryTimeout, 1500);
          log.innerText += " failed";
          return;
        }
      } catch (e) {
        clearInterval(interval);
        log.innerText += " failed, skip saving for web..";
        setTimeout(() => {
          replace('/home');
        }, 2000);
      }
    } catch(e) {
      console.error(e);
      setTimeout(retryTimeout, 1500);
      clearInterval(interval);
      log.innerText += " failed";
      return;
    }
  }

  onMount(async () => {
    // @ts-ignore
    const auth = await window.electronAPI.getSavedData();
    if(auth[0] != undefined) {
      url = auth[0];
      id = auth[1];
      pw = auth[2];
      verifyAuth();
      isLoaded = true;
    }
  });
</script>

<main>
  <div id="headerContainer">
    <img src="./images/icon.png" alt="YTM" id="logoIcon">
    <span id="title">Authentication</span>
  </div>
  <p class="paddingLeft text">To use YTM-electron, you should set your own <a href="https://github.com/HyeokjinKang/YTM-server">YTM-server.</a>
  <br>Fill in the form below after all the settings are done.</p>
  <div id="formContainer" class="paddingLeft visible" bind:this={formContainer}>
    <div id="loginContainer">
      <input type="text" bind:value={url} placeholder="URL (https://...)">
      <input type="text" bind:value={id} placeholder="ID">
      <input type="password" bind:value={pw} placeholder="Password">
    </div>
    <div id="nextButton" on:click={verifyAuth}>
      <img src="./icons/arrow-right.svg" alt=">" id="nextIcon">
    </div>
  </div>
  <div id="logContainer" class="paddingLeft invisible" bind:this={logContainer}>
    <p id="log" bind:this={log}></p>
  </div>
</main>

<style>
  main {
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #222;
    z-index: 200;
  }
  #headerContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    height: 12vh;
    padding-left: 2vw;
  }

  #logoIcon {
    width: 6vh;
    height: 6vh;
  }

  #title {
    font-weight: 700;
    font-size: 4vh;
    padding-left: 1vw;
  }

  #formContainer {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 20vh;
    left: -10vh;
    top: 40vh;
    opacity: 0;
    transition-duration: 0.5s;
    pointer-events: none;
  }

  #formContainer.visible {
    pointer-events: all;
    left: 0vh;
    opacity: 1;
  }

  #logContainer {
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 20vh;
    left: 0vh;
    top: 40vh;
    opacity: 1;
    transition-duration: 0.5s;
  }

  #logContainer.invisible {
    opacity: 0;
  }

  #loginContainer {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
  }

  #nextButton {
    cursor: pointer;
    margin-left: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 2px solid white;
    border-radius: 4vh;
    width: 4vh;
    height: 4vh;
  }

  #nextIcon {
    height: 1.5vh;
  }

  .paddingLeft {
    padding-left: 6vw;
  }

  .text {
    font-size: 2vh;
    font-weight: 300;
  }

  input {
    padding-left: 1vw;
    border-radius: 10vh;
    border: 2px solid white;
    background-color: #222;
    height: 4vh;
  }

  a {
    text-decoration: underline;
  }

  p {
    margin: 0;
  }
</style>