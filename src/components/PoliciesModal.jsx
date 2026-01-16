import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PoliciesModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ pr: 5 }}>
        Terms & Conditions
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 12, top: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            General Policy
          </Typography>
          <Typography variant="body2">
            All Buy My Space products are custom-made, cut-to-size, or ordered
            specifically per client request. Due to this nature, products are
            prepared according to the specifications confirmed by the client.
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">
            Measurements
          </Typography>
          <Typography variant="body2">
            Clients are responsible for providing accurate measurements. Buy My
            Space shall not be held liable for errors arising from incorrect or
            incomplete measurements provided by the client. Where a site visit
            measurement service is booked, measurements taken by our team shall
            be used as the final reference.
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">
            Prooduct Confirmation
          </Typography>

          <Typography variant="body2">
            Before dispatch, clients are strongly advised to confirm product
            details carefully through photos, videos, samples, or physical
            inspection where applicable. Once a product leaves the warehouse or
            workshop, it shall be deemed approved by the client.
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">
            Installation
          </Typography>
          <Typography variant="body2">
            Installation fees are charged separately unless stated otherwise.
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">
            Returns & Refunds
          </Typography>
          <Typography variant="body2">
            Due to the customized nature of our products, returns and refunds
            are not accepted once production has commenced.
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">
            Damages & Claims
          </Typography>
          <Typography variant="body2">
            Any claims regarding damage must be reported immediately upon
            delivery and before installation. Claims made after installation or
            after goods have been collected will not be accepted. Claims made
            beyond 24 hours of delivery will not be accepted.
          </Typography>

          <Typography variant="caption" color="text.secondary">
            © Buy My Space — Kenya
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
