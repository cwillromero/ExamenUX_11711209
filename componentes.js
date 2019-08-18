Vue.component('navBar', {
    data(){
        return {
            name: 'Will'
        }
    },
    template: `
    <div class="nav-wrapper grey darken-2" >
        <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a><i class="material-icons">menu</i></a></li>
        </ul>
        <a href="index.html" class="brand-logo center"><img class="responsive-img" src="Logo.png" style="width:60px"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="collapsible.html">Sign In</a></li>
        </ul>
    </div>
    `
});