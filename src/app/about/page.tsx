import { Header } from "@/_common/header";
import Image from "next/image";

const About = () => {
  return <div className="py-[52px] px-[52px] sm:px-[100px] flex flex-col items-center gap-8  text-center">
    <Image src="/images/headshot.jpg" alt="Logo" width={150} height={150} className="rounded-full sm:w-[300]" />
    <div className="flex flex-col gap-4 items-center">
      <Header className="text-text-primary">Principle Consultant</Header>
      <Header className="text-text-primary font-normal">Mona Lee-Tam</Header>
    </div>
    <p className="text-text-primary">
      <b>Mona Lee-Tam</b> is a strategic growth catalyst with over 25 years of experience helping organizations—from national nonprofits{" "}
      to global retail brands—unlock revenue, elevate brands, and align vision with action. She blends a proven track record in revenue{" "}
      generation, marketing, and brand transformation with the agility of a systems thinker who sees the big picture while setting a path for execution.
    </p>
    <p className="text-text-primary">
      Her career includes negotiating over $5M in media value at leading North American airports; driving exponential revenue growth,{" "}
      delivering transformative brand refreshes that strengthen market presence and stakeholder engagement. Mona's approach combines strategic{" "}
      foresight with hands-on leadership, empowering teams, streamlining systems, and creating measurable, lasting impact.
    </p>
    <p className="text-text-primary">
      Through <b>Ellevar</b>, she helps mission-driven organizations and forward-thinking businesses achieve ambitious growth, strengthen relationships,{" "}
      and navigate change with clarity and purpose.
    </p>
  </div>
};

export default About;
