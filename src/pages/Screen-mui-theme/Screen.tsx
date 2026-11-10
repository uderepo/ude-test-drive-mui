import { Box, Button, ThemeProvider, Typography, createTheme } from '@mui/material';

/**
 * Чужая форма токенов: тема MUI (createTheme) — значения по пути палитры ('primary.main', 'brand.main') в sx и через color.
 * Редактор тему MUI как источник токенов не объявляет и не читает — экран показывает эту дыру (отчёт TEST-PROJECT-CASE-CATALOG).
 */
const theme = createTheme({
  palette: {
    primary: { main: '#7c3aed' },
    secondary: { main: '#0f766e' },
  },
});

export default function ScreenMuiTheme() {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h1>MUI theme tokens</h1>
        <Button variant="contained" color="primary">Theme primary button</Button>
        <Box sx={{ p: 2, color: 'secondary.main', border: '1px solid', borderColor: 'primary.main' }}>
          <Typography>Box with palette paths</Typography>
        </Box>
        <Typography sx={{ color: 'primary.main' }}>Text primary.main</Typography>
      </main>
    </ThemeProvider>
  );
}
