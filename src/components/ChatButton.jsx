import { Button, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
            px: 3,
            py: 1.2,
            borderRadius: 10,
            textTransform: "none",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: 1.2,

            // subtle hover
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
            },

            // hover effect on icon
            "&:hover svg": {
              transform: "scale(1.15)",
            },
          }}
        >
          {/* TEXT */}
          <Box
            sx={{
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "0.08em",

              // ✨ Gradient text
              background: "linear-gradient(270deg, #6B4E3D, #C8A27A, #6B4E3D)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

              // ✨ Animation
              animation: "gradientMove 4s linear infinite",
            }}
          >
            Start your Order Today
          </Box>

          {/* ICON */}
          <WhatsAppIcon
            sx={{
              color: "#25D366",
              fontSize: 20,

              // ✨ Pulse animation
              animation: "pulse 2s ease-in-out infinite",
              filter: "drop-shadow(0 0 4px rgba(37,211,102,0.4))",
            }}
          />
        </Button>
      </Box>

      {/* MODAL */}
      <ChatModal open={open} onClose={() => setOpen(false)} />

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.12); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </>
  );
}