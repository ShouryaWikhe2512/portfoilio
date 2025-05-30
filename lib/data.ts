export interface Achievement {
  name: string;
  date: string;
  logo: string;
  host: string;
  description: string;
  image: string;
  learnings: string[];
}

export const hackathonData: Achievement[] = [
  {
    name: "𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍 𝟐𝟎𝟐𝟓",
    date: "April 2025",
    logo: "/MKSSS's_College_of_Engineering_for_Women,_Pune_logo.png",
    description:
      "Built an AI-powered smart waste management platform designed for real-world application, user-centric design, and sustainable, scalable impact.",
    host: "MKSSS Cummins College of Engineering for Women , Pune, in collaboration with Mastercard .",
    image: "/WhatsApp Image 2025-04-15 at 19.43.01_f966cd65.jpg",
    learnings: [
      "📷 Utilization of CCTV to locate water clogs and trash piles",

      "🤖 AI-driven waste segregation for efficient processing",

      "✅ AI-based verification to ensure proper waste cleanup",
    ],
  },
  {
    name: "𝐈𝐧𝐬𝐩𝐢𝐫𝐨𝐧 𝟒.𝟎",
    date: "March 2025",
    logo: "/College_of_Engineering,_Pune_logo.jpg",
    host: "𝐂𝐒𝐈, COEP Technological University, in collaboration with e6data and Mira",

    description:
      "Build an AI-powered platform that equips content creators with creative AI tools, business analytics, personalized education,",
    image: "/WhatsApp Image 2025-04-15 at 19.42.59_bc701b03.jpg",
    learnings: [
      "📊 Developing a business analytics extension for YouTube",

      "🤖 Building various specialized AI models",

      "🎵 Creating an AI that syncs video and music by analyzing beats",
    ],
  },
  {
    name: "𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐞 𝐘𝐨𝐮 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐋𝐞𝐯𝐞𝐥 𝐓𝐞𝐜𝐡𝐚𝐭𝐡𝐨𝐧 𝟐.𝟎",
    date: "February 2025",
    logo: "/download.png",
    host: "AISSMS IOIT",

    description:
      "Build an AI-powered e-waste recycling platform that streamlines detection, collection, valuation, and responsible disposal.",
    image: "/WhatsApp Image 2025-04-15 at 19.42.57_769bef43.jpg",
    learnings: [
      "🤖 Using AI to identify recyclable components in e-waste",

      "♻️ Aiming for a zero-waste product lifecycle",

      "🛍️ Creating a marketplace for refurbished and recycled electronics",
    ],
  },
  {
    name: "GeekVishwa 2.0",
    date: "February 2025",
    logo: "/icons8-geeksforgeeks.svg",
    host: "GeeksforGeeks Student Chapter VIIT",

    description:
      "Build an AI and 3D-powered platform revolutionizing fashion with personalized styling and immersive virtual try-ons.",
    image: "/WhatsApp Image 2025-05-30 at 22.24.03_620873ee.jpg",
    learnings: [
      "🎨 Using Three.js for real-time customization of 3D fashion objects",
      "🤖 Leveraging AI to enhance and generate 3D models for digital fashion",
      "🧠 Gaining deep understanding of fashion-tech integration and user personalization",
    ],
  },
];
