export const sidebarLinks = [
  {
    label: "Home",
    route: "/",
    imgUrl: "/icons/Home.svg",
  },
  {
    label: "Future Meets",
    route: "/dashboard/upcoming",
    imgUrl: "/icons/upcoming.svg",
  },
  {
    label: "Past Meets",
    route: "/dashboard/previous",
    imgUrl: "/icons/previous.svg",
  },
  {
    label: "Recordings",
    route: "/dashboard/recordings",
    imgUrl: "/icons/Video.svg",
  },
  {
    label: "My Space",
    route: "/dashboard/personal-room",
    imgUrl: "/icons/add-personal.svg",
  },
];

export const landingNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

// // data/cardsData.ts
import {
  Send,
  CalendarClock,
  Video,
  MonitorUp,
  LineChart,
  ShieldCheck,
  PieChart,
  FileText,
} from "lucide-react";

export const featuresData = [
  {
    title: "Instant Meetings",
    description: "Create and Launch meetings instantly with just single click.",
    Icon: Send,
    color: "bg-blue-1",
  },
  {
    title: "Schedule Meets",
    description:
      "Schedule meetings at a later date. And track all future meets.",
    Icon: CalendarClock,
    color: "bg-green-1",
  },
  {
    title: "Record Meetings",
    description: " Record any meeting of your choice. Capture every moment.",
    Icon: Video,
    color: "bg-red-1",
  },
  {
    title: "Share Screens",
    description:
      " Teamwork and collaboration has never been easier. Share screens,           exchange ideas, and enhance productivity.",
    Icon: MonitorUp,
    color: "bg-yellow-1",
  },
  {
    title: "Call Analytics",
    description:
      " Get detailed analytics on each call. Make better informed decisions with data.",
    Icon: LineChart,
    color: "bg-blue-1",
  },
  {
    title: "Security & Encryption",
    description:
      "  Each call is secure and well-encrypted, ensuring your conversations remain private and protected.",
    Icon: ShieldCheck,
    color: "bg-green-1",
  },
  // Add more objects as needed
];

export const aboutsData = [
  {
    title: "Engagement",
    description: "Engage, meet-up, and share Ideas seamlessly.",
    Icon: FileText,
    color: "bg-blue-1",
  },
  {
    title: "Collaboration",
    description: "Share screens, collaborate and get stuff done.",
    Icon: PieChart,
    color: "bg-yellow-1",
  },
  {
    title: "Security",
    description: "Secured and encrypted communication.",
    Icon: ShieldCheck,
    color: "bg-green-1",
  },
];

export const HomeData = [
  {
    title: "Create Instant Meetings",
    mainContent: "Start video calls with one click.",
    mobileContent: "Create Instant Meetings ",
    Icon: Send,
  },
  {
    title: "Plan & Schedule Meets",
    mainContent: "Schedule meetings with ease",
    mobileContent: "Plan & Schedule Meets ",
    Icon: CalendarClock,
  },
  {
    title: "Record Meetings",
    mainContent: "Capture each meeting moment.",
    mobileContent: "Record Meetings ",
    Icon: Video,
  },
  {
    title: "Gather Meeting Insights",
    mainContent: "Track and analyze meeting data.",
    mobileContent: "Gather Meeting Insights",
    Icon: LineChart,
  },
];

export const faqData = [
  {
    sn: 1,
    question: "Iungo Looks great. What is it?",
    answer:
      "Iungo is a virtual space and opensource videoconferencing solution where you and your remote team,class, agency... can work, collaborate and hang out together. Iungo makes spending time with your remote team fun, seamless and productive.",
  },
  {
    sn: 2,
    question: "How much does Iungo cost?",
    answer: "Iungo is an OpenSource Product and at the moment is 100% free.",
  },
  {
    sn: 3,
    question: "Is Iungo Secure?",
    answer:
      "Yes. Each call is secure and well-encrypted, ensuring your conversations remain private and protected.",
  },
  {
    sn: 4,
    question: "Can I record team meetings on Iungo?",
    answer:
      "With Iungo you can record any meeting of your choice. Allowing you to capture every moment.",
  },
];

export const sectorsData = [
  {
    img: "/icons/healthcare-svg.svg",
    title: "Healthcare",
    content: "Provide remote medical consultation",
    color: "bg-green-1"
  },
  {
    img: "/icons/education-svg.svg",
    title: "Education",
    content: "Teach online and empower students",
  },
  {
    img: "/icons/government-svg.svg",
    title: "Government",
    content: "Improve Inter-agency communication",
  },
  {
    img: "/icons/bank-svg.svg",
    title: "Banking",
    content: "Build better customer relationships",
  },
  {
    img: "/icons/it-svg.svg",
    title: "Tech & IT",
    content: "Enables remote team collaboration. ",
  },
];
