import Skeleton from "react-loading-skeleton";
import { User } from "../users";
import classNames from "classnames";

export const UserStreakSessions = ({
  user,
  loading = false,
  className,
}: {
  user: User | null;
  loading: boolean;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        "flex w-full gap-1 text-left leading-[1.1]",
        className
      )}
    >
      <div className="flex-1">
        <h3 className="text-[--text-muted] text-sm">
          {loading ? <Skeleton width={40} /> : "Streak"}
        </h3>
        <p className="tabular-nums">
          {loading ? (
            <Skeleton width={20} />
          ) : (
            user?.stats?.current_streak_in_days
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
            user?.stats?.total_sessions_played
          )}
        </p>
      </div>
    </div>
  );
};
