import classNames from "classnames";
import { Modal } from "../components/Modal";
import { useGetUsers } from "../hooks/useGetUsers";
import { useNavigate, useParams } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";

export const UserPage = () => {
  const { id } = useParams();
  const { isPending, error, data } = useGetUsers();
  const user =
    (data || [])?.length > 0 ? data?.find((u) => u?.id + "" === id) : {};
  const navigation = useNavigate();
  return (
    <Modal
      title={"User details"}
      description="See user stats"
      onClose={() => {
        navigation("/");
      }}
    >
      <div className="px-8 py-6">
        <header className="flex gap-4 items-center">
          <div
            className={classNames(
              "flex w-[100px] h-[100px] -ml-[8px] relative flex-shrink-0 bg-[--bg-main] rounded-full border-white border-[5px]",
              { "shadow-md": !isPending }
            )}
          >
            {user?.image ? (
              <img
                src={`data:image/png;base64,${user.image}`}
                alt="profile image"
                className="w-full h-full rounded-full"
              />
            ) : isPending ? null : (
              <FiUser className="m-auto" size={30} />
            )}
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-lg font-bold mt-3">
              {user ? [user.first_name, user.last_name].join(" ") : ""}
            </h1>
            <div className="flex w-full gap-1 text-left leading-[1.1] mt-0">
              <div className="flex-1">
                <h3 className="text-[--text-muted] text-sm">
                  {isPending ? <Skeleton width={40} /> : "Streak"}
                </h3>
                <p className="tabular-nums">
                  {isPending ? (
                    <Skeleton width={20} />
                  ) : (
                    user.stats.current_streak_in_days
                  )}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-[--text-muted] text-sm">
                  {isPending ? <Skeleton width={40} /> : "Sessions"}
                </h3>
                <p className="tabular-nums">
                  {isPending ? (
                    <Skeleton width={20} />
                  ) : (
                    user.stats.total_sessions_played
                  )}
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="bg-[--bg-main] h-[100px] w-full"></div>
      </div>
    </Modal>
  );
};
