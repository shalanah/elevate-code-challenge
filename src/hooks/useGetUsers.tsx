import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  const res = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const usersIdsUrl = new URL(`${import.meta.env.VITE_API_URL}/users`);
      const params = new URLSearchParams({
        authentication_user_id: import.meta.env.VITE_USER_ID,
        authentication_token: import.meta.env.VITE_USER_TOKEN,
      });
      usersIdsUrl.search = params.toString();

      try {
        const res = await fetch(usersIdsUrl.href);
        const data = await res.json();
        if (!data.user_ids) {
          throw new Error("No user_ids found");
        }
        return Promise.all(
          data.user_ids.map(async (userId: number) => {
            const userDataUrl = new URL(
              `${import.meta.env.VITE_API_URL}/users/${userId}`
            );
            const params = new URLSearchParams({
              authentication_user_id: import.meta.env.VITE_USER_ID,
              authentication_token: import.meta.env.VITE_USER_TOKEN,
            });
            userDataUrl.search = params.toString();

            try {
              // TODO: Add id to result too - for key
              const userDataRes = await fetch(userDataUrl.href);
              const userData = await userDataRes.json();
              if (userData.error) {
                console.error(userData.error);
                return null;
              }
              return { ...userData, id: userId };
            } catch (error) {
              console.error(error);
              return null; // missing that data - should we tell the user? retry logic?
            }
          })
        );
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return res;
};
