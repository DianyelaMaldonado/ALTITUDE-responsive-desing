document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
        menuWidth: 300,
        closeOnClick: true,
        edge: 'right',
    };
    var instances = M.Sidenav.init(elems, options);
});




