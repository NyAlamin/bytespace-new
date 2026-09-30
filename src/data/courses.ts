export type Course = {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  level: string;
  price: number;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
};

const BASE = {
  author: "purepearl studio",
  level: "Beginner",
  price: 25,
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
} as const;

export const COURSES: readonly Course[] = [
  { id: "figma-basic", title: "Learn Figma from Basic", thumbnail: "/images/courses/course-figma-basic.png", ...BASE },
  { id: "digital-asset", title: "Build Digital Asset", thumbnail: "/images/courses/course-digital-asset.png", ...BASE },
  { id: "big-data", title: "the Power of Big Data", thumbnail: "/images/courses/course-big-data.png", ...BASE },
  { id: "productivity", title: "Balancing Productivity and Self-Care", thumbnail: "/images/courses/course-productivity.png", ...BASE },
  { id: "money", title: "Mastering Money Management", thumbnail: "/images/courses/course-money.png", ...BASE },
  { id: "startup", title: "From Idea to Startup Success", thumbnail: "/images/courses/course-startup.png", ...BASE },
];