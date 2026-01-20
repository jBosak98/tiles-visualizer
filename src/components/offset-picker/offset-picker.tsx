import { component$, Signal } from '@builder.io/qwik';


export default component$<{ offset: Signal<number> }>(({ offset }) => {
  return (
    <div style={{ width: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <input
        id="slider"
        type="range"
        min="0"
        max="460"
        step="1"
        value={offset.value}
        onInput$={(e) => offset.value = +(e.target as HTMLInputElement).value}
        style={{ width: '100%', height: '20px' }}
      />
      <label for="slider">Przesunięcie: {offset}</label>
    </div>
  );
});