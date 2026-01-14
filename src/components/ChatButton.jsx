import { Button, Box } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useState } from "react";
import ChatModal from "./ChatModal";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        <Button
          onClick={() => setOpen(true)}
          sx={{
            bgcolor: "#fff",
            color: "#5A4636",
            px: 3,
            py: 1.2,
            borderRadius: 10,
            textTransform: "none",
            boxShadow: 3,
          }}
          endIcon={<SmartToyIcon />}
        >
          Chat With Us
        </Button>
      </Box>

      <ChatModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
