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
  document.getElementById("input").value = "";
  document.getElementById("message").textContent = "";
});

// Register the service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => {
    console.log("Service Worker Registered!");
  });
}
