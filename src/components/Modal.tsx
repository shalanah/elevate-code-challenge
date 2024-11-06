import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import "./Modal.css"; // I'd rather right this myself but we are short on time

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
        console.log({ open });
        if (!open) {
          onClose();
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="sr-only">{title}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {description}
          </Dialog.Description>
          {children}
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          ></div>
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
