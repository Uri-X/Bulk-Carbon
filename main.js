function setTab(tabId) {
  const tabs = ["dashboard", "marketplace", "reports", "projects"];
  tabs.forEach(id => {
    document.getElementById(id)?.classList?.add("hidden");
    document.getElementById("tab-" + id)?.classList?.remove("bg-green-600", "text-white");
  });
  document.getElementById(tabId)?.classList?.remove("hidden");
  document.getElementById("tab-" + tabId)?.classList?.add("bg-green-600", "text-white");
}

document.getElementById("emissionForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const electricity = parseFloat(document.getElementById("electricity").value) || 0;
  const car = parseFloat(document.getElementById("car").value) || 0;

  const electricityFactor = 0.233;
  const carFactor = 0.121;

  const total = (electricity * electricityFactor + car * carFactor).toFixed(2);
  document.getElementById("emissionResult").textContent = `Estimated Monthly Emissions: ${total} kg CO₂e`;
});

setTab('dashboard');

let ownedCredits = 0;

// Attach buy button logic after DOM loads
document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll("#marketplace button");

  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      ownedCredits += 100; // Simulate buying 100 credits
      document.getElementById("creditsCount").textContent = ownedCredits;

      alert("Success! You’ve purchased 100 carbon credits.");
    });
  });
});
