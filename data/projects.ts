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
    role: "Product Design & Development",
    year: "2026",
    image: "/images/sarprasku.png",
    slug: "sarprasku",
    category: ["Design", "Development"],
  },
  {
    title: "CNPLUS",
    role: "Frontend Development",
    year: "2025",
    image: "/images/cnplus.png",
    slug: "cnplus",
    category: ["Development"],
  },
  {
    title: "CNERSIA",
    role: "Product Design & Development",
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
    role: "Frontend Development",
    year: "2025",
    image: "/images/kaskuy.png",
    slug: "kaskuy",
    category: ["Development"],
  },
  {
    title: "EKS-KULINE",
    role: "Frontend Development",
    year: "2024",
    image: "/images/ekskuline.png",
    slug: "eks-kuline",
    category: ["Development"],
  },
];
