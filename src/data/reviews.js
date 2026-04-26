import img1 from "../assets/headphone-4.jpg";
import img2 from "../assets/headphone-5.jpg";
import img3 from "../assets/headphone-6.jpg";
import img4 from "../assets/headphone-7.jpg";
import img5 from "../assets/headphone-8.jpg";

export const reviews = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Music Producer",
    location: "Mumbai",
    score: 9.2,
    rating: 5,
    body: "Absolutely insane sound quality. Bass is tight and highs are crystal clear.",
    tag: "Sound Quality",
    likes: 120,
    image: img1,
    metrics: {
      sound: 95,
      comfort: 88,
      build: 90,
      value: 85,
    },
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "Student",
    location: "Delhi",
    score: 8.5,
    rating: 4,
    body: "Very comfortable and stylish. Perfect for long study sessions.",
    tag: "Comfort",
    likes: 98,
    image: img2,
    metrics: {
      sound: 82,
      comfort: 92,
      build: 85,
      value: 88,
    },
  },
  {
    id: 3,
    name: "Karan Verma",
    role: "Gamer",
    location: "Bangalore",
    score: 9.8,
    rating: 5,
    body: "Perfect for gaming. Directional audio is insanely accurate.",
    tag: "Gaming",
    likes: 150,
    image: img3,
    metrics: {
      sound: 98,
      comfort: 90,
      build: 92,
      value: 91,
    },
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Designer",
    location: "Pune",
    score: 9.0,
    rating: 4,
    body: "Design is premium and minimal. Looks great with everything.",
    tag: "Design",
    likes: 87,
    image: img4,
    metrics: {
      sound: 88,
      comfort: 86,
      build: 94,
      value: 89,
    },
  },
  {
    id: 5,
    name: "Aditya Rao",
    role: "Developer",
    location: "Hyderabad",
    score: 9.3,
    rating: 5,
    body: "Using this daily while coding. Very immersive experience.",
    tag: "Productivity",
    likes: 110,
    image: img5,
    metrics: {
      sound: 92,
      comfort: 89,
      build: 91,
      value: 90,
    },
  },
];

/* 🔥 ADD THIS PART (IMPORTANT FIX) */
export const overallStats = {
  average: 9.2,
  total: 2487,
  recommended: 97,
  breakdown: {
    sound: 9.3,
    anc: 8.8,
    comfort: 8.9,
    build: 9.1,
    value: 8.8,
  },
};
