let places = document.querySelector(`.places-to-stay`);
let locationRoot = document.querySelector(`.input-form`);
let exp = document.querySelector(`.exp`);
let nearbyroot = document.querySelector(`.various-places`);
let anywhereroot = document.querySelector(`.live-anywhere-root`);
let getawayroot = document.querySelector(`.place-list`);
function removeForm(event) {
  locationRoot.innerHTML = "";
}
places.addEventListener("dblclick", removeForm);
places.addEventListener("click", handlePlace);
function handlePlace(event) {
  locationRoot.innerHTML = `<ul class="flex space-between full-width">
              <li class="flexc">
                <label for="location">Location</label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  name="location"
                />
              </li>
              <li class="flexc">
                <label for="Check-in">Check-in</label>
                <input type="date" placeholder="Add dates" name="Check-in" />
              </li>
              <li class="flexc">
                <label for="Check-out">Check-out</label>
                <input type="date" placeholder="Add dates" name="Check-out" />
              </li>
              <li class="flex align-center space-between">
                <form class="flexc">
                  <label for="guests">Guests</label>
                  <input
                    type="number"
                    placeholder="Add guests"
                    name="location"
                  />
                </form>
                <button class="search-destination">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="
                      display: block;
                      fill: none;
                      height: 16px;
                      width: 16px;
                      stroke: currentcolor;
                      stroke-width: 4;
                      overflow: visible;
                    "
                  >
                    <g fill="none">
                      <path
                        d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                      ></path>
                    </g>
                  </svg>
                </button>
              </li>
            </ul>`;
}

exp.addEventListener("dblclick", removeForm);
exp.addEventListener("click", handleExperience);
function handleExperience(event) {
  locationRoot.innerHTML = `<ul class="flex full-width space-between">
              <li class="flexc">
                <label for="location">Location</label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  name="location"
                />
              </li>
              <li class="flexc">
                <label for="Check-out">Check-out</label>
                <input type="date" placeholder="Add dates" name="Check-out" />
              </li>
            </ul>`;
}

nearby.forEach((item) => {
  let divparent = document.createElement("div");
  divparent.classList.add(
    "flex",
    "flex24",
    "place-div",
    "align-center",
    "places"
  );

  let imgdiv = document.createElement("div");
  imgdiv.classList.add("image-div");
  img = document.createElement("img");
  img.src = item.img;
  img.classList.add(`full-width`);
  imgdiv.append(img);

  infodiv = document.createElement("div");
  infodiv.classList.add("flexc", "place-description");
  cite = document.createElement("cite");
  cite.innerText = item.place;
  span = document.createElement("span");
  span.innerText = item.duration;

  //append
  infodiv.append(cite, span);
  divparent.append(imgdiv, infodiv);
  nearbyroot.append(divparent);
  console.log(item);
});

{
  /* <a href="#" class="flex24">
  <div class="flexc full-width anywhere">
    <div>
      <img src="/assets/entirehome.jpg" alt="farm" class="full-width" />
    </div>
    <span>Entire Homes</span>
  </div>
</a>; */
}

anywhere.forEach((item) => {
  let a = document.createElement("a");
  a.href = "#";
  a.classList.add(`flex24`);

  let parentdiv = document.createElement("div");
  parentdiv.classList.add(`flexc`, `full-width`, `anywhere`);

  let imgdiv = document.createElement("div");

  let img = document.createElement("img");
  img.src = item.img;
  img.classList.add(`full-width`);
  imgdiv.append(img);

  let span = document.createElement("span");
  span.innerText = item.place;

  parentdiv.append(imgdiv, span);
  a.append(parentdiv);
  anywhereroot.append(a);
});

{
  /* <li class="flexc">
  <span>Canmore</span>
  <cite>Alberta</cite>
</li>; */
}

getaway.forEach((item) => {
  let li = document.createElement(`li`);
  li.classList.add("flexc");
  let span = document.createElement("span");
  span.innerText = item.city;
  let cite = document.createElement("cite");
  cite.innerText = item.country;
  li.append(span, cite);
  getawayroot.append(li);
});
