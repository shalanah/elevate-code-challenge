import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import "./modal.css";

export const Modal = ({
  children,
  title,
  description,
  onClose,
}: {
  children: ReactNode;
  title: string;
  description: string;
  onClose: () => void;
}) => {
  return (
    <Dialog.Root
      open
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <Dialog.Portal container={document.getElementById("root")}>
        <Dialog.Overlay
          className="fixed inset-0 bg-black opacity-20 z-40"
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        />
        <Dialog.Content
          className="bg-white rounded-xl shadow-md fixed top-[50%] left-[50%] max-w-[450px] max-h-[85vh] w-full z-40 overflow-auto"
          style={{
            transform: "translate(-50%, -50%)",
            animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <Dialog.Title className="sr-only">{title}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {description}
          </Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className="absolute right-2 border-2 border-transparent top-2 rounded-full focus:border-black hover:border-black p-1 transition-all"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
