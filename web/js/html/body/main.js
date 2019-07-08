const body = `
<br><br>
<div class="title" style="padding: 15vh 0 15vh 0;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 col-sm-12">
                <hr class="bg-primary">
                <h1>OrsTac</h1>
                <p>Web Development and Much More</p>
                <a class="btn btn-primary" href="#why">Get Started</a>
            </div>
            <div class="col-md-6 col-sm-12">
                <img src="./img/undraw_code_review_l1q9.svg">
            </div>
        </div>
    </div>
</div>

<div class="why" id="why">
    <div class="container">
        <!-- <h2 class="text-center">Why Us</h2> -->
        <!-- <br>
    <br> -->
        <div class="card-deck mb-3 text-left justify-content-center">
            <div class="card" style="min-width: 200px; border-color: #6c757d2a;">
                <div class="card-body">
                    <h5 class="card-title"><i class="icon fas fa-folder-open"
                            style="color: #6c757d; border-color: #6c757d;"></i><br> Open
                        Source</h5>
                    <p class="card-text">All of our projects are open source. Meaning anyone can use them in their
                        projects too.</p>
                </div>
            </div>
            <div class="card" style="min-width: 200px; border-color: #0984e32a;">
                <div class="card-body">
                    <h5 class="card-title"><i class="icon fas fa-code"
                            style="color: #0984e3; border-color: #0984e3;"></i><br> Quality
                        Code
                    </h5>
                    <p class="card-text">At OrsTac we only accept high quality code. Which Means our products will
                        work 99% of the time.</p>
                </div>
            </div>
            <div class="card" style="min-width: 200px; border-color: #00cec92a;">
                <div class="card-body">
                    <h5 class="card-title"><i class="icon fas fa-info-circle"
                            style="color: #00cec9; border-color: #00cec9;"></i><br> Speedy Support</h5>
                    <p class="card-text">Because we have a large team, we can support many players very quickly.</p>
                </div>
            </div>
            <div class="card" style="min-width: 200px; border-color: #6c5ce72a;">
                <div class="card-body">
                    <h5 class="card-title"><i class="icon fas fa-tools"
                            style="color: #6c5ce7; border-color: #6c5ce7;"></i><br> Modern Tools</h5>
                    <p class="card-text">We only use modern tools that are fast and easy to understand. Many of our
                        products use react, sass, and many more.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="team">
    <div class="container">
        <h2 class="text-center">Management</h2>
        <div class="card-deck justify-content-center">
            <div class="card xestra box-shadow" style="min-width: 200px;">
                <p class="jobTitle">CEO</p>
                <div class="card-body">
                    <br>
                    <img src="https://cdn.discordapp.com/attachments/481216943576317983/597129596747644938/Xestralogo.png"
                        alt="">
                    <h5 class="card-title">Xestra</h5>
                    <p class="card-subtitle">JavaScript, React, and C++</p>
                    <!-- <hr>
                    <p class="card-text">Some quick example text to build on the card title and make up the
                        bulk
                        of the
                        card's content.</p> -->
                </div>
            </div>
            <div class="card lowers box-shadow" style="min-width: 200px;">
                <p class="jobTitle">Manager</p>
                <div class="card-body">
                    <br>
                    <img src="https://cdn.discordapp.com/attachments/597129211353890837/597130050827190293/z-1.png"
                        alt="">
                    <h5 class="card-title">Zetari</h5>
                    <p class="card-subtitle">JavaScript, Java, and Python</p>
                    <!-- <hr>
                    <p class="card-text">Some quick example text to build on the card title and make up the
                        bulk
                        of the
                        card's content.</p> -->
                </div>
            </div>
        </div>
        <div class="text-center">
            <p>Check out our full team!</p>
            <a href="./about.html">Our Full Team</a>
        </div>
    </div>
</div>
<div class="testimonials">
    <div class="container">
        <h2 class="text-center">Testimonials</h2>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card text-center"
                        style="min-width: 200px; max-width: 600px; margin: 0 auto; border: none;">
                        <div class="card-body">
                            <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                                alt="">
                            <h5 class="card-title">Thomas</h5>
                            <p class="card-subtitle">Mc Server Owner</p>
                            <p class="card-text">It's exactly what I've been looking for.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <hr>
</div>
<div class="pricing">
    <div class="container">
        <h2 class="text-center">Pricing</h2>
        <br>
        <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Websites</h4>
                </div>
                <div class="card-body">
                    <p class="card-subtitle mb-2 text-muted">Great for personal pages or medium size websites.</p>
                    <h1 class="card-title pricing-card-title">$5 - $100</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>1-25 Pages</li>
                        <li>Free Web host setup</li>
                        <li>One month of updates</li>
                        <li>Discord support</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-outline-primary">Take a Look</button>
                </div>
            </div>
            <!-- <div class="card mb-4 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Bootstrap themes</h4>
                </div>
                <div class="card-body">
                    <p class="card-subtitle mb-2 text-muted">Good for bootstrap heavy projects.</p>
                    <h1 class="card-title pricing-card-title">$10 - $75</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>A new style of bootstrap</li>
                        <li>Redo most of the default CSS</li>
                        <li>One month of updates</li>
                        <li>Discord support</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-outline-primary">Get Started</button>
                </div>
            </div> -->
            <div class="card mb-4 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Mc Setups</h4>
                </div>
                <div class="card-body">
                    <p class="card-subtitle mb-2 text-muted">A easy way to start your mc server.</p>
                    <h1 class="card-title pricing-card-title">Ask Us for Price</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Custom themes</li>
                        <li>Full server setup</li>
                        <li>3 months of updates</li>
                        <li>Discord support</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-outline-primary">Contact us</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="support">
    <div class="container">
        <h2>Need Some Help?</h2>
        <p>Our Team can answer any question.</p>
        <a href="https://discord.gg/SsS5VcS" class="btn btn-success discord"><i class="fab fa-discord"></i> Join Our
            Discord</a>
        <br><br>
        <p>Thousands of people use our services everyday!</p>
        <div class="card-deck justify-content-center">
            <div class="card">
                <div class="card-body">
                    <img src="https://cdn.discordapp.com/attachments/595068239764127764/595247092096565261/hexterria.png"
                        alt="">
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <img src="https://cdn.shopifycloud.com/hatchful-web/assets/c3a241ae6d1e03513dfed6f5061f4a4b.png"
                        alt="">
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <img src="https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png"
                        alt="">
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>`;
document.getElementById("body").innerHTML += body;