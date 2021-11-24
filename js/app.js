// Define Global Variables
let navBarUL = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const getAllSections = () => {
  let allSections = document.querySelectorAll("section");
  let allSectionsName = [];
  for (let section of allSections) {
    allSectionsName.push(section.getAttribute("data-nav"));
  }
  return allSectionsName;
};
const getLastSectionNumber = () => {
  let allSections = getAllSections();
  let lastSection;
  for (let section of allSections) {
    lastSection = section;
  }
  let lastSectionNumber;
  for (let sec of lastSection) {
    lastSectionNumber = sec;
  }
  return lastSectionNumber;
};
console.log(getAllSections());
console.log(getLastSectionNumber());

// Scroll to section on link click
// Scroll to anchor ID using scrollTO event
const ScrollToSection = (id) => {
  document.getElementById(id).scrollIntoView();
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const Nav = () => {
  navBarUL.style.color = "black";
  navBarUL.style.textAlign = "left";
  navBarUL.style.padding = "1rem";
  for (let sec of getAllSections()) {
    navBarUL.innerHTML += `<li style="margin: 1px 0.5rem; cursor: pointer;" onclick="ScrollToSection('${sec
      .toLowerCase()
      .replaceAll(" ", "")}')">${sec}</li>`;
  }
};
setTimeout(() => {
  Nav();
}, 100);

// Set sections as active
const checkVisible = (elm) => {
  //   let rect = elm.getBoundingClientRect();
  for (let sec of getAllSections()) {
    let most = document
      .querySelector(`#${sec.toLowerCase().replaceAll(" ", "")}`)
      .getBoundingClientRect().y;

    if (most < 400) {
      document.querySelector(
        `#${sec.toLowerCase().replaceAll(" ", "")}`
      ).style.visibility = "visible";
    } else {
      document.querySelector(
        `#${sec.toLowerCase().replaceAll(" ", "")}`
      ).style.visibility = "hidden";
    }
  }
};
window.onscroll = () => checkVisible();

// Build addintional section
const addSec = () => {
  let lastSecNum = getLastSectionNumber();
  let secNum = Number(lastSecNum) + 1;
  console.log(secNum);
  return `      <section id="section${secNum}" data-nav="Section ${secNum}">
        <div class="landing__container">
          <h2>Section ${secNum}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            fermentum metus faucibus lectus pharetra dapibus. Suspendisse
            potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
            lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
            convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
            eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
            nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
            lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
            tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
            vitae elit. Integer nec libero venenatis libero ultricies molestie
            semper in tellus. Sed congue et odio sed euismod.
          </p>

          <p>
            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
            gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
            Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
            consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
            elementum tortor mollis non.
          </p>
        </div>
      </section>`;
};
let main = document.querySelector("main");
main.innerHTML += addSec();
