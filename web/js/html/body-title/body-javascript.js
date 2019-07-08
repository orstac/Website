const body = `
<div class="body">
    <div class="container">
        <div class="project">
            <br>
            <img src="../img/undraw_server_status_5pbv.svg" alt="">
            <div class="desc">
                <h3>OrsTac Website <a class="fab fa-github" href="https://github.com/orstac/Website"></a></h3>
                <p>Created with modern tool like sass, node.js and much more. OrsTac's website was made to be easy
                    to follow and read. The OrsTac team put many hours into developing the website.</p>
                <div class="card-deck">
                    <div class="card">
                        <h6><a class="fas fa-tachometer-alt"></a> Fast respond times</h6>
                    </div>
                    <div class="card">
                        <h6><a class="fas fa-copy"></a> Open Source</h6>
                    </div>
                    <div class="card">
                        <h6><a class="fas fa-adjust"></a> Created with Bootstrap</h6>
                    </div>
                    <div class="card">
                        <h6><a class="fas fa-pen-alt"></a> Daily Updates</h6>
                    </div>
                </div>
            </div>
            <br>
        </div>
        <hr>
        <div class="project">
            <br>
            <img src="../img/undraw_Posts_rskc.svg" alt="">
            <div class="desc">
                <h3>OrBot <a class="fab fa-github" href="https://github.com/orstac/orbot"></a></h3>
                <p>Created with node.js, javascript, and node packages, OrBot will be a great bot anyone could use
                    in their discord server. Although OrBot is still being develop, OrBot will be a great bot in the
                    future.</p>
                <div class="card-deck">
                    <div class="card">
                        <h6><a class="fas fa-tachometer-alt"></a> Fast respond times</h6>
                    </div>
                    <div class="card">
                        <h6><a class="fas fa-copy"></a> Open Source</h6>
                    </div>
                    <div class="card">
                        <h6><a class="fas fa-code"></a> Optimized Code</h6>
                    </div>
                    <div class="card">
                        <h6><a class="fas fa-project-diagram"></a> Planned Code</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
document.getElementById("body").innerHTML += body;