const version = new URLSearchParams(window.location.search).get("version");
document.documentElement.dataset.version = /^[1-5]$/.test(version) ? version : "1";