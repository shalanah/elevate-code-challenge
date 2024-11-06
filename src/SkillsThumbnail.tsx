import { subjects, UserStats } from "./faux_users";

export const SkillsThumbnail = ({
  width,
  height,
  stats,
}: {
  width: number;
  height: number;
  stats: UserStats;
}) => {
  // If performance is an issue - I'd create a canvas element instead
  // - Could simplify and remove graph (I added just for fun! - visually)
  // - Could get more elaborate with a charting library or hand-code some SVG elements

  // TODO: Could pull in some kind of math lib
  const { value, total } = subjects.reduce(
    (acc, subject) => {
      return {
        value: stats[subject].current + acc.value,
        total: stats[subject].max + acc.total,
      };
    },
    { value: 0, total: 0 }
  );
  const average = value / total;
  return (
    <span
      // TODO: Calculate gap based on width
      className="w-full h-[80px] flex gap-[6px] items-end"
      style={{ width, height }}
    >
      {subjects.map((subject) => (
        <span
          key={subject}
          className={`bg-[--bg-${subject}] h-[100%] flex-1 rounded-t-full`}
          style={{
            height: (stats[subject].current / stats[subject].max) * 100 + "%",
          }}
        />
      ))}
      {/* <span className="bg-[--bg-memory] h-[80%] flex-1 rounded-t-full" /> */}
      <span className="bg-black h-[100%] w-[1px] rounded-t-full opacity-15" />
      {/* TODO: Add all together */}
      <span
        className="bg-[--bg-average] h-[80%] flex-1 rounded-t-full"
        style={{
          height: average * 100 + "%",
        }}
      />
    </span>
  );
};
