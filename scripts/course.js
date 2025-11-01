const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, category: "WDD" },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, category: "WDD" },
  { code: "WDD 231", name: "Web Frontend Development", credits: 3, category: "WDD" },
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, category: "CSE" },
  { code: "CSE 111", name: "Programming with Functions", credits: 2, category: "CSE" },
  { code: "CSE 210", name: "Programming with Classes", credits: 2, category: "CSE" }
];

const courseContainer = document.getElementById("course-container");
const totalCredits = document.getElementById("total-credits");

function displayCourses(filtered) {
  courseContainer.innerHTML = "";
  filtered.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.innerHTML = `<h3>${course.code}</h3>`;
    courseContainer.appendChild(card);
  });
  const total = filtered.reduce((sum, c) => sum + c.credits, 0);
  totalCredits.textContent = `The total credits for course listed above is ${total}`;
}

document.getElementById("all").addEventListener("click", () => displayCourses(courses));
document.getElementById("cse").addEventListener("click", () =>
  displayCourses(courses.filter(c => c.category === "CSE"))
);
document.getElementById("wdd").addEventListener("click", () =>
  displayCourses(courses.filter(c => c.category === "WDD"))
);

displayCourses(courses);
