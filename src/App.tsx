import { ReactNode } from "react";
import { User } from "./faux_users";
import { FiUsers } from "react-icons/fi";
import classNames from "classnames";
import { UserItem } from "./UserItem";
import { useGetUsers } from "./hooks/useGetUsers";

const Inner = ({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLDivElement> & { children: ReactNode }) => {
  return (
    <div
      className={classNames(
        "max-w-[--max-width] mx-auto w-full px-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// TODO: We'll need loading skeletons
function App() {
  const { isPending, error, data } = useGetUsers();
  return (
    <main
      className="flex flex-col w-full h-full"
      style={{ background: "var(--bg-main)" }}
    >
      <div className="w-full flex flex-col mx-auto">
        <header style={{ background: "var(--bg-secondary)" }}>
          <Inner className={`flex gap-2 items-center py-6`}>
            <span className="w-[28px] h-[28px] flex-shrink-0 bg-slate-50 rounded-full flex">
              <FiUsers className="m-auto" />
            </span>
            <h1>Users</h1>
          </Inner>
        </header>
        {/* TODO: Area for sorting and filtering + views grid vs row */}
        {/* <div className="h-[40px] border border-slate-200" /> */}
        <Inner
          className="grid gap-3 pt-6 pb-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {isPending && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {/* TODO: We should have these in alphabetical last name? */}
          {/* TODO: Wouldn't some filtering be nice? */}
          {data &&
            data.map((user: User | null) => {
              if (!user) return null;
              return <UserItem user={user} key={user.id} />;
            })}
        </Inner>
      </div>
    </main>
  );
}

export default App;
