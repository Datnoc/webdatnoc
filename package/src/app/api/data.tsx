export const footerlabels: { label: string; herf: string }[] = [
  { label: "Privacy Policy", herf: "#" },
  { label: "Security Policy", herf: "#" },
  { label: "Terms of Service", herf: "#" },
  { label: "Security Blog", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Penetration Testing",
    short: "PenTest",
    icon: "mdi:shield-bug",
    background: "bg-warning/20",
    price: "99.9%",
    mark: "Security Score",
    width: 28,
    height: 28,
    padding: "px-4 py-3",
  },
  {
    title: "Vulnerability Assessment",
    short: "VA",
    icon: "mdi:shield-search",
    background: "bg-light_grey",
    price: "24/7",
    mark: "Monitoring",
    width: 28,
    height: 28,
    padding: "px-4 py-2",
  },
  {
    title: "Network Security",
    short: "NetSec",
    icon: "mdi:shield-network",
    background: "bg-warning/20",
    price: "100%",
    mark: "Protected",
    width: 28,
    height: 28,
    padding: "px-4 py-3",
  },
  {
    title: "Cloud Security",
    short: "CloudSec",
    icon: "mdi:shield-cloud",
    background: "bg-light_grey",
    price: "Enterprise",
    mark: "Grade",
    width: 28,
    height: 28,
    padding: "px-4 py-3",
  },
  {
    title: "Incident Response",
    short: "IR",
    icon: "mdi:shield-alert",
    background: "bg-light_grey",
    price: "< 1hr",
    mark: "Response Time",
    width: 28,
    height: 28,
    padding: "px-4 py-3",
  },
  {
    title: "Security Audit",
    short: "Audit",
    icon: "mdi:shield-check",
    background: "bg-light_grey",
    price: "ISO 27001",
    mark: "Certified",
    width: 28,
    height: 28,
    padding: "px-4 py-3",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "mdi:shield-check",
    title: "Enterprise Security",
  },
  {
    image: "mdi:lock-alert",
    title: "Threat Detection",
  },
  {
    image: "mdi:shield-account",
    title: "24/7 Monitoring",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "100% Secure Infrastructure" },
  { title: "Advanced Threat Protection" },
  { title: "Real-time Monitoring" },
  { title: "Expert Security Team" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "24/7 Security Support",
    text: "Round-the-clock security monitoring and incident response team.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Security Community",
    text: "Join our global community of security professionals and experts",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "Security Academy",
    text: "Learn cybersecurity and<br /> best practices for free.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Security Assessment",
    text: "Evaluate your current security posture and identify risks",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Strategy Development",
    text: "Design comprehensive security strategy and solutions",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Implementation",
    text: "Deploy security measures and monitoring systems",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Ongoing Protection",
    text: "Continuous monitoring and security updates",
    position: "md:bottom-0 md:right-0",
  },
];

export const SecurityServicesData: { name: string; description: string }[] = [
  { name: "Penetration Testing", description: "Comprehensive security testing" },
  { name: "Vulnerability Assessment", description: "Identify security weaknesses" },
  { name: "Network Security", description: "Protect your network infrastructure" },
  { name: "Cloud Security", description: "Secure cloud environments" },
];
