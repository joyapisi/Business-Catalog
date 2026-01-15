import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ImagePreviewModal({ image, onClose }) {
  return (
    <Modal open={Boolean(image)} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 2,
          borderRadius: 2,
          maxWidth: "90%",
          maxHeight: "90%",
          mx: "auto",
          my: "5%",
          position: "relative",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          component="img"
          src={image}
          sx={{
            width: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
      </Box>
    </Modal>
  );
}
