//check if there's local storage color option
let mainColor=localStorage.getItem("color_option");
if(mainColor!==null)
{
    document.documentElement.style.setProperty('--main-color',mainColor);
    //remove active class from all childrns
    document.querySelectorAll(".colors-List li").forEach (element =>{
        element.classList.remove("active");
        //Add Active Class on element with data color === local storage item
        if(element.dataset.color===mainColor)
        {
            //Add active class
            element.classList.add("active");
        }
    });
    
}
//Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick=function()
{
    //Toggle Class fa-spin for Rotation on Self
    this.classList.toggle("fa-spin");
    //Toggle Class open for Rotation on .setting-box
    document.querySelector(".setting-box").classList.toggle("open");
}

//Switch Colors
const colorsLi=document.querySelectorAll(".colors-List li");
//Loop on All List items
colorsLi.forEach(li => {
    //Click on Every List item
    li.addEventListener("click",(e)=>
    {
        //Set Clor on root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        //set color on local storage
        localStorage.setItem("color_option",e.target.dataset.color);
        //remove active class from all childrns
        e.target.parentElement.querySelectorAll(".active").forEach (element =>{
            element.classList.remove("active");
        });
        //ad active class to target
        e.target.classList.add("active");
    });
});

//Select landing page emlement
let landingPage=document.querySelector(".landing-page");
//Get Array Of Images
let imagesArray=[];
for(let i=0;i<7;i++)
{
    imagesArray.push((i+1)+".png");
}
setInterval(()=>{
//Get random Number
let RandomNumber=Math.floor(Math.random()*imagesArray.length);
//Change Background Image Url

landingPage.style.backgroundImage='url("images/'+imagesArray[RandomNumber]+'")';
landingPage.classList.add("images");

},5000);
//Make text Create Himself in load 
    let i = 0;
    let txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam ea ipsa at! Cum vel sunt enim quidem dignissimos rem.";
    let speed = 20;
function createText()
{  
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(createText, speed);
      }
}