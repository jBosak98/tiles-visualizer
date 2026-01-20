import { component$, Signal } from '@builder.io/qwik';

export default component$<{ groutSize: Signal<number> }>(({ groutSize }) => {
  return (
    <div style={{ width: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <input
        id="slider"
        type="range"
        min="0"
        max="25"
        step="1"
        value={groutSize.value}
        onInput$={(e) => groutSize.value = +(e.target as HTMLInputElement).value}
        style={{ width: '100%', height: '20px' }}
      />
      <label for="slider">Wielkość fugi: {groutSize}</label>
    </div>
  );
});