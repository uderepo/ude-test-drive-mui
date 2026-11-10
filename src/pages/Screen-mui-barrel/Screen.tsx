import { Card } from '../../components/own';
import * as UI from '../../components/own';

/** Свои компоненты через «сборник» (export *) и пространство имён; своя Button с именем как у MUI. Случай из inspector-1.5-live/mui (Screen-barrel). */
export default function ScreenMuiBarrel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '48px' }}>
      <h1>E2 barrel</h1>
      <Card title="Barrel named card" />
      <UI.Card title="Namespace card" />
      <UI.Button text="Namespace own button" />
    </div>
  );
}
