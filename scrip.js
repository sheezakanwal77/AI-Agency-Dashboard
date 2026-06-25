// ======================
// DARK MODE
// ======================

const themeBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light-mode");
themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

localStorage.setItem("theme","light");
themeBtn.innerHTML =
'<i class="bi bi-sun-fill"></i>';

}else{

localStorage.setItem("theme","dark");
themeBtn.innerHTML =
'<i class="bi bi-moon-fill"></i>';

}

});

// ======================
// NOTIFICATION PANEL
// ======================

const bellBtn =
document.getElementById("bellBtn");

const notificationPanel =
document.querySelector(".notification-panel");

bellBtn.addEventListener("click",()=>{

notificationPanel.classList.toggle("show");

});

// ======================
// PROFILE MENU
// ======================

const profile =
document.querySelector(".profile");

const profileMenu =
document.querySelector(".profile-menu");

profile.addEventListener("click",()=>{

profileMenu.classList.toggle("show");

});

// ======================
// SIDEBAR ACTIVE
// ======================

const navItems =
document.querySelectorAll(".nav-item");

navItems.forEach(item=>{

item.addEventListener("click",()=>{

navItems.forEach(nav=>{

nav.classList.remove("active");

});

item.classList.add("active");

});

});

// ======================
// ANIMATED COUNTERS
// ======================

function animateCounter(id,target){

let count = 0;

const element =
document.getElementById(id);

const speed = target / 80;

const timer = setInterval(()=>{

count += speed;

if(count >= target){

count = target;
clearInterval(timer);

}

element.innerText =
Math.floor(count);

},20);

}

animateCounter("clientCount",248);
animateCounter("projectCount",96);
animateCounter("aiCount",1340);

// ======================
// REVENUE COUNTER
// ======================

function revenueCounter(){

let value = 0;

const target = 18500;

const revenue =
document.getElementById("revenueCount");

const timer = setInterval(()=>{

value += 250;

revenue.innerText =
"$" + value.toLocaleString();

if(value >= target){

clearInterval(timer);

revenue.innerText =
"$18,500";

}

},20);

}

revenueCounter();

// ======================
// REVENUE CHART
// ======================

const revenueCanvas =
document.getElementById("revenueChart");

if(revenueCanvas){

new Chart(revenueCanvas,{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug"
],

datasets:[{

label:"Revenue ($)",

data:[
3200,
4500,
5100,
6800,
7200,
8100,
9300,
10500
],

borderColor:"#3b82f6",

backgroundColor:
"rgba(59,130,246,.2)",

fill:true,

tension:.4

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{
legend:{
display:true
}
}

}

});

}

// ======================
// LEAD SOURCES CHART
// ======================

const leadCanvas =
document.getElementById("leadChart");

if(leadCanvas){

new Chart(leadCanvas,{

type:"doughnut",

data:{

labels:[
"Fiverr",
"LinkedIn",
"Website",
"Referrals"
],

datasets:[{

data:[
40,
25,
20,
15
],

backgroundColor:[

"#3b82f6",
"#10b981",
"#f59e0b",
"#ef4444"

]

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{
position:"bottom"
}

}

}

});

}

// ======================
// SEARCH TABLE
// ======================

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

const rows =
document.querySelectorAll(
"#ordersTable tr"
);

rows.forEach(row=>{

row.style.display =
row.innerText
.toLowerCase()
.includes(value)

? ""

: "none";

});

});

// ======================
// ADD LEAD
// ======================

const addLeadBtn =
document.getElementById("newLeadBtn");

addLeadBtn.addEventListener("click",()=>{

const table =
document.getElementById("ordersTable");

const names = [
"Michael",
"Sophia",
"Daniel",
"Emma",
"Noah"
];

const services = [
"AI Chatbot",
"Automation",
"AI Website",
"Lead Generation",
"CRM Integration"
];

const randomName =
names[
Math.floor(
Math.random()*names.length
)
];

const randomService =
services[
Math.floor(
Math.random()*services.length
)
];

table.innerHTML += `

<tr>

<td>${randomName}</td>

<td>${randomService}</td>

<td>Pending</td>

<td>$${Math.floor(Math.random()*1500)+500}</td>

</tr>

`;

alert("New Lead Added");

});

// ======================
// REPORT BUTTON
// ======================

document
.getElementById("reportBtn")
.addEventListener("click",()=>{

alert(
"AI Agency Performance Report Generated Successfully"
);

});

// ======================
// LIVE AI REQUESTS
// ======================

setInterval(()=>{

const aiCounter =
document.getElementById(
"aiCount"
);

aiCounter.innerText =

parseInt(
aiCounter.innerText
) + 1;

},5000);

// ======================
// LIVE ACTIVITY FEED
// ======================

const activityList =
document.getElementById(
"activityList"
);

const activities = [

"New Client Registered",

"AI Model Trained",

"Automation Completed",

"Project Approved",

"Lead Converted",

"Invoice Generated",

"Meeting Scheduled"

];

setInterval(()=>{

const li =
document.createElement("li");

li.innerText =

activities[
Math.floor(
Math.random() *
activities.length
)
];

activityList.prepend(li);

if(
activityList.children.length > 8
){

activityList.removeChild(
activityList.lastElementChild
);

}

},7000);

// ======================
// CLOSE MENUS ON OUTSIDE CLICK
// ======================

document.addEventListener(
"click",
(e)=>{

if(
!e.target.closest(".notification")
){

notificationPanel.classList.remove(
"show"
);

}

if(
!e.target.closest(".profile-wrapper")
){

profileMenu.classList.remove(
"show"
);

}

}
);

// ======================
// PAGE LOADED
// ======================

console.log(
"AI Agency Pro Dashboard Loaded Successfully"
);