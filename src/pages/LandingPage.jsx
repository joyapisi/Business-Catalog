import { Box, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url(./public/landing-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        px: 3,
      }}
    >
      {/* Floating Circular Badge */}
      <Avatar
        sx={{
          position: "absolute",
          top: 24,
          right: 24,
          width: 72,
          height: 72,
          bgcolor: "rgba(255,255,255,0.15)", // subtle glass effect
          border: "1.5px solid #6B4E3D",
          backdropFilter: "blur(4px)", // optional premium touch
            boxShadow: "0 0 12px rgba(107,78,61,0.25)",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          "&:hover img": {
              transform: "rotate(-3deg)",
              transition: "0.3s ease",
            },
        }}
      >
        <img
          src="./public/logo.png"
          alt="Buy My Space Logo"
          style={{
            width: "60%",
            height: "60%",
            objectFit: "contain",
            opacity: 0.65, // translucency
          }}
        />
      </Avatar>

      <Box
        sx={{
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        {/* Welcome Text */}
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontWeight: 600,
            letterSpacing: 2,
            color: "#fff",
            textTransform: "uppercase",
            mb: 1,
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          Welcome to
        </Typography>

        {/* Brand Name */}
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: 40, sm: 56 },
            fontWeight: 600,
            color: "#fff",
            mb: 1,
            textShadow: "0 4px 12px rgba(0,0,0,0.5)",
          }}
        >
          BMS STUDIO
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: { xs: 16, sm: 18 },
            color: "#f5f5f5",
            letterSpacing: 1.2,
            mb: 4,
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          Interior Wall Solutions
        </Typography>

        {/* CTA Button */}
        <Button
          onClick={() => navigate("/categories")}
          sx={{
            bgcolor: "#6B4E3D",
            color: "#fff",
            px: 4,
            py: 1.5,
            borderRadius: 999,
            textTransform: "none",
            fontSize: 16,
            "&:hover": {
              bgcolor: "#5A3F31",
            },
          }}
        >
          Start Exploring
        </Button>
      </Box>
    </Box>
  );
}
