export interface Project {
  title: string;
  role: string;
  year: string;
  image: string;
  slug: string;
  category: string[];
}

export const projects: Project[] = [
  {
    title: "SARPRASKU",
    role: "UI Design & Development",
    year: "2026",
    image: "/images/sarprasku.png",
    slug: "sarprasku",
    category: ["Design", "Development"],
  },
  {
    title: "CNPLUS",
    role: "UI Design & Frontend Development",
    year: "2025",
    image: "/images/cnplus.png",
    slug: "cnplus",
    category: ["Design", "Development"],
  },
  {
    title: "CNERSIA",
    role: "UI Design & Frontend Development",
    year: "2025",
    image: "/images/cnersia.png",
    slug: "cnersia",
    category: ["Design", "Development"],
  },
  {
    title: "SIAKANG",
    role: "Quality Assurance Tester",
    year: "2025",
    image: "/images/siakang.png",
    slug: "siakang",
    category: ["QA"],
  },
  {
    title: "KASKUY",
    role: "UI Design & Frontend Development",
    year: "2025",
    image: "/images/kaskuy.png",
    slug: "kaskuy",
    category: ["Design", "Development"],
  },
  {
    title: "EKS-KULINE",
    role: "UI Design & Frontend Development",
    year: "2024",
    image: "/images/ekskuline.png",
    slug: "eks-kuline",
    category: ["Design", "Development"],
  },
];
