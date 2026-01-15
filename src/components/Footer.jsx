import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '@mui/icons-material/MusicNote'; // TikTok doesn't have a dedicated icon, this is a good alternative

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Buy My Space
      </Typography>

      <Box sx={{ mt: 1 }}>
        <IconButton
          component={MuiLink}
          href="https://instagram.com/buymyspace.ke"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component={MuiLink}
          href="https://www.tiktok.com/@buymyspace.ke"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <TikTokIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
