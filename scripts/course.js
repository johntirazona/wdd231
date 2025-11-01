// course.js
const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, category: "WDD", completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, category: "WDD", completed: true },
  { code: "WDD 231", name: "Web Frontend Development", credits: 3, category: "WDD", completed: false },
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, category: "CSE", completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 2, category: "CSE", completed: true },
  { code: "CSE 210", name: "Programming with Classes", credits: 2, category: "CSE", completed: false }
];

const courseContainer = document.querySelector("#course-container");
const totalCredits = document.querySelector("#total-credits");

function displayCourses(filteredCourses) {
  courseContainer.innerHTML = "";

  filteredCourses.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course-card");
    if (course.completed) div.classList.add("completed");

    div.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
    `;
    courseContainer.appendChild(div);
  });

  const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  totalCredits.textContent = `The total credits for course listed above is ${total}`;
}

// Event listeners for filter buttons
document.querySelector("#all").addEventListener("click", () => displayCourses(courses));
document.querySelector("#cse").addEventListener("click", () => {
  const cseCourses = courses.filter(course => course.category === "CSE");
  displayCourses(cseCourses);
});
document.querySelector("#wdd").addEventListener("click", () => {
  const wddCourses = courses.filter(course => course.category === "WDD");
  displayCourses(wddCourses);
});

// Default load
displayCourses(courses);
