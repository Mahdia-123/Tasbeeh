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
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(); // Prevent the default mini-infobar
  deferredPrompt = e;

  // Optional: show a custom install button
  const installBtn = document.createElement("button");
  installBtn.textContent = "📲 Install App";
  installBtn.style.marginTop = "20px";
  installBtn.style.padding = "10px";
  installBtn.style.fontSize = "18px";
  document.body.appendChild(installBtn);

  installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
        installBtn.remove();
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  });
});
