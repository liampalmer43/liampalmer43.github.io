import React, { Component } from 'react';

import GradeTable from './GradeTable.js';

const OTHER_GRADES = [
  {
    course: 'CHEM 123',
    title: 'Chemical Reactions, Equilibria and Kinetics',
    grade: 90
  },
  {
    course: 'CHEM 123L',
    title: 'Chemical Reaction Laboratory 2',
    grade: 91
  },
  {
    course: 'CHEM 120',
    title: 'Physical and Chemical Properties of Matter',
    grade: 90
  },
  {
    course: 'CHEM 120L',
    title: 'Chemical Reaction Laboratory 1',
    grade: 92,
    end: true
  },
  {
    course: 'PHYS 234',
    title: 'Quantum Physics 1',
    grade: 95
  },
  {
    course: 'PHYS 124',
    title: 'Modern Physics',
    grade: 97
  },
  {
    course: 'PHYS 122',
    title: 'Waves, Electricity and Magnetism',
    grade: 100
  },
  {
    course: 'PHYS 121',
    title: 'Mechanics',
    grade: 100,
    end: true
  },
  {
    course: 'BIOL 239',
    title: 'Genetics',
    grade: 87,
    end: true
  },
  {
    course: 'ECON 101',
    title: 'Introduction to Microeconomics',
    grade: 95,
    end: true
  },
  {
    course: 'PSYCH 101',
    title: 'Introductory Psychology',
    grade: 77,
    end: true
  },
];

const AMATH_GRADES = [
  {
    course: 'AMATH 475',
    title: 'Introduction to General Relativity',
    grade: 100
  },
  {
    course: 'AMATH 451',
    title: 'Introduction to Dynamical Systems',
    grade: 96,
    end: true,
  },
  {
    course: 'AMATH 353',
    title: 'Partial Differential Equations 1',
    grade: 92
  },
  {
    course: 'AMATH 351',
    title: 'Ordinary Differential Equations 2',
    grade: 99
  },
  {
    course: 'AMATH 342',
    title: 'Computational Methods for Differential Equations',
    grade: 99
  },
  {
    course: 'AMATH 332',
    title: 'Applied Complex Analysis',
    grade: 100
  },
  {
    course: 'AMATH 331',
    title: 'Applied Real Analysis',
    grade: 98,
    end: true
  },
  {
    course: 'AMATH 251',
    title: 'Intro to Differential Equations (Advanced Level)',
    grade: 91
  },
  {
    course: 'AMATH 242',
    title: 'Computational Mathematics',
    grade: 94
  },
  {
    course: 'AMATH 231',
    title: 'Calculus 4',
    grade: 97
  },
];

const CS_GRADES = [
  {
    course: 'CS 489',
    title: 'Introduction to Machine Learning',
    grade: 99
  },
  {
    course: 'CS 489',
    title: 'Big Data Infrastructure',
    grade: 89,
    end: true
  },
  {
    course: 'CS 371',
    title: 'Computational Mathematics (Advanced Level)',
    grade: 94
  },
  {
    course: 'CS 365',
    title: 'Models of Computation (Advanced Level)',
    grade: 92
  },
  {
    course: 'CS 350',
    title: 'Operating Systems',
    grade: 91
  },
  {
    course: 'CS 349',
    title: 'User Interfaces',
    grade: 94
  },
  {
    course: 'CS 341',
    title: 'Algorithms',
    grade: 99,
    end: true
  },
  {
    course: 'CS 251',
    title: 'Computer Organization and Design (Architecture)',
    grade: 96
  },
  {
    course: 'CS 246',
    title: 'Object-Oriented Software Development',
    grade: 77
  },
  {
    course: 'CS 245',
    title: 'Logic and Computation',
    grade: 96
  },
  {
    course: 'CS 241',
    title: 'Foundations of Sequential Programs (Compilers)',
    grade: 88
  },
  {
    course: 'CS 240',
    title: 'Data Structures and Data Management',
    grade: 98,
    end: true
  },
  {
    course: 'CS 146',
    title: 'Elementary Algorithm Design (Advanced Level)',
    grade: 70
  },
  {
    course: 'CS 145',
    title: 'Designing Functional Programs (Advanced Level)',
    grade: 90
  },
];

const CO_GRADES = [
  {
    course: 'CO 250',
    title: 'Introduction to Optimization',
    grade: 97
  },
];

const STAT_GRADES = [
  {
    course: 'STAT 241',
    title: 'Statistics (Advanced Level)',
    grade: 90
  },
  {
    course: 'STAT 240',
    title: 'Probability (Advanced Level)',
    grade: 96
  },
];

const MATH_GRADES = [
  {
    course: 'MATH 249',
    title: 'Introduction to Combinatorics (Advanced Level)',
    grade: 91
  },
  {
    course: 'MATH 247',
    title: 'Calculus 3 (Advanced Level)',
    grade: 91
  },
  {
    course: 'MATH 245',
    title: 'Linear Algebra 2 (Advanced Level)',
    grade: 90,
    end: true
  },
  {
    course: 'MATH 148',
    title: 'Calculus 2 (Advanced Level)',
    grade: 98
  },
  {
    course: 'MATH 146',
    title: 'Linear Algebra 1 (Advanced Level)',
    grade: 80
  },
  {
    course: 'MATH 147',
    title: 'Calculus 1 (Advanced Level)',
    grade: 91
  },
  {
    course: 'MATH 145',
    title: 'Algebra (Advanced Level)',
    grade: 100
  },
];

const GRADE_TABLES = [
  {
    heading: 'COMPUTER SCIENCE, University of Waterloo',
    classes: CS_GRADES
  },
  {
    heading: 'APPLIED MATH, University of Waterloo',
    classes: AMATH_GRADES
  },
  {
    heading: 'MATH, University of Waterloo',
    classes: MATH_GRADES
  },
  {
    heading: 'STATISTICS, University of Waterloo',
    classes: STAT_GRADES
  },
  {
    heading: 'COMBINATORICS AND OPTIMIZATION, University of Waterloo',
    classes: CO_GRADES
  },
  {
    heading: 'OTHER, University of Waterloo',
    classes: OTHER_GRADES
  },
];

class Grades extends Component {
  render() {
    return (
      <div className="flexAlignCenterVertical">
        {GRADE_TABLES.map((gt, index) => <GradeTable heading={gt.heading} classes={gt.classes} key={index} />)}
      </div>
    );
  }
}

export default Grades

