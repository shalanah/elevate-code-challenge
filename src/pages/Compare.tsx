import { Modal } from "../components/Modal";
import { useGetUsers } from "../hooks/useGetUsers";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../index.css";
import { Skills } from "../components/Skills";
import { Error } from "../components/Error";
import { subjects, User, UserStats } from "../users";

// TODO: Move to utils
const getAverage = ({ stats }: { stats: UserStats }) => {
  const { value, total } = subjects.reduce(
    (acc, subject) => {
      return {
        value: stats.skills[subject].current + acc.value,
        total: stats.skills[subject].max + acc.total,
      };
    },
    { value: 0, total: 0 }
  );
  return value / total;
};

export const Compare = () => {
  const [searchParams] = useSearchParams();

  const params: string[] = [];

  searchParams.forEach((_, key) => {
    params.push(key);
  });

  const { isPending, error, data } = useGetUsers();

  const navigation = useNavigate();
  const userIdA = params[0];
  const userIdB = params[1];

  const userA =
    data && userIdA !== undefined
      ? data.find((u) => u.id === Number(userIdA))
      : undefined;
  const userB =
    data && userIdB !== undefined
      ? data.find((u) => u.id === Number(userIdB))
      : undefined;

  return (
    <Modal
      title={"Compare users"}
      description="Compare user skills"
      onClose={() => {
        navigation("/");
      }}
    >
      <div className="p-6">
        {isPending && null}
        {error || ((!userA || !userB) && !isPending && <Error />)}
        {userA && userB && (
          <div className="flex gap-2">
            {[userA as User, userB as User]
              .sort(
                (a, b) =>
                  getAverage({ stats: a.stats }) -
                  getAverage({ stats: b.stats })
              )
              .map((user, i) => {
                return (
                  <div className="flex-1" key={i}>
                    <Skills
                      showSubject={i === 0}
                      stats={user.stats}
                      direction={i === 0 ? "left" : "right"}
                      showLevel={false}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </Modal>
  );
};
