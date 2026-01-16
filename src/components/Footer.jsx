import { Box, Typography, IconButton, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useState } from "react";
import PoliciesModal from "./PoliciesModal";

export default function Footer() {
  const [openPolicies, setOpenPolicies] = useState(false);

  return (
    <>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Buy My Space
        </Typography>

        {/* SOCIALS */}
        <Box sx={{ mt: 1 }}>
          <IconButton
            href="https://instagram.com/buymyspace.ke"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            href="https://www.tiktok.com/@buymyspace.ke"
            target="_blank"
          >
            <MusicNoteIcon />
          </IconButton>
        </Box>

        {/* POLICIES BUTTON */}
        <Box sx={{ mt: 1 }}>
          <Button
            size="small"
            sx={{
              textTransform: "none",
              color: "#6B4E3D",
              fontSize: 13,
            }}
            onClick={() => setOpenPolicies(true)}
          >
            Terms & Policies
          </Button>
        </Box>
      </Box>

      <PoliciesModal
        open={openPolicies}
        onClose={() => setOpenPolicies(false)}
      />
    </>
  );
}
