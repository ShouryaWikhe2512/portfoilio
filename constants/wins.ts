export type Win = {
  id: number;
  date: string;
  organizationLogo: string;
  hackathonName: string;
  image: string;
  description: string;
};

export const wins: Win[] = [
  {
    id: 1,
    date: "March 2024",
    organizationLogo: "/logos/csi.png",
    hackathonName: "Inspiron 4.0 (CSI COEP)",
    image: "/images/inspiron.png",
    description:
      "Won 1st place for building 'Alphagen' - an AI-powered content creation platform with auto music-video sync and personalized education features.",
  },
  {
    id: 2,
    date: "October 2023",
    organizationLogo: "/logos/vit.png",
    hackathonName: "HackVIT",
    image: "/images/hackvit.png",
    description:
      "Built a full-stack waste management app with AI-based waste classification and real-time map integration.",
  },
];
