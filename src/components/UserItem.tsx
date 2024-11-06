import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { User, user_empty } from "../users";
import { SkillsThumbnail } from "./SkillsThumbnail";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { UserImage } from "./UserImage";
import { UserStreakSessions } from "./UserStreakSessions";

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
          <UserImage
            user={user}
            loading={loading}
            className="-ml-[8px]"
            width={65}
            height={65}
          />
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
        <UserStreakSessions user={user} loading={loading} className="mt-5" />
      </Link>
    </SkeletonTheme>
  );
};
