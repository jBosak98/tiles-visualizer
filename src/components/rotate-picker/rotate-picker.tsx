import { component$, Signal } from '@builder.io/qwik';


export default component$<{ rotate: Signal<boolean> }>(({ rotate }) => {
  return (
    <div style={{ width: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <label for="slider">Zdjęcia płytki są pionowe? Zaznacz:</label>
      <input
        id="slider"
        type="checkbox"
        bind:checked={rotate}
        style={{ width: '100%', height: '20px' }}
      />
    </div>
  );
});