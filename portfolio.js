"use strict";

const form       = document.getElementById("project-form");
const tbody      = document.getElementById("projects-tbody");
const tableWrap  = document.getElementById("table-wrapper");
const emptyState = document.getElementById("empty-state");
const descTA     = document.getElementById("proj-desc");
const descCount  = document.getElementById("desc-count");

descTA.addEventListener("input", () => {
    const len = descTA.value.length;
    descCount.textContent = `${len} / 300 characters`;
});



function setError(input, message) {
    const errEl = document.getElementById(input.getAttribute("aria-describedby").split(" ")[0]);
    if (errEl) errEl.textContent = message;
    input.setAttribute("aria-invalid", "true");
}


function clearError(input) {
    const ariaDesc = input.getAttribute("aria-describedby");
    if (!ariaDesc) return;
    const firstId = ariaDesc.split(" ")[0];
    const errEl   = document.getElementById(firstId);
    if (errEl) errEl.textContent = "";
    input.removeAttribute("aria-invalid");
}

function isValidUrl(value) {
    try {
        const u = new URL(value);
        return u.protocol === "http:" || u.protocol === "https:";
    } catch {
        return false;
    }
}


function validateForm() {
    let valid = true;

    const name     = document.getElementById("proj-name");
    const date     = document.getElementById("proj-date");
    const desc     = document.getElementById("proj-desc");
    const url      = document.getElementById("proj-url");
    const imgUrl   = document.getElementById("proj-img");
    const tech     = document.getElementById("proj-tech");
    const category = document.getElementById("proj-category");

    clearError(name);
    if (!name.value.trim()) {
        setError(name, "Project name is required.");
        valid = false;
    } else if (name.value.trim().length < 2) {
        setError(name, "Name must be at least 2 characters.");
        valid = false;
    }

    clearError(date);
    if (!date.value) {
        setError(date, "Completion date is required.");
        valid = false;
    }

    clearError(desc);
    if (!desc.value.trim()) {
        setError(desc, "Description is required.");
        valid = false;
    } else if (desc.value.trim().length < 10) {
        setError(desc, "Description must be at least 10 characters.");
        valid = false;
    }

    clearError(url);
    if (!url.value.trim()) {
        setError(url, "Project URL is required.");
        valid = false;
    } else if (!isValidUrl(url.value.trim())) {
        setError(url, "Enter a valid URL starting with http:// or https://");
        valid = false;
    }

    clearError(imgUrl);
    if (imgUrl.value.trim() && !isValidUrl(imgUrl.value.trim())) {
        setError(imgUrl, "Thumbnail must be a valid URL or left blank.");
        valid = false;
    }

    clearError(tech);
    if (!tech.value.trim()) {
        setError(tech, "List at least one technology.");
        valid = false;
    }

    clearError(category);
    if (!category.value) {
        setError(category, "Please select a category.");
        valid = false;
    }

    return valid;
}

function formatDate(iso) {
    if (!iso) return "—";
    const [y, m, d] = iso.split("-");
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`;
}

function addTableRow(data) {
    emptyState.hidden = true;
    tableWrap.hidden  = false;

    const tr = document.createElement("tr");

    const imgSrc = data.img || `https://placehold.co/72x54/4e5579/ffffff?text=${encodeURIComponent(data.name.slice(0,2).toUpperCase())}`;
    const tdImg  = document.createElement("td");
    const img    = document.createElement("img");
    img.src     = imgSrc;
    img.alt     = `Thumbnail for ${data.name}`;
    img.width   = 72;
    img.height  = 54;
    img.loading = "lazy";
    img.classList.add("proj-thumb");
    tdImg.appendChild(img);

    const tdName = document.createElement("td");
    tdName.textContent = data.name;

    const tdDesc = document.createElement("td");
    tdDesc.textContent = data.desc;

    const tdTech = document.createElement("td");
    tdTech.textContent = data.tech;

    const tdCat  = document.createElement("td");
    const badge  = document.createElement("span");
    badge.classList.add("cat-badge");
    badge.textContent = data.category;
    tdCat.appendChild(badge);

    const tdDate = document.createElement("td");
    tdDate.textContent = formatDate(data.date);

    const tdUrl  = document.createElement("td");
    const link   = document.createElement("a");
    link.href    = data.url;
    link.textContent = "View →";
    link.target  = "_blank";
    link.rel     = "noopener noreferrer";
    link.classList.add("proj-link");
    tdUrl.appendChild(link);

    [tdImg, tdName, tdDesc, tdTech, tdCat, tdDate, tdUrl].forEach(td => tr.appendChild(td));
    tbody.appendChild(tr);

    tableWrap.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateForm()) {
        const firstInvalid = form.querySelector("[aria-invalid='true']");
        if (firstInvalid) firstInvalid.focus();
        return;
    }

    const data = {
        name:     document.getElementById("proj-name").value.trim(),
        date:     document.getElementById("proj-date").value,
        desc:     document.getElementById("proj-desc").value.trim(),
        url:      document.getElementById("proj-url").value.trim(),
        img:      document.getElementById("proj-img").value.trim(),
        tech:     document.getElementById("proj-tech").value.trim(),
        category: document.getElementById("proj-category").value,
    };

    addTableRow(data);
    form.reset();

    descCount.textContent = "0 / 300 characters";
});

form.addEventListener("reset", () => {
    form.querySelectorAll("[aria-invalid]").forEach(el => el.removeAttribute("aria-invalid"));
    form.querySelectorAll(".field-error").forEach(el => el.textContent = "");
    descCount.textContent = "0 / 300 characters";
});

form.querySelectorAll("input, textarea, select").forEach(field => {
    field.addEventListener("blur", () => {
        if (field.required && !field.value.trim()) {
            setError(field, "This field is required.");
        } else if (field.type === "url" && field.value.trim() && !isValidUrl(field.value.trim())) {
            setError(field, "Enter a valid URL starting with http:// or https://");
        } else {
            clearError(field);
        }
    });

    field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") clearError(field);
    });
});
