import classNames from "classnames";
import { subjects, UserStats } from "../users";
import styled, { keyframes } from "styled-components";

type Direction = "left" | "right";

// Styled components is an old love of mine - using it just cuz I know it.
const grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Bar = styled.span`
  animation: ${grow} 0.5s ease-out both;
`;

// Could use charting lib, canvas, or hand-coded SVG
const Skill = ({
  name,
  value,
  level,
  subject,
  percent,
  index,
  showLevel,
  direction,
  showSubject,
}: {
  name: string;
  value: number;
  level: string;
  subject: string;
  percent: number;
  index: number;
  showLevel: boolean;
  direction: Direction;
  showSubject: boolean;
}) => {
  const isRight = direction === "right";
  return (
    <div className="flex flex-col gap-[5px] items-start w-full">
      <p
        className="text-sm tabular-nums flex items-center justify-between uppercase w-full"
        style={isRight ? {} : { justifyContent: "flex-end" }}
      >
        <span style={isRight ? {} : { marginLeft: "auto" }}>
          {showSubject && <span className="text-[--text-muted] ">{name}:</span>}{" "}
          <span className="font-bold">{value}</span>
        </span>
        {showLevel && (
          <span className="text-xs text-[--text-muted]">{level}</span>
        )}
      </p>
      <span
        className={`rounded-[4px] h-[10px] w-full bg-[--bg-main] relative overflow-hidden`}
        style={{ transform: isRight ? "" : `rotate(180deg)` }}
      >
        <Bar
          className={classNames("bg-[--bg-main] h-[100%] w-full absolute")}
          style={{
            animationDelay: `${index * 0.05}s`,
            clipPath: `polygon(0 0, ${percent}% 0%, ${percent}% 100%, 0 100%)`,
            backgroundColor: `var(--bg-${subject})`,
          }}
        />
      </span>
    </div>
  );
};

export const Skills = ({
  stats,
  direction = "right",
  showLevel = true,
  showSubject = true,
}: {
  stats: UserStats;
  direction?: Direction;
  showLevel?: boolean;
  showSubject?: boolean;
}) => {
  const { value, total } = subjects.reduce(
    (acc, subject) => {
      return {
        value: stats.skills[subject].current + acc.value,
        total: stats.skills[subject].max + acc.total,
      };
    },
    { value: 0, total: 0 }
  );
  const average = value / total;
  return (
    <span className="flex flex-col gap-[25px] items-start w-full">
      {subjects.map((subject, i) => (
        <Skill
          showSubject={showSubject}
          showLevel={showLevel}
          direction={direction}
          index={i}
          subject={subject}
          key={subject}
          name={subject}
          value={stats.skills[subject].current}
          level={stats.skills[subject].level}
          percent={
            (stats.skills[subject].current / stats.skills[subject].max) * 100
          }
        />
      ))}
      <span className="bg-black w-[100%] h-[1px] rounded-r-full opacity-15 mt-2" />
      <Skill
        showSubject={showSubject}
        direction={direction}
        showLevel={showLevel}
        index={subjects.length}
        name="Average"
        value={value}
        level=""
        subject="average"
        percent={average * 100}
      />
    </span>
  );
};
