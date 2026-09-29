import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PHASES, SCHEDULE } from "@/lib/ignite-config";

const questionTopics = ["your first week", "the team", "customer needs", "how a project begins", "a difficult decision", "feedback", "the product", "a typical day", "a useful skill", "learning from mistakes", "collaboration", "the next phase", "a technical challenge", "the wider industry", "what success looks like", "a surprising lesson"];
const scenarios = [
  ["You are blocked on a task.", "Tell your guide what you tried and ask for a next step."],
  ["You do not understand a term in a meeting.", "Write it down and ask for a plain-English explanation."],
  ["You disagree with a teammate.", "Explain your view calmly and listen to theirs."],
  ["Your deadline is at risk.", "Raise the risk early and agree on priorities."],
  ["You receive difficult feedback.", "Ask for an example and choose one thing to practise."],
  ["You have an idea for improvement.", "Describe the problem first, then offer your idea."],
  ["You finish a task sooner than expected.", "Check your work and ask what needs attention next."],
  ["A teammate asks for help while you are busy.", "Acknowledge them and agree on a useful time to help."],
] as const;

export function PhaseActivities({ phaseId }: { phaseId: number }) {
  const [question, setQuestion] = useState(0);
  const [scenario, setScenario] = useState(0);
  if (phaseId !== 1 && phaseId !== 3) return null;
  return <section className="section-block activity-block">
    <span className="status status-proposed">Proposed</span>
    {phaseId === 1 ? <>
      <h2>Ask one good question</h2>
      <p>Try asking: “What should a new trainee understand about {questionTopics[question]}?”</p>
      <Button onClick={() => setQuestion((question + 1) % questionTopics.length)}>Another question</Button>
    </> : <>
      <h2>Capability Lab</h2>
      <p className="scenario-number">SCENARIO {scenario + 1} OF {scenarios.length}</p>
      <p>{scenarios[scenario]?.[0]}</p>
      <details><summary>What might a good approach look like?</summary><p>{scenarios[scenario]?.[1]}</p></details>
      <Button onClick={() => setScenario((scenario + 1) % scenarios.length)}>Next scenario</Button>
    </>}
  </section>;
}

export function TravelModes() {
  const [mode, setMode] = useState("Air");
  const details: Record<string, string> = {
    Air: "Mangaluru International Airport is a possible arrival hub. Pickup details: [INSERT PICKUP DETAILS].",
    Train: "Mangaluru Central and Mangaluru Junction are possible arrival hubs. Pickup details: [INSERT PICKUP DETAILS].",
    Road: "Plan your road journey to Mangaluru. Campus directions: [INSERT ADDRESS].",
  };
  return <div className="travel-modes">
    <div className="mode-tabs" role="tablist" aria-label="Travel mode">{Object.keys(details).map(item => <Button key={item} role="tab" aria-selected={mode === item} variant={mode === item ? "primary" : "secondary"} onClick={() => setMode(item)}>{item}</Button>)}</div>
    <p>{details[mode]}</p><span className="status status-proposed">Proposed</span>
    <p>Keep every ticket and receipt until the reimbursement policy is confirmed.</p>
  </div>;
}

export function ProgrammeCalendar({ today }: { today: string }) {
  const start = new Date("2026-09-06T12:00:00");
  const end = new Date("2026-12-18T12:00:00");
  const days = Math.round((end.getTime() - start.getTime()) / 86400000) + 1;
  const all = Array.from({ length: days }, (_, offset) => {
    const date = new Date(start.getTime() + offset * 86400000);
    const iso = date.toISOString().slice(0, 10);
    const short = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short" }).format(date);
    const session = SCHEDULE.find(([d]) => d === short);
    const phase = PHASES.find(p => iso >= p.start && iso <= p.end);
    const weekend = date.getDay() === 0 || date.getDay() === 6;
    const kind = iso === "2026-09-06" ? "Arrival" : iso === "2026-10-02" ? "Holiday? TBC" : weekend ? "Weekend" : session ? "Session" : phase ? "Details TBC" : "Gap";
    return { iso, short, kind, detail: session?.[1] ?? (phase?.focus ?? "No confirmed session") };
  });
  const [month, setMonth] = useState("Sep");
  const visible = all.filter(d => d.short.endsWith(month));
  return <section className="section-block calendar-block"><div><h2>Day-by-day view</h2><span className="status status-tbc">Unconfirmed days labelled</span></div>
    <div className="mode-tabs" role="tablist" aria-label="Month">{["Sep", "Oct", "Nov", "Dec"].map(m => <Button key={m} role="tab" aria-selected={month === m} variant={month === m ? "primary" : "secondary"} onClick={() => setMonth(m)}>{m}</Button>)}</div>
    <div className="day-grid">{visible.map(d => <div key={d.iso} className={`day-cell ${d.iso === today ? "today" : ""}`} title={`${d.short}: ${d.detail}`}><strong>{d.short.slice(0, 2)}</strong><small>{d.kind}</small></div>)}</div>
    <p className="calendar-caption">Today is outlined. Dates without a confirmed session are marked as unconfirmed, not silently filled.</p>
  </section>;
}
