import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { User } from "./faux_users";
import { SkillsThumbnail } from "./SkillsThumbnail";
import { FiUser } from "react-icons/fi";
import "react-loading-skeleton/dist/skeleton.css";

export const UserItem = ({
  user,
  loading = false,
}: {
  user: User;
  loading?: boolean;
}) => {
  return (
    <SkeletonTheme
      baseColor="var(--bg-main)"
      highlightColor="var(--bg-teritiary)"
    >
      <button
        style={loading ? { pointerEvents: "none" } : undefined}
        className="flex flex-col items-center bg-light-gray outline-transparent-[4px] rounded-xl py-4 px-5 bg-[--bg-secondary] hover:drop-shadow-md transition-all hover:outline-[--bg-average]"
      >
        {/* Spans because buttons don't like div descendants which is kinda a shame :) */}
        <span className="flex w-full justify-between items-center">
          <span className="flex w-[65px] h-[65px] -ml-[8px] relative flex-shrink-0 bg-[--bg-main] rounded-full border-white border-[5px] shadow-md">
            {user.image ? (
              <img
                src={`data:image/png;base64,${user.image}`}
                alt="profile image"
                className="w-full h-full rounded-full"
              />
            ) : loading ? null : (
              <FiUser className="m-auto" size={30} />
            )}
          </span>
          <span className="bg-[--bg-tertiary] py-2 rounded-lg items-center justify-center w-[50%] flex">
            {loading ? (
              <div style={{ height: 50 }} />
            ) : (
              <SkillsThumbnail width={70} height={50} stats={user.stats} />
            )}
          </span>
          {/* <span className="w-[50px] h-[50px] flex-shrink-0 bg-[--bg-main]" /> */}
        </span>
        {!loading && (
          <h2 className="text-left leading-[1.15] mt-2 font-bold self-start">
            {/* If we want to simplify logic - easier with just one line instead of two */}
            {/* Sometimes first name DNE */}
            {user.first_name || user.last_name}
            <br />
            {user.first_name ? user.last_name : ""}
          </h2>
        )}
        {loading && (
          <h2 className="text-left leading-[1.15] mt-2 font-bold self-start">
            <Skeleton width={100} count={2} />
          </h2>
        )}
        {/* Should we treat this more like a table? -> is tabular data... look into alternatives */}
        <span className="flex w-full gap-1 text-left leading-[1.1] mt-5">
          <span className="flex-1">
            <h3 className="text-[--text-muted] text-sm">
              {loading ? <Skeleton width={40} /> : "Streak"}
            </h3>
            <p className="tabular-nums">
              {loading ? (
                <Skeleton width={40} />
              ) : (
                user.stats.current_streak_in_days
              )}
            </p>
          </span>
          <span className="flex-1">
            <h3 className="text-[--text-muted] text-sm">
              {loading ? <Skeleton width={40} /> : "Sessions"}
            </h3>
            {/* TODO: Make sure we put some commas in here and use equal spacing for numbers */}
            <p className="tabular-nums">
              {loading ? (
                <Skeleton width={40} />
              ) : (
                user.stats.total_sessions_played
              )}
            </p>
          </span>
        </span>
      </button>
    </SkeletonTheme>
  );
};
