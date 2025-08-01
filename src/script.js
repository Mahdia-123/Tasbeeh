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

// Install prompt handling (only one instance)
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(); // Prevent automatic prompt
  deferredPrompt = e;

  // Create a single install button
  const installBtn = document.createElement("button");
  installBtn.textContent = "📲 Install App";
  installBtn.style.position = "fixed";
  installBtn.style.bottom = "20px";
  installBtn.style.left = "50%";
  installBtn.style.transform = "translateX(-50%)";
  installBtn.style.padding = "12px 24px";
  installBtn.style.fontSize = "18px";
  installBtn.style.backgroundColor = "#ffc108";
  installBtn.style.border = "none";
  installBtn.style.borderRadius = "8px";
  installBtn.style.cursor = "pointer";
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
