import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { User, user_empty } from "../users";
import { SkillsThumbnail } from "./SkillsThumbnail";
import { FiUser } from "react-icons/fi";
import "react-loading-skeleton/dist/skeleton.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const UserItem = ({
  user = user_empty,
  loading = false,
}: {
  user?: User;
  loading?: boolean;
}) => {
  const name = [];
  if (user.first_name) name.push(user.first_name);
  if (user.last_name) name.push(user.last_name);
  for (let i = 0; i < 2; i++) {
    if (name[i] === undefined) {
      name[i] = <>&nbsp;</>;
    }
  }

  return (
    <SkeletonTheme
      baseColor="var(--bg-main)"
      highlightColor="var(--bg-teritiary)"
    >
      <Link
        to={`/${user.id}`}
        style={loading ? { pointerEvents: "none" } : undefined}
        className={
          "flex flex-col items-center bg-light-gray outline-transparent-[4px] rounded-xl py-4 px-5 bg-[--bg-secondary] transition-all hover:shadow-md"
        }
      >
        <div className="flex justify-between items-center w-full">
          {/* TODO: Put into a comp - user image */}
          <div
            className={classNames(
              "flex w-[65px] h-[65px] -ml-[8px] relative flex-shrink-0 bg-[--bg-main] rounded-full border-white border-[5px]",
              { "shadow-md": !loading }
            )}
          >
            {user.image ? (
              <img
                src={`data:image/png;base64,${user.image}`}
                alt="profile image"
                className="w-full h-full rounded-full"
              />
            ) : loading ? null : (
              <FiUser className="m-auto" size={30} />
            )}
          </div>
          <div className="bg-[--bg-tertiary] py-2 rounded-lg items-center justify-center w-[50%] flex">
            {loading ? (
              <div style={{ height: 50 }} />
            ) : (
              <SkillsThumbnail width={70} height={50} stats={user.stats} />
            )}
          </div>
        </div>
        {!loading && (
          <h2 className="text-left leading-[1.15] mt-2 font-bold self-start">
            {/* I wanted to try 2 lines, could easily be 1 with a join */}
            {name[0]}
            <br />
            {name[1]}
          </h2>
        )}
        {loading && (
          <h2 className="text-left leading-[1.15] mt-2 font-bold self-start">
            <Skeleton width={100} count={2} />
          </h2>
        )}
        {/* Should we treat this more like a table? -> is tabular data... look into alternatives */}
        <div className="flex w-full gap-1 text-left leading-[1.1] mt-5">
          <div className="flex-1">
            <h3 className="text-[--text-muted] text-sm">
              {loading ? <Skeleton width={40} /> : "Streak"}
            </h3>
            <p className="tabular-nums">
              {loading ? (
                <Skeleton width={20} />
              ) : (
                user.stats.current_streak_in_days
              )}
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-[--text-muted] text-sm">
              {loading ? <Skeleton width={40} /> : "Sessions"}
            </h3>
            <p className="tabular-nums">
              {loading ? (
                <Skeleton width={20} />
              ) : (
                user.stats.total_sessions_played
              )}
            </p>
          </div>
        </div>
      </Link>
    </SkeletonTheme>
  );
};
