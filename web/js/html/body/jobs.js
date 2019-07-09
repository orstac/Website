const body = `
<br><br><br><br>
<div class="body">
    <div class="container">
        <h1>Jobs</h1>
        <hr>
        <form
            action="https://script.google.com/macros/s/AKfycbwaT3q_3dbsU60RLNm4dJc6FkYBCk5ZEQpSk9tiXgo_af5Tw6oz/exec"
            method="POST">
            <h2>Basic Info</h2>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name" name="name">
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" class="form-control" id="age" placeholder="Age" name="age">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Email" name="email">
            </div>
            <div class="form-group">
                <label for="discord">Discord</label>
                <input type="text" class="form-control" id="discord" placeholder="Discord" name="discord">
            </div>
            <div class="form-group">
                <label for="timezone">Timezone</label>
                <input type="text" class="form-control" id="timezone" placeholder="timezone" name="timezone">
            </div>
            <div class="form-group">
                <label for="codinglang">Job Title(s)</label>
                <small style="line-height: 0; display: block;">press <code>ctrl</code> to
                    select
                    multiple</small><br>
                <select multiple class="form-control" id="codinglang" name="codelang" style="height: 150px;">
                    <option>Java</option>
                    <option>JavaScript</option>
                    <option>C++</option>
                    <option>C</option>
                    <option>C#</option>
                    <option>BootStrap | making themes not just knowing basic bootstrap</option>
                    <option>Python</option>
                    <option>SQL</option>
                    <option>Skript</option>
                    <option>Builder | MC builder</option>
                    <option>Marketer</option>
                    <option>Sales Rep</option>
                    <option>Mc Setup Specialist</option>
                    <option>Plugin Specialist</option>
                    <option>Graphic Designer</option>
                </select>
            </div>
            <div class="form-group">
                <label for="yearsofexperience">Year(s) of Experience</label>
                <input type="number" class="form-control" id="yearsofexperience" placeholder="Year(s) of Experience"
                    name="yearsofexperience">
            </div>
            <div class="form-group">
                <label for="Education">Education</label>
                <input type="text" class="form-control" id="Education" placeholder="Education" name="education">
            </div>
            <div class="form-group">
                <label for="Website">Website</label>
                <small style="line-height: 0; display: block;">If you have one</small><br>
                <input type="url" class="form-control" id="Website" placeholder="Website" name="Website">
            </div>
            <div class="form-group">
                <label for="Mc-Market">Mc-Market</label>
                <small style="line-height: 0; display: block;">If you have one</small><br>
                <input type="text" class="form-control" id="Mc-Market" placeholder="Mc-Market" name="Mc-Market">
            </div>
            <div class="form-group">
                <label for="Photos-of-Work">Photos of Work</label>
                <small style="line-height: 0; display: block;">Provide links</small><br>
                <input type="text" class="form-control" id="Photos-of-Work" placeholder="Photos of Work"
                    name="Photos-of-Work">
            </div>
            <h2>Questions</h2>
            <div class="form-group">
                <label for="question0">Tell us about yourself</label>
                <small style="line-height: 0; display: block;">Answer Honestly</small><br>
                <textarea type="paragraph" class="form-control" id="question1" placeholder="Answer Here"
                    name="question0"></textarea>
            </div>
            <div class="form-group">
                <label for="question1">What was the hardest part in learning your job(s)/position(s)?</label>
                <small style="line-height: 0; display: block;">Answer Honestly</small><br>
                <textarea type="paragraph" class="form-control" id="question1" placeholder="Answer Here"
                    name="question1"></textarea>
            </div>
            <div class="form-group">
                <label for="question2">Why do you want to work for OrsTac?</label>
                <small style="line-height: 0; display: block;">Answer Honestly</small><br>
                <textarea type="paragraph" class="form-control" id="question2" placeholder="Answer Here"
                    name="question2"></textarea>
            </div>
            <div class="form-group">
                <label for="question3">Do you have any projects that you done in the past?</label>
                <small style="line-height: 0; display: block;">Answer Honestly</small><br>
                <textarea type="paragraph" class="form-control" id="question3" placeholder="Answer Here"
                    name="question3"></textarea>
            </div>
            <div class="form-group">
                <label for="question4">How will you work with other team members?</label>
                <small style="line-height: 0; display: block;">Answer Honestly</small><br>
                <textarea type="paragraph" class="form-control" id="question4" placeholder="Answer Here"
                    name="question4"></textarea>
            </div>
            <div class="form-group">
                <label for="question5">Are there any questions?</label>
                <textarea type="paragraph" class="form-control" id="question5" placeholder="Answer Here"
                    name="question5"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div style="display:none" class="thankyou_message">
                <!-- You can customize the thankyou message by editing the code below -->
                <h2><em>Thanks</em> for contacting us! We will get back to you soon!
                </h2>
            </div>
        </form>
    </div>
</div>`;
document.getElementById("body").innerHTML += body;