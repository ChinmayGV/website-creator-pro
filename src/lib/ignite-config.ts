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

export const ADDITIONAL_FAQ = [
  { q: 'Where is the pickup point?', keys: 'where is the pickup point travel', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "arrive" },
  { q: 'Who arranges airport pickup?', keys: 'who arranges airport pickup travel', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "arrive" },
  { q: 'Who arranges station pickup?', keys: 'who arranges station pickup travel', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "arrive" },
  { q: 'Can I travel by road?', keys: 'can i travel by road travel', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "arrive" },
  { q: 'What is the travel reimbursement policy?', keys: 'what is the travel reimbursement policy travel', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "arrive" },
  { q: 'Where is the campus gate?', keys: 'where is the campus gate travel', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "arrive" },
  { q: 'What should I do if delayed?', keys: 'what should i do if delayed travel', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "arrive" },
  { q: 'What if my train is late?', keys: 'what if my train is late travel', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "arrive" },
  { q: 'Can someone meet me at arrival?', keys: 'can someone meet me at arrival travel', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "arrive" },
  { q: 'What is the campus address?', keys: 'what is the campus address campus', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'What time should I report?', keys: 'what time should i report campus', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'Where do I collect room keys?', keys: 'where do i collect room keys campus', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'How do I access Wi-Fi?', keys: 'how do i access wi-fi campus', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'Where do I get my ID badge?', keys: 'where do i get my id badge campus', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'Where is the training hall?', keys: 'where is the training hall campus', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'Where is the campus map?', keys: 'where is the campus map campus', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'Who should I contact at check-in?', keys: 'who should i contact at check-in campus', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'What if no one is at reception?', keys: 'what if no one is at reception campus', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'Where are meals served?', keys: 'where are meals served daily life', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'What are meal times?', keys: 'what are meal times daily life', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'Where is the pharmacy?', keys: 'where is the pharmacy daily life', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'Where is the ATM?', keys: 'where is the atm daily life', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'How do I access the gym?', keys: 'how do i access the gym daily life', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'How do I play snooker?', keys: 'how do i play snooker daily life', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'What is the accommodation policy?', keys: 'what is the accommodation policy daily life', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'How do I report a room issue?', keys: 'how do i report a room issue daily life', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'Where does the shuttle stop?', keys: 'where does the shuttle stop daily life', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "basecamp" },
  { q: 'What happens on Day 1?', keys: 'what happens on day 1 programme', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "days" },
  { q: 'Who is my mentor?', keys: 'who is my mentor programme', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "days" },
  { q: 'What is the attendance policy?', keys: 'what is the attendance policy programme', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "days" },
  { q: 'Where is my timetable?', keys: 'where is my timetable programme', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "days" },
  { q: 'How are specialisation tracks chosen?', keys: 'how are specialisation tracks chosen programme', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "days" },
  { q: 'What is Demo Day?', keys: 'what is demo day programme', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "days" },
  { q: 'Will I join a specific team?', keys: 'will i join a specific team programme', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "days" },
  { q: 'What happens on a holiday?', keys: 'what happens on a holiday programme', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "days" },
  { q: 'When is the final ceremony?', keys: 'when is the final ceremony programme', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "days" },
  { q: 'Who can help if I feel unwell?', keys: 'who can help if i feel unwell wellbeing', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
  { q: 'Is there a medical contact?', keys: 'is there a medical contact wellbeing', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
  { q: 'Who can I talk to if I feel homesick?', keys: 'who can i talk to if i feel homesick wellbeing', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
  { q: 'What should I do in an emergency?', keys: 'what should i do in an emergency wellbeing', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
  { q: 'How do I ask for help privately?', keys: 'how do i ask for help privately wellbeing', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
  { q: 'Is there a counselling contact?', keys: 'is there a counselling contact wellbeing', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
  { q: 'Who handles safety concerns?', keys: 'who handles safety concerns wellbeing', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
  { q: 'What should I do if I get lost?', keys: 'what should i do if i get lost wellbeing', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
  { q: 'Who can help with accommodation?', keys: 'who can help with accommodation wellbeing', a: "I don't have confirmed information for that yet. Please check with the programme team at [INSERT CONTACT].", status: "TBC" as Status, page: "home" },
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
