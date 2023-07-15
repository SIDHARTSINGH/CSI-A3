export interface category {
  id: number;
  name: string;
  description: string;
}

const categories = [
  {
    id: 1,
    name: "Java",
    description:
      "Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.",
  },
  {
    id: 2,
    name: "Python",
    description:
      "Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. It's suitable for web development, software development and much more.",
  },
  {
    id: 3,
    name: "C/C++",
    description:
      "C++ is a general-purpose programming language. It has object-oriented and generic programming features. It was developed by Bjarne Stroustrup in 1979. It is a strict superset of C.",
  },
  {
    id: 4,
    name: "Javascript",
    description:
      "JavaScript is a high-level, interpreted, dynamic, weakly-typed, prototype-based, multi-paradigm, and interpreted programming language. It has been standardized by the ECMAScript Internationalization API.",
  },
  {
    id: 5,
    name: "React",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook. React can be used as a base in the development of single-page or mobile applications. It is also used in the creation of React Native apps.",
  },
  {
    id: 6,
    name: "Android Development",
    description:
      "Android is a mobile operating system based on Linux. It was developed by the Open Handset Alliance (Google). It is developed using Java language. It is a free and open source operating system.",
  },
];

export default categories;
