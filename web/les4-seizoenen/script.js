const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "title":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"gray"
    },
    {
        "title":"lente",
        "image":"img/spring.jpg",
        "backGround":"green"
    },
    {
        "title":"zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
    },
    {
        "title":"herfst",
        "image":"img/autumn.jpg",
        "backGround":"red"
    },
    {
        "title":"winter",
        "image":"img/winter.jpg",
        "backGround":"white"
    }
];


// let seizoen = {
//     "title":"lente",
//     "image":"img/spring.jpg"
// };

function show(index){
    myTitle.innerHTML = seizoenen[index].title;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}
