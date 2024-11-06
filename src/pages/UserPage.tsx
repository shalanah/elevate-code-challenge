import { Modal } from "../components/Modal";
import { useGetUsers } from "../hooks/useGetUsers";
import { useNavigate, useParams } from "react-router-dom";

export const UserPage = () => {
  const { id } = useParams();
  const { isPending, error, data } = useGetUsers();
  const user =
    (data || [])?.length > 0 ? data?.find((u) => u.id + "" === id) : undefined;
  const navigation = useNavigate();
  return (
    <Modal
      title={"User details"}
      description="See user stats"
      onClose={() => {
        navigation("/");
      }}
    >
      {id}
    </Modal>
  );
};
