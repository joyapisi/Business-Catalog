import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function OrderButton() {
  const phone = "254787292863";

  const message = "Hello Buy My Space, I'd like to place an order.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Box
      component="a"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        px: 3,
        py: 1.2,
        borderRadius: 10,
        backgroundColor: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        textDecoration: "none",
        zIndex: 1000,
        cursor: "pointer",

        // subtle hover lift
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
     <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
  }}
>
  {/* Animated WhatsApp Icon */}
  <WhatsAppIcon
    sx={{
      color: "#25D366",
      fontSize: 20,

      // ✨ Animation
      animation: "pulse 1.8s infinite",
    }}
  />

  {/* Gradient Text */}
  <Box
    sx={{
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: "0.08em",
      background: "linear-gradient(270deg, #6B4E3D, #C8A27A, #6B4E3D)",
      backgroundSize: "200% auto",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "gradientMove 3s linear infinite",
    }}
  >
    Order Today
  </Box>
</Box>

      {/* keyframes */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>
    </Box>
  );
}