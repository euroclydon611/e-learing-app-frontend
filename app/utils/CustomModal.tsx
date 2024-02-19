import React, { Component, FC } from "react";
import { Modal, Box } from "@mui/material";
import { Login } from "@mui/icons-material";
Login;
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  //   route: string;
  Component: any;
  setRoute: (route: string) => void;
};

const CustomModal: FC<Props> = ({ open, setOpen, Component, setRoute }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-label="modal-modal-title"
      arial-describedby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] max-md:w-[300px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
        <Component setRoute={setRoute} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
