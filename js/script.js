/*
Created By: Destructiveburn https://destreuctiveburn.com/
https://searchthnat.net/
https://youtube.com/c/DestructiveBurn
*/



/*
--------------------------------
--Global Table Search
--------------------------------
*/
/*
//Search Table
function globaltable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("Stardew_Input");
  filter = input.value.toUpperCase();
  table = document.getElementById("Stardew_Table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    var rowContent = tr[i].textContent;
    rowContent = rowContent.replace(/[\s]+/g, " ");

    if (rowContent) {
      if (rowContent.toUpperCase().includes(filter)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
*/




//STV Navigation Link Accordion
var lastExpandedContentId = "checklist";

function toggleContent(stv_category, element) {
    var sdv_content = document.getElementById(stv_category);
    sdv_content.classList.toggle("sdv-expand");

    if (lastExpandedContentId !== stv_category) {
        document.getElementById(lastExpandedContentId).classList.remove("sdv-expand");
        document.querySelector(".sdv-active").classList.remove("sdv-active");
        element.classList.add("sdv-active");
        lastExpandedContentId = stv_category;
    }
}

//STV Navigation Sticky Header
window.addEventListener("scroll", function () {
    var nav = document.querySelector(".sdv-nav-container");
    var navHeight = nav.offsetHeight;
    var navTop = nav.offsetTop;
    var scrollTop = window.scrollY;

    if (scrollTop > navTop) {
        nav.classList.add("fixed-nav");
        // Remove expanded class from all content sections
        var contentSections = document.querySelectorAll(".sdv-content");
        contentSections.forEach(function (section) {
            section.classList.remove("sdv-expand");
        });
    } else {
        nav.classList.remove("fixed-nav");
        // Add expanded class to last active content section
        var activeContent = document.getElementById(lastExpandedContentId);
        if (activeContent) {
            activeContent.classList.add("sdv-expand");
        }
    }
});






















//Clear Search Table
function clearSearch() {
  var input, table;
  input = document.getElementById("Stardew_Input");
  input.value = "";
  table = document.getElementById("Stardew_Table");
  var rows = table.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = "";
  }
}
/*
--------------------------------
--Scroll To Top
--------------------------------
*/
document.addEventListener("DOMContentLoaded", function (event) {
    const button = document.querySelector("#scroll-top");
    button.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });
    window.addEventListener("scroll", function () {
        if (window.scrollY == 0) {
            button.style.opacity = "0";
        } else {
            button.style.opacity = "1";
        }
    });
});
/*
--------------------------------
--Tooltip
--------------------------------
*/
let tooltip;
let timer;
document.addEventListener("mouseover", function (tip) {
    let button = tip.target.closest(".tip");
    if (!button) return;
    timer = setTimeout(function() {
        tooltip = document.createElement("div");	
        tooltip.classList.add("DFY");
        tooltip.style.opacity = 0;
        tooltip.addEventListener("click", fadein(tooltip));
        document.body.append(tooltip);
        tooltip.classList.add("tooltip");
        tooltip.innerHTML = button.dataset.tooltip;
        // position it on top of the annotated element (top-center)
        let coords = button.getBoundingClientRect();
        let left = coords.left + (button.offsetWidth - tooltip.offsetWidth) / 2;
        if (left < 0) left = 5; // do not drive over the left edge of the window
        let top = coords.top - tooltip.offsetHeight - 5;
        if (top < 0) {
            // if the tooltip does not fit on top, then display it on the bottom
            top = coords.top + button.offsetHeight + 5;
        }
        tooltip.style.left = left + "px";
        tooltip.style.top = top + "px";
    }, 1500);
});
document.addEventListener("mouseout", function (tip) {
    clearTimeout(timer);
    if (tooltip) {
        tooltip.remove();
        tooltip = null;
    }
});
function fadein(element) {
    var op = 0.1; // initial opacity
    element.style.display = "block";
    var timer = setInterval(function () {
        element.style.opacity = op;
        op += parseFloat(op) * 0.1;
    }, 5);
}
/*
--------------------------------
--Accordion
--------------------------------
*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
/*
--------------------------------
--Donate
--------------------------------
*/
const image = document.getElementById("surprise");
const snowflakeCount = 30;
let snowfallTimeout;

function createSnowflake() {
    const snowflake = document.createElement("img");
    snowflake.src = "https://destructiveburn.com/StardewValley/img/gold.webp";
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    const delay = Math.random() * 5; // generate a random delay value between 0 and 5 seconds
    snowflake.style.animationDelay = `${delay}s`; // set the delay as an inline style
    snowflake.addEventListener("animationend", () => snowflake.remove()); // remove the snowflake from the DOM when its animation ends
    document.body.appendChild(snowflake);
}

function triggerSnowfall() {
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }
    snowfallTimeout = setTimeout(() => {
        const snowflakes = document.querySelectorAll(".snowflake");
        snowflakes.forEach((snowflake) => snowflake.remove());
    }, 10000);
}

let clickCount = 0;
image.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 10) {
        clickCount = 0;
        clearTimeout(snowfallTimeout);
        triggerSnowfall();
    }
});
/*
--------------------------------
--Day/Night Cycle
--------------------------------
*/
//8AM Switch to daytime
//8PM Switch to nighttime 
var hour = new Date().getHours();
if (hour >= 8 && hour < 20) {
    document.body.classList.add("daytime");
    document.body.style.backgroundImage = "url('https://destructiveburn.com/StardewValley/img/stardewbackground-l.webp')";
    document.querySelector(".mtb").innerHTML = "&#9790;";
} else {
    document.body.style.backgroundImage = "url('https://destructiveburn.com/StardewValley/img/stardewbackground-d.webp')";
    document.querySelector(".mtb").innerHTML = "&#9728;";
}

