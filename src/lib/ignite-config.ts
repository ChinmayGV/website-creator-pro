export type Status = "CONFIRMED" | "PROPOSED" | "TBC";

export const NAV_ITEMS = [
  ["home", "Home"], ["arrive", "Arrive"], ["basecamp", "Basecamp"], ["esyasoft", "Esyasoft"],
  ["days", "90 Days"], ["learning", "Learning"], ["toolkit", "Toolkit"], ["voices", "Insider Voices"],
  ["mission", "My Mission"], ["final", "Final"],
] as const;

export const PHASES = [
  { id: 1, name: "Power On", dates: "07–08 Sep", start: "2026-09-07", end: "2026-09-08", focus: "Culture and leadership", status: "CONFIRMED" as Status },
  { id: 2, name: "Discover the Grid", dates: "09–23 Sep", start: "2026-09-09", end: "2026-09-23", focus: "Domain foundation", status: "CONFIRMED" as Status },
  { id: 3, name: "Build Capability", dates: "24 Sep–01 Oct", start: "2026-09-24", end: "2026-10-01", focus: "Soft skills", status: "CONFIRMED" as Status },
  { id: 4, name: "Engine Room", dates: "05–30 Oct", start: "2026-10-05", end: "2026-10-30", focus: "Technical foundation", status: "CONFIRMED" as Status },
  { id: 5, name: "The Fork", dates: "02 Nov–11 Dec", start: "2026-11-02", end: "2026-12-11", focus: "Specialisation tracks", status: "TBC" as Status },
  { id: 6, name: "Close the Loop", dates: "11–18 Dec", start: "2026-12-11", end: "2026-12-18", focus: "Demo Day and felicitation", status: "TBC" as Status },
];

export const SCHEDULE = [
  ["09 Sep", "Project Delivery Excellence", "Deependra & Sachin"],
  ["10 Sep", "Smart Meter & Data Acquisition", "Rohit Patki"],
  ["11 Sep", "MDMS & Data Intelligence", "Amit Kulkarni & Pranav Kashyap"],
  ["15 Sep", "Smart Meters Portfolio", "Anupam Das"],
  ["16 Sep", "POSH and Soft Skills Part 1", "Vinol & Team"],
  ["18 Sep", "Project Management and Agile Practices", "Gopinath Arunachalam & Ankit Shrivastava"],
  ["21 Sep", "BESS and Comm. Tech", "Alfred, Kassem, Saurabh, Dushyant"],
  ["22 Sep", "EV Charging & CPMS", "Ashwin Gautham & Kartik Kumar"],
  ["23 Sep", "Gas Distribution Network", "Amit Golhani"],
];

export const FAQ = [
  { q: "When do I arrive?", keys: "arrival arrive date mangaluru", a: "Arrival is Sunday, 06 September 2026 in Mangaluru.", status: "CONFIRMED" as Status, page: "arrive" },
  { q: "What comes in my welcome kit?", keys: "welcome kit laptop", a: "A welcome kit and laptop are provided on arrival.", status: "CONFIRMED" as Status, page: "arrive" },
  { q: "When is the city shuttle?", keys: "shuttle saturday city transport", a: "The Saturday City Shuttle runs from 09:30 AM to 06:30 PM.", status: "CONFIRMED" as Status, page: "basecamp" },
  { q: "What should I wear?", keys: "dress wear clothing policy", a: "[INSERT OFFICIAL POLICY]", status: "TBC" as Status, page: "arrive" },
  { q: "Who do I call?", keys: "contact call help emergency delayed lost", a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
  { q: "Is travel reimbursed?", keys: "travel reimbursement receipts ticket", a: "[INSERT OFFICIAL POLICY]. Keep every ticket and receipt until this is confirmed.", status: "TBC" as Status, page: "arrive" },
  { q: "What is BESS?", keys: "bess battery energy storage", a: "BESS means Battery Energy Storage System. It stores electrical energy for later use.", status: "PROPOSED" as Status, page: "esyasoft" },
  { q: "What is MDMS?", keys: "mdms meter data", a: "MDMS means Meter Data Management System. It collects and organises meter data.", status: "PROPOSED" as Status, page: "esyasoft" },
];

export const HELP_CASES = [
  "I'm delayed", "I'm lost", "I reached but nobody is here", "Accommodation issue", "Travel issue", "Emergency",
];

export const DOMAINS = [
  ["Smart Utilities", "Digital systems that help utilities measure, monitor and manage services."],
  ["Software / AI", "Software and data tools that support decisions and automate useful work."],
  ["Energy-as-a-Service", "Energy outcomes delivered as a managed service rather than only equipment."],
  ["BESS", "Battery systems that store electrical energy for later use."],
  ["E-Mobility", "Technology and services supporting electric transport and charging."],
] as const;

export const ARRIVAL_CHECKLIST = ["Government-issued ID", "Joining letter", "Bank details", "Chargers"];
export const TOOLKIT_ITEMS = ["Zoom", "Teams", "Zoho", "WhatsApp", "Bank setup"];
export const SKILLS = ["Communication", "Tech confidence", "Problem solving", "Teamwork", "Ownership"];
export const DEFAULT_GOALS = ["Ask one good question", "Complete my learning log each week", "Prepare for Demo Day"];
