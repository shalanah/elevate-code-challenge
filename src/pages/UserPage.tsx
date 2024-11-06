import { Modal } from "../components/Modal";
import { useGetUsers } from "../hooks/useGetUsers";
import { useNavigate, useParams } from "react-router-dom";
import { UserImage } from "../components/UserImage";
import "../index.css";
import { Skills } from "../components/Skills";
import { UserStreakSessions } from "../components/UserStreakSessions";

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
      <div className="p-6">
        <header className="flex gap-4 items-center">
          <UserImage user={user} loading={isPending} />
          <div className="flex flex-col w-full">
            <h1 className="text-lg font-bold mt-3">
              {user ? [user.first_name, user.last_name].join(" ") : ""}
            </h1>
            <UserStreakSessions
              user={user}
              loading={isPending}
              className="mt-1"
            />
          </div>
        </header>
        <div className="w-full mt-8 rounded-lg px-4 py-8 border-t">
          <div className="w-full">
            {user && !isPending && user?.stats && (
              <Skills stats={user?.stats} />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
