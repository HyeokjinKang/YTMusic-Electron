<div id="container">
  <div id="searchBox">
    <img src="./icons/search.svg" alt="Search" id="searchIcon">
    <input type="text" id="search" placeholder="Search.." autocomplete="off">
  </div>
</div>

<style>
  #container {
    pointer-events: none;
    box-sizing: border-box;
    padding-right: 6vh;
    left: 0;
    position: fixed;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 12vh;
  }

  #searchBox {
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: #333333be;
    border: 1px solid #DDD;
    border-radius: 5vh;
    height: 5vh;
    width: 30vh;
  }

  #searchIcon {
    height: 2.5vh;
  }

  #search {
    background-color: #33333300;
    border: none;
    width: 23vh;
    height: 3vh;
  }
</style>