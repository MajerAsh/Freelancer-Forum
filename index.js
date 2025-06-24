/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

/** 1 Write a function that returns a freelancer object with a randomly generated
name, occupation, and rate according to the provided constants.*/
function RandoWorker() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)
  );
  return { name, occupation, rate };
}
//console.log(RandoWorker());

/** 2 Initialize a state variable to an array of NUM_FREELANCERS freelancer objects.
aka:  create a variable in your script that holds an array of NUM_FREELANCERS random freelancer objects.*/
const workers = Array.from({ length: NUM_FREELANCERS }, RandoWorker);
//console.log(workers);

/** 3 Write a function that returns the average rate of all freelancers in state. */
function getAverageRate(workers) {
  const total = workers.reduce((sum, worker) => sum + worker.rate, 0);
  return total / workers.length;
}
//console.log(getAverageRate(workers));

/** 4 Use getAverageRate to initialize a (state variable) which will 
 store the average rate of all freelancers. 
 aka: Call getAverageRate(workers); then, Store the result in a variable (“state variable”).*/
const averagerate = getAverageRate(workers);
//console.log(averagerate);

/** 5 Write a component function to represent a single freelancer.
aka: Write a function that takes a freelancer object and returns
 a DOM element representing that freelancer */
function oneFreelancer(freelancer) {
  const container = document.createElement("div");
  container.className = "freelancer";

  const name = document.createElement("h2");
  name.textContent = freelancer.name;

  const occupation = document.createElement("p");
  occupation.textContent = `Occupation: ${freelancer.occupation}`;

  const rate = document.createElement("p");
  rate.textContent = `Rate: $${freelancer.rate}`;

  container.appendChild(name);
  container.appendChild(occupation);
  container.appendChild(rate);

  return container;
}

/**6 Write a component function to represent an array of freelancers. */
function freelancerList(freelancers) {
  const container = document.createElement("div");
  container.className = "freelancer-list";

  freelancers.forEach((freelancer) => {
    const freelancerElement = oneFreelancer(freelancer);
    container.appendChild(freelancerElement);
  });

  return container;
}
document.body.appendChild(freelancerList(workers));

/**7 Write a component function to represent the average rate of all freelancers. */
function averageRateComponent(freelancers) {
  const avgRate = getAverageRate(freelancers);

  const container = document.createElement("div");
  container.className = "average-rate";

  const heading = document.createElement("h1");
  heading.textContent = `Average Freelancer Rate: $${Math.round(avgRate)}`;

  container.appendChild(heading);
  return container;
}

/**8 Write and call a render function that will mount the application onto the document. */
function render() {
  document.body.innerHTML = "";
  const workers = Array.from({ length: NUM_FREELANCERS }, RandoWorker); //<--- generates the freelancers
  const averageRateEl = averageRateComponent(workers); // <---cr8 components
  const freelancerTable = freelancerList(workers);

  document.body.appendChild(averageRateEl); ///<-- appends components
  document.body.appendChild(freelancerTable);
}
render();
