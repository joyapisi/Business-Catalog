import { Modal, Box, Typography, IconButton, Link, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MapIcon from "@mui/icons-material/Map";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";

export default function ChatModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 3,
          borderRadius: 3,
          width: 300,
          mx: "auto",
          mt: "30vh",
          position: "relative",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography sx={{ fontSize: 18, mb: 2 }}>
          What are you interested in?
        </Typography>

        <Box sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Link href="/categories" underline="none">
              <Option text="Explore Product Catalog" icon={<MapIcon />} />
            </Link>
            <Link
              href="https://wa.me/message/AYJ3TMCTJLVZH1"
              target="_blank"
              underline="none"
            >
              <Option text="Get a quotation" icon={<RequestQuoteIcon />} />
            </Link>
            <Link
              href="https://wa.me/message/AYJ3TMCTJLVZH1"
              target="_blank"
              underline="none"
            >
              <Option text="Make Inquiry" icon={<ChatIcon />} />
            </Link>
            <Link href="tel:0787292863" underline="none">
              <Option text="Call us now" icon={<CallIcon />} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

function Option({ text, icon }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <Typography>{text}</Typography>
      {icon}
    </Box>
  );
}
