import {
  Modal,
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
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

        <Stack spacing={2}>
          <Option text="Explore Product Catalog" icon={<MapIcon />} />
          <Option text="Get a quotation" icon={<RequestQuoteIcon />} />
          <Option text="Make Inquiry" icon={<ChatIcon />} />
          <Option text="Call us now" icon={<CallIcon />} />
        </Stack>
      </Box>
    </Modal>
  );
}

function Option({ text, icon }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
      <Typography>{text}</Typography>
      {icon}
    </Box>
  );
}
