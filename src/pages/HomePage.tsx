import { ReactNode } from "react";
import { User } from "../users";
import { FiUsers } from "react-icons/fi";
import classNames from "classnames";
import { UserItem } from "../components/UserItem";
import { useGetUsers } from "../hooks/useGetUsers";
import { BiSolidErrorCircle } from "react-icons/bi";

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

export const HomePage = () => {
  const { isPending, error, data } = useGetUsers();
  return (
    <main className="flex flex-col w-full h-full">
      <div className="w-full flex flex-col mx-auto">
        <header style={{ background: "var(--bg-secondary)" }}>
          <Inner className={`flex gap-2 items-center py-6`}>
            <span className="w-[28px] h-[28px] flex-shrink-0 bg-[--bg-main] rounded-full flex">
              <FiUsers className="m-auto" />
            </span>
            <h1>Users</h1>
          </Inner>
        </header>
        {/* TODO: Wouldn't some filtering + sorting be nice? */}
        {/* TODO: Area for sorting and filtering + views grid vs row */}
        {/* <div className="h-[40px] border border-slate-200" /> */}
        <Inner
          className="grid gap-3 pt-6 pb-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {isPending &&
            [...Array(12)].map((_, i) => <UserItem key={i} loading />)}
          {error && (
            <div className="border rounded-md p-10 text-center bg-[--bg-secondary] flex flex-col items-center">
              <BiSolidErrorCircle
                size={40}
                style={{ color: "var(--red)" }}
                className="mb-2"
              />
              <h3 className="font-bold">Oooops! Something went wrong</h3>
              <p>Try refreshing the page or come back later</p>
            </div>
          )}
          {data &&
            data
              .filter(() => true)
              // .sort((a, b) => {(a?.id ?? "") - (b?.id ?? "")})
              .map((user: User | null) => {
                if (!user) return null;
                return <UserItem user={user} key={user.id} />;
              })}
        </Inner>
      </div>
    </main>
  );
};