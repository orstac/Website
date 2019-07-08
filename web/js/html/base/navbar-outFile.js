const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
        <h6 class="navbar-brand" href="#">OrsTac</h6>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Development
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <h6 class="dropdown-header">Website Development</h6>
                        <a class="dropdown-item" href="./development/javascript.html">JavaScript</a>
                        <!-- <a class="dropdown-item" href="./development/react.html">React</a> -->
                        <a class="dropdown-item" href="./development/bootstrap.html">Bootstrap Themes</a>
                        <div class="dropdown-divider"></div>
                        <h6 class="dropdown-header">Server Setup</h6>
                        <a class="dropdown-item" href="./development/mc-server-setup.html">MC Server Setup</a>
                        <div class="dropdown-divider"></div>
                        <h6 class="dropdown-header">Commissions</h6>
                        <a class="dropdown-item" href="./development/websites.html">Websites</a>
                    </div>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="contact.html">Contact</a> -->
                </li>
            </ul>
            <a class="btn btn-primary" href="https://discord.gg/SsS5VcS">Support</a>
        </div>
    </div>
</nav>`;
document.getElementById("navbar").innerHTML += navbar;