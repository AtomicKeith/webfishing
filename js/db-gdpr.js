/*---<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>--*/
/*-- GDPR PRIVACY NOTICE --*/
/*---<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>--*/

// GDPR Menu Container
function initStickyNote(target) {
    const lsItem = target.replace(/[#\-]/g, "") + "-privacy-v3";
    if (localStorage.getItem(lsItem) === "true") return;

    const el = document.querySelector(target);
    el.style.display = "block";

    document.querySelectorAll(target + " .GDPR-Close").forEach(button => {
        button.addEventListener("click", () => {
            el.style.display = "none";
            el.addEventListener("transitionend", () => el.remove());
            localStorage.setItem(lsItem, "true");
        });
    });
}

initStickyNote("#gdpr");



/*---<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>--*/
/*-- TAB SELECTOR --*/
/*---<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>--*/

//Master Search Tab Function
function GDPR_tablc(e, t) {
    for (var n = document.getElementsByClassName("GDPR_tablinks"), l = 0; l < n.length; l++) n[l].style.display = "none";
    document.getElementById(t).style.display = "block";
}
//Tab Search Bar Button Focus
document.getElementById("GDPR_tab_focus").focus();



/*---<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>--*/
/*-- GDPR CONSENT FUNCTION --*/
/*---<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>--*/

document.addEventListener('DOMContentLoaded', () => {GDPR_LoadCheckboxStates();});
const GDPR_CheckboxIds = ["GDR_checkbox1", "GDR_checkbox2"];

// Function to load content into a specified div
const GDPR_LoadContent = (divId, contentId) => {
    const div = document.getElementById(divId);
    const contentScript = document.getElementById(contentId);
    div.innerHTML = contentScript.innerHTML;
    Array.from(div.getElementsByTagName("script")).forEach((script) => eval(script.innerText));
};
// Function to handle the checkbox click event
const GDPR_handleCheckboxClick = (checkboxId, divId, contentId) => {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox.checked) {
        GDPR_LoadContent(divId, contentId);
    } else {
        document.getElementById(divId).innerHTML = "";
    }
    GDPR_saveCheckboxStates();
};
// Function to save the states of the checkboxes to local storage
const GDPR_saveCheckboxStates = () => {
    const states = GDPR_CheckboxIds.map((id) => document.getElementById(id).checked);
    localStorage.setItem("st-gdpr-consent-checked", JSON.stringify(states));
};
// Function to load the states of the checkboxes from local storage
const GDPR_LoadCheckboxStates = () => {
    const states = JSON.parse(localStorage.getItem("st-gdpr-consent-checked"));
    if (states) {
        states.forEach((checked, index) => {
            const checkboxId = GDPR_CheckboxIds[index];
            const checkbox = document.getElementById(checkboxId);
            checkbox.checked = checked;
            const contentId = "GDPR_CONSENT" + (index + 1);
            const divId = "GDPR_CONTAINER" + (index + 1);
            if (checked) {
                GDPR_LoadContent(divId, contentId);
            }
        });
    }
};
// Function to check all checkboxes and load their content
const GDPR_checkAll = () => {
    GDPR_CheckboxIds.forEach((id) => {
        const checkbox = document.getElementById(id);
        checkbox.checked = true;
        const contentId = "GDPR_CONSENT" + id.charAt(id.length - 1);
        const divId = "GDPR_CONTAINER" + id.charAt(id.length - 1);
        GDPR_LoadContent(divId, contentId);
    });
    GDPR_saveCheckboxStates();
};
// Function to uncheck all checkboxes and clear their content
const GDPR_uncheckAll = () => {
    GDPR_CheckboxIds.forEach((id) => {
        const checkbox = document.getElementById(id);
        checkbox.checked = false;
        const divId = "GDPR_CONTAINER" + id.charAt(id.length - 1);
        document.getElementById(divId).innerHTML = "";
    });
    localStorage.removeItem("st-gdpr-consent-checked");
};



/*---<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>--*/
/*-- GOOGLE AD --*/
/*---<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>|<>--*/
document.addEventListener("DOMContentLoaded", () => {
    const Ads_checkbox = document.getElementById("DB_adsCheckbox");
    const adsenseContainer = document.getElementById("display_adsense");
    const scriptId = "adsScript";
    const scriptSrc = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7242928359655994";

    const injectScript = () => {
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = scriptSrc;
            script.async = true;
            script.crossOrigin = "anonymous";
            adsenseContainer.appendChild(script);
        }
    };

    const removeScript = () => {
        const script = document.getElementById(scriptId);
        if (script) script.remove();
    };

    const checkAds = () => {
        Ads_checkbox.checked = true;
        injectScript();
        localStorage.setItem("adsEnabled", "true");
    };

    const uncheckAds = () => {
        Ads_checkbox.checked = false;
        removeScript();
        localStorage.removeItem("adsEnabled");
    };

    window.checkAds = checkAds;
    window.uncheckAds = uncheckAds;

    if (localStorage.getItem("adsEnabled") === "true") {
        Ads_checkbox.checked = true;
        injectScript();
    }

    Ads_checkbox.addEventListener("change", () => {
        if (Ads_checkbox.checked) {
            injectScript();
            localStorage.setItem("adsEnabled", "true");
        } else {
            removeScript();
            localStorage.removeItem("adsEnabled");
        }
    });
});
