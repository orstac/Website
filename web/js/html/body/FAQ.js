const body = `
<br><br><br><br>
<div class="body">
    <div class="container">
        <h1>Frequently Asked Questions</h1>
        <hr>
        <section class="accordion-section clearfix mt-3" aria-label="Question Accordions">
            <div class="container">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                    <div class="panel panel-default">
                        <div class="panel-heading p-3 mb-3" role="tab" id="heading0">
                            <h3 class="panel-title">
                                <a class="collapsed" role="button" title="" data-toggle="collapse"
                                    data-parent="#accordion" href="#collapse0" aria-expanded="true"
                                    aria-controls="collapse0">
                                    Why should I choose OrsTac?
                                </a>
                            </h3>
                        </div>
                        <div id="collapse0" class="panel-collapse collapse" role="tabpanel"
                            aria-labelledby="heading0">
                            <div class="panel-body px-3 mb-4">
                                <p>OrsTac gives quality products at an affordable price for everyone. Everyone
                                    customer will get a quality code in their product.</p>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading p-3 mb-3" role="tab" id="heading1">
                            <h3 class="panel-title">
                                <a class="collapsed" role="button" title="" data-toggle="collapse"
                                    data-parent="#accordion" href="#collapse1" aria-expanded="true"
                                    aria-controls="collapse1">
                                    what is OrsTac?
                                </a>
                            </h3>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse" role="tabpanel"
                            aria-labelledby="heading1">
                            <div class="panel-body px-3 mb-4">
                                <p>OrsTac is a small development company that mainly focuses in Web development and
                                    mc server setups.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</div> `;
document.getElementById("body").innerHTML += body;