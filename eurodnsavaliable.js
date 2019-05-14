(function onlyavaliable() {
   taken = document.querySelectorAll('[title="This domain is already registered."]');
for (var i = 0; i < taken.length; i++) {
        taken[i].parentElement.parentElement.parentElement.remove();
    }
        setTimeout(onlyavaliable, 1000);
})();
