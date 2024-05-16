function toggleSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);
    if (subMenu.style.display === "block") {
      subMenu.style.display = "none";
    } else {
      subMenu.style.display = "block";
    }
  }
  
  function startGame() {
    alert("Starting a new game!");
  }
  
  function navigateToLeaderboard() {
    alert("Navigating to the leaderboard...");
  }
  
  function openTutorial() {
    alert("Opening the interactive tutorial...");
  }
  
  let body = document.querySelector("body")
  function openGameRules() {
    let para = document.createElement("p");
     body.append(para);
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt expedita numquam sapiente neque natus assumenda, quam id, nostrum enim laborum deserunt dolorem tempore nulla necessitatibus? Eos quas quisquam libero nisi delectus debitis. Repudiandae quia, vel in earum, ratione voluptate quo nihil, natus facilis itaque tempora dolore. Commodi ipsam facere esse!"
  alert("Opening the game rules...");
  }

  