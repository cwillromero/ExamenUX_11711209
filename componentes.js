Vue.component('generalbar', {
    data(){
        return {nombre:"Perfil",}
    },
    template: 
    `
    <nav>
        <!--Menu-->
        <ul id="opcionesInicio" class="dropdown-content">
            <li><a href="index.html" class="grey darken-2 white-text">Inicio</a></li>
            <li class="divider" ></li>
            <li><a href="galery.html" class="grey darken-2 white-text">Galería Online</a></li>
            <li class="divider" ></li>
            <li><a href="buy.html" class="grey darken-2 white-text">Alquilar o Comprar Obras</a></li>
            <li class="divider" ></li>
            <li><a href="opinions.html" class="grey darken-2 white-text">Sugerencias</a></li>
        </ul>
        <div id="NavBar" class="nav-wrapper grey darken-2" >
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><a class="dropdown-trigger" href="#!" data-target="opcionesInicio"><i class="material-icons">menu</i></a></li>
            </ul>
            <a href="index.html" class="brand-logo center"><img class="responsive-img" src="images/Logo.png" style="width:60px"></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#!"><i class="material-icons left">account_box</i>{{ nombre }}</a></li>
            </ul>
        </div>
    </nav> 
    `
});

Vue.component('generalfooter', {
    data(){
        return {nombre:"Perfil",}
    },
    template: 
    `
    <footer class="page-footer grey darken-2">
        <div class="container">
            <div class="row">
                <div class="col s3"><a class="blue-text text-lighten-2 " href="index.html"><i class="material-icons left">home</i>Inicio</a></div>
                <div class="col s3"><a class="grey-text text-lighten-3" href="galery.html"><i class="material-icons left">color_lens</i>Galería Online</a></div>
                <div class="col s3"><a class="grey-text text-lighten-3" href="buy.html"><i class="material-icons left" >place</i>Alquilar o Comprar</a></div>
                <div class="col s3"><a class="grey-text text-lighten-3" href="index.html"><i class="material-icons left">help</i>Sugerencias</a></div>
            </div>            
          </div>
          <div class="footer-copyright">
            <div class="container ">
                © 2019 - Carlos Wilfredo Romero Maradiaga
            </div>
          </div>
    </footer>
    `
});
