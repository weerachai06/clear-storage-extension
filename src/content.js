window.addEventListener("beforeunload", function () {
  console.log("Cleaning up local storage...");
  localStorage.clear();
  console.log("Local storage cleaned up.");
});
