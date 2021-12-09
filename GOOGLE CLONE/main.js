const searchInput=document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event){
    if(event.code=="Enter") {
        search();
    }
});
function search(){
    const input=searchInput.value;
    window.location.href="https://www.google.com/search?q="+ input +"&oq="+ input +"&aqs=chrome..69i57j46i433i512j46i199i433i465i512j0i131i433i457i512j0i433i512l2j46i131i433j46i512j0i433i512j0i271.1292j1j15&sourceid=chrome&ie=UTF-8";
}