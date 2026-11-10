import { Box, Button, Typography } from '@mui/material';

/** MUI: sx у кнопки, sx у Box, кнопка без sx. Случай из step39-style-source (MuiPage); классы Tailwind заменены style. */
export default function ScreenMuiSx() {
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <h1>MUI</h1>

      <Button variant="contained" sx={{ p: 3, bgcolor: '#7c3aed' }}>
        MUI sx button
      </Button>

      <Button variant="outlined">MUI plain button</Button>

      <Box sx={{ p: 2, color: '#0f766e', border: '1px dashed #0f766e' }}>
        <Typography>MUI box sx text</Typography>
      </Box>
    </main>
  );
}
