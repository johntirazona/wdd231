const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web", credits: 3, completed: true },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE 110", name: "Programming Building Blocks", credits: 3, completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: true },
  { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false }
];

const courseBox = document.querySelector("#courses");
const creditBox = document.querySelector("#credits");

function displayCourses(list) {
  courseBox.innerHTML = "";

  const total = list.reduce((sum, c) => sum + c.credits, 0);
  creditBox.textContent = `Total Credits: ${total}`;

  list.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");
    if (course.completed) div.classList.add("completed");

    div.textContent = `${course.code}`;
    courseBox.appendChild(div);
  });
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
  displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.startsWith("WDD")));
});

document.querySelector("#cse").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.startsWith("CSE")));
});