function toggleTheme() {
    if (localStorage.getItem("theme") === "day") {
        localStorage.setItem("theme", "night");
    } else {
        localStorage.setItem("theme", "day");
    }

    if (localStorage.getItem("theme") === "day") {
        document.body.classList.add("daytime");
        document.body.style.backgroundImage = "url('https://destructiveburn.com/StardewValley/img/stardewbackground-l.webp')";
        document.querySelector(".mtb").innerHTML = "&#9790;";
    } else {
        document.body.classList.remove("daytime");
        document.body.style.backgroundImage = "url('https://destructiveburn.com/StardewValley/img/stardewbackground-d.webp')";
        document.querySelector(".mtb").innerHTML = "&#9728;";
    }
}

function resetTheme() {
    localStorage.removeItem("theme");
    var hour = new Date().getHours();
    if (hour >= 8 && hour < 20) {
        document.body.classList.add("daytime");
        document.body.style.backgroundImage = "url('https://destructiveburn.com/StardewValley/img/stardewbackground-l.webp')";
        document.querySelector(".mtb").innerHTML = "&#9790;";
    } else {
        document.body.classList.remove("daytime");
        document.body.style.backgroundImage = "url('https://destructiveburn.com/StardewValley/img/stardewbackground-d.webp')";
        document.querySelector(".mtb").innerHTML = "&#9728;";
    }
}

// check if theme is set in local storage
if (localStorage.getItem("theme") === "day") {
    document.body.classList.add("daytime");
    document.body.style.backgroundImage = "url('https://destructiveburn.com/StardewValley/img/stardewbackground-l.webp')";
    document.querySelector(".mtb").innerHTML = "&#9790;";
} else if (localStorage.getItem("theme") === "night") {
    document.body.classList.remove("daytime");
    document.body.style.backgroundImage = "url('https://destructiveburn.com/StardewValley/img/stardewbackground-d.webp')";
    document.querySelector(".mtb").innerHTML = "&#9728;";
}
/*
--------------------------------
--Cloud Animation Disable
--------------------------------
*/
const cloudGrid = document.querySelector(".cloud_grid");
const cloudHideBtn = document.querySelector("#cloud_hide");
cloudGrid.style.display = localStorage.getItem("cloudGridState") || "block";
cloudHideBtn.addEventListener("click", () => {
    cloudGrid.style.display = cloudGrid.style.display === "none" ? "block" : "none";
    localStorage.setItem("cloudGridState", cloudGrid.style.display);
});



/*
--------------------------------
--Stardew Valley Sound Tracks
--------------------------------
*/

var currentIframe = null;
var tracks = [
    { value: "145532631", label: "ðŸŽµ Stardew Valley Theme" },
    { value: "145532683", label: "ðŸŽµ Spring Theme 1" },
    { value: "145532659", label: "ðŸŽµ Summer Theme 1" },
    { value: "145557534", label: "ðŸŽµ Fall Theme 1" },
    { value: "145532603", label: "ðŸŽµ Winter Theme 1" },
    { value: "232021152", label: "ðŸŽµ Spring (The Valley Comes Alive)" },
    { value: "232021074", label: "ðŸŽµ Summer (The Sun Can Bend An Orange Sky)" },
    { value: "232021733", label: "ðŸŽµ The Stardrop Saloon" },
    { value: "232022065", label: "ðŸŽµ A Golden Star Is Born" },
    { value: "145554670", label: "ðŸŽµ Jaunty" },
    { value: "145554668", label: "ðŸŽµ Starwatcher's Theme" },
    { value: "145554656", label: "ðŸŽµ The Lava Dwellers" },
    { value: "145534115", label: "ðŸŽµ Goblin Theme" },
    { value: "145532871", label: "ðŸŽµ Playful" },
    { value: "145532648", label: "ðŸŽµ Sweet" },
    { value: "145532619", label: "ðŸŽµ Settling In" },
    { value: "308067419", label: "ðŸŽµ Song Of Feathers (Emily's Theme)" },
    { value: "308067415", label: "ðŸŽµ Dreamscape" },
];

var selectElement = document.getElementById("track-list");

// Populate select options
tracks.forEach(function (track) {
    var option = document.createElement("option");
    option.value = track.value;
    option.text = track.label;
    selectElement.appendChild(option);
});

function playSelectedTrack() {
    var trackId = selectElement.value;
    var playerContainer = document.getElementById("player-container");

    // Clear previous player
    playerContainer.innerHTML = "";

    // Embed SoundCloud player
    var iframeElement = document.createElement("iframe");
    iframeElement.setAttribute("width", "100%");
    iframeElement.setAttribute("height", "125");
    iframeElement.setAttribute("scrolling", "no");
    iframeElement.setAttribute("frameborder", "no");
    iframeElement.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + trackId + "&color=0066cc&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false");

    playerContainer.appendChild(iframeElement);

    // Store reference to the current iframe
    currentIframe = iframeElement;
}

function stopTrack() {
    if (currentIframe) {
        // Remove the current iframe from the DOM
        currentIframe.parentNode.removeChild(currentIframe);
        // Clear the reference to the current iframe
        currentIframe = null;
    }
}
