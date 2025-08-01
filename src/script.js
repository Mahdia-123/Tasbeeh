function dispalyValue() {
  let searchInput = document.getElementById("input").value;
  document.getElementById("message").textContent = searchInput;
}

let count = 0;
document.getElementById("add-subject").addEventListener("click", function () {
  count++;
  document.getElementById("count").textContent = ` ${count}`;
});
document.getElementById("reset-subject").addEventListener("click", function () {
  count = 0;
  document.getElementById("count").textContent = count;

  document.getElementById("input").value = " ";
  document.getElementById("message").textContent = " ";
});

self.addEventListener("install", (event) => {
  console.log("Service Worker installed.");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated.");
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => {
    console.log("Service Worker Registered!");
  });
}
