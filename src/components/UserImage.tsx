import classNames from "classnames";
import { User } from "../users";
import { FiUser } from "react-icons/fi";

export const UserImage = ({
  loading = false,
  width = 100,
  height = 100,
  user,
  className,
}: {
  user: null | User;
  loading?: boolean;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        "flex w-[100px] h-[100px] relative flex-shrink-0 bg-[--bg-main] rounded-full border-white border-[5px]",
        { "shadow-md": !loading },
        className
      )}
      style={{ width, height }}
    >
      {user?.image ? (
        <img
          src={`data:image/png;base64,${user.image}`}
          alt="profile image"
          className="w-full h-full rounded-full"
        />
      ) : loading ? null : (
        <FiUser className="m-auto" size={30} />
      )}
    </div>
  );
};
