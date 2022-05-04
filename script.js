let menuList = document.getElementById("menu_list");
menuList.style.maxHeight = "0px";
console.log(menuList);

function showMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "120px";
    } else {
        menuList.style.maxHeight ="0px";
    }
}