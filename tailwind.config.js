// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern":
          // "url('https://img.freepik.com/free-vector/female-with-multitasking-concept_23-2148398031.jpg?w=1060&t=st=1686341360~exp=1686341960~hmac=4d107c903d6769ed89053eae9268bd0ecb835d82ee8fed318c15ceddfb4d350a')",
          "url('https://img.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg?w=1800&t=st=1686341915~exp=1686342515~hmac=41f78eaa7a50087c608f1449083a47dde643a0e6ef6bc93224c2bb00e9cb09c8')",
      },
    },
  },
  plugins: [],
};
