const makeHome = () => {
  document.getElementsByTagName("main")[0].innerHTML = /*HTML*/ `
<article>
    <h2>Neste økt</h2>
    <section>
        <h3>Pull day</h3>
        <p>16.02.2023</p>
    </section>
</article>

`;
};

const workoutCurentSetView = () => {
  document.getElementsByTagName("main")[0].innerHTML = /*HTML*/ `
  <article class="workout-curent-set">
    <section>
      <h2><span onclick="this.style.color = 'red'">▼</span> ${"Seated cable row"} </h2>
      <p>Sett ${"2/4"}</p>
    </section>
    <input type="text" name="vekt" /> <label for="vekt">Vekt</label><br />
    <input type="text" name="reps" /> <label for="reps">Repitisjoner</label>

    <fieldset>
      <legend>RIR:</legend>

      <div>
        <input type="radio" id="louie" name="drone" value="10" />
        <label for="10">0</label>
      </div>

      <div>
        <input type="radio" id="huey" name="drone" value="1" />
        <label for="1">1</label>
      </div>

      <div>
        <input type="radio" id="dewey" name="drone" value="2" />
        <label for="2">2</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="3" />
        <label for="3">3</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="4" />
        <label for="4">4</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="5" />
        <label for="5">5</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="6" />
        <label for="6">6</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="7" />
        <label for="7">7</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="8" />
        <label for="8">8</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="9" />
        <label for="9">9</label>
      </div>

    </fieldset>

    <section>
      <button>Forige</button>
      <button>Neste</button>
    </section>
  </article>
  `;
};

const workoutNextSetView = () => {
  document.getElementsByTagName("main")[0].innerHTML = /*HTML*/ `
  <article>
    <section>
      <h2>Neste øvelse: ${"Face pulls"}</h2>
      <p>Sett: ${4}</p>
    </section>
    <section>
      <h3>Siste økt</h3>
      <p>Legg til sånn liste greier her</p>
    </section>
  </article>
  `;
};

workoutCurentSetView();
