document.addEventListener('DOMContentLoaded', function() {
    const clearStorageButton = document.getElementById('clear-storage');

    clearStorageButton.addEventListener('click', function() {
        chrome.storage.local.clear(function() {
            alert('Local storage cleared!');
        });
    });
});