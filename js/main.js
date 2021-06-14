function myFunction() {
    let x = document.getElementById("navigate-all");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  document.getElementById("on-menu").onclick = function show_menu(){
    document.getElementById("all-menu_check").style.display = "block";
    document.getElementById("on-menu").style.display = "none";
    document.getElementById("off-menu").style.display = "block";
} 
document.getElementById("off-menu").onclick = function clouse_menu(){
  document.getElementById("all-menu_check").style.display = "none";
  document.getElementById("on-menu").style.display = "block";
  document.getElementById("off-menu").style.display = "none";
} 