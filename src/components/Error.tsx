import { BiSolidErrorCircle } from "react-icons/bi";

export const Error = () => {
  return (
    <div className="border rounded-md p-10 text-center bg-[--bg-secondary] flex flex-col items-center">
      <BiSolidErrorCircle
        size={40}
        style={{ color: "var(--red)" }}
        className="mb-2"
      />
      <h3 className="font-bold">Oooops! Something went wrong</h3>
      <p>Try refreshing the page or come back later</p>
    </div>
  );
};
