import { Button } from '@mui/material';
import MuiButton from '@mui/material/Button';

/** MUI вручную: импорт из корня пакета и из подпути. Случай из inspector-1.5-live/mui (Screen-mui). */
export default function ScreenMuiImports() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '48px', alignItems: 'flex-start' }}>
      <h1>E3 MUI by hand</h1>
      <Button variant="contained">Hand root import</Button>
      <MuiButton variant="outlined">Hand subpath import</MuiButton>
    </div>
  );
}
