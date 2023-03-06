const dropdown_selection=document.getElementById("dropdown");
dropdown_selection.addEventListener("change",function(){
    const loc = this.options[this.selectedIndex].value;
    window.open(loc);
});