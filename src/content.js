window.addEventListener("beforeunload", function () {
  console.log("Cleaning up local storage...");
  localStorage.removeItem("prizm_mweb_device_id");
  console.log("Local storage cleaned up.");
});
