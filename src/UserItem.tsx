import { User } from "./faux_users";
import { SkillsThumbnail } from "./SkillsThumbnail";

export const UserItem = ({ user }: { user: User }) => {
  return (
    <button
      style={{ backfaceVisibility: "hidden" }}
      className="flex flex-col items-center bg-light-gray outline-transparent-[4px] rounded-xl py-4 px-5 bg-[--bg-secondary] hover:drop-shadow-md transition-all hover:outline-[--bg-average]"
    >
      {/* Spans because buttons don't like div descendants which is kinda a shame :) */}
      <span className="flex w-full justify-between items-center">
        <span className="w-[65px] h-[65px] -ml-[8px] relative flex-shrink-0 bg-red-400 rounded-full border-white border-[5px] shadow-md" />
        <span className="bg-[--bg-tertiary] py-2 rounded-lg items-center justify-center w-[50%] flex">
          <SkillsThumbnail width={70} height={50} stats={user.stats} />
        </span>
        {/* <span className="w-[50px] h-[50px] flex-shrink-0 bg-[--bg-main]" /> */}
      </span>
      <h2 className="text-left w-full leading-[1.15] mt-2 font-bold">
        {user.first_name}
        <br />
        {user.last_name}
      </h2>
      {/* Should we treat this more like a table? -> is tabular data... look into alternatives */}
      <span className="flex w-full gap-1 text-left leading-[1.1] mt-5">
        <span className="flex-1">
          <h3 className="text-[--text-muted] text-sm">Streak</h3>
          <p className="tabular-nums">{user.stats.current_streak_in_days}</p>
        </span>
        <span className="flex-1">
          <h3 className="text-[--text-muted] text-sm">Sessions</h3>
          {/* TODO: Make sure we put some commas in here and use equal spacing for numbers */}
          <p className="tabular-nums">{user.stats.total_sessions_played}</p>
        </span>
      </span>
    </button>
  );
};
