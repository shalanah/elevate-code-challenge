import { ReactNode } from "react";
import { subjects, users, UserStats } from "./faux_users";
import { FiUsers } from "react-icons/fi";
import classNames from "classnames";

const Inner = ({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLDivElement> & { children: ReactNode }) => {
  return (
    <div
      className={classNames(
        "max-w-[--max-width] mx-auto w-full px-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const GraphSmall = ({
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

// TODO: We'll need loading skeletons
function App() {
  return (
    <main className="flex flex-col w-full h-full">
      <div className="w-full flex flex-col mx-auto outline">
        <header className="bg-[--bg-secondary]">
          <Inner className={`flex gap-2 items-center py-6`}>
            <span className="w-[28px] h-[28px] flex-shrink-0 bg-slate-50 rounded-full flex">
              <FiUsers className="m-auto" />
            </span>
            <h1>Users</h1>
          </Inner>
        </header>
        {/* TODO: Area for sorting and filtering + views grid vs row */}
        {/* <div className="h-[40px] border border-slate-200" /> */}
        <Inner
          className="grid gap-3 pt-6 pb-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {/* TODO: We should have these in alphabetical last name */}
          {/* TODO: Wouldn't some filtering be nice? */}
          {[...Array(20)].map((_, i) => {
            const user = users[0];
            return (
              <button
                key={i}
                style={{}}
                className="flex flex-col items-center bg-light-gray rounded-xl py-4 px-5 bg-[--bg-secondary] "
              >
                {/* Spans because buttons don't like div descendants which is kinda a shame :) */}
                <span className="flex w-full justify-between items-center">
                  <span className="w-[65px] h-[65px] -ml-[8px] relative flex-shrink-0 bg-red-400 rounded-full border-white border-[5px] shadow-md" />
                  <span className="bg-[--bg-tertiary] py-2 rounded-lg items-center justify-center w-[50%] flex">
                    <GraphSmall width={70} height={50} stats={user.stats} />
                  </span>
                  {/* <span className="w-[50px] h-[50px] flex-shrink-0 bg-[--bg-main]" /> */}
                </span>
                <h2 className="text-left w-full leading-[1.15] mt-2 font-bold">
                  {user.first_name}
                  <br />
                  {user.last_name}
                </h2>
                {/* Should we treat this more like a table? -> is tabular data... look into alternatives */}
                <span className="flex w-full gap-1 text-left leading-[1.1] mt-3">
                  <span className="flex-1">
                    <h3 className="text-[--text-muted] text-sm">Streak</h3>
                    <p className="tabular-nums">
                      {user.stats.current_streak_in_days}
                    </p>
                  </span>
                  <span className="flex-1">
                    <h3 className="text-[--text-muted] text-sm">Sessions</h3>
                    {/* TODO: Make sure we put some commas in here and use equal spacing for numbers */}
                    <p className="tabular-nums">
                      {user.stats.total_sessions_played}
                    </p>
                  </span>
                </span>
              </button>
            );
          })}
        </Inner>
      </div>
    </main>
  );
}

export default App;
