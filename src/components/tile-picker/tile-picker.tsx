import { component$, $ } from '@builder.io/qwik';
import { ImagePreview } from '~/routes';

type Props = {
  store: {
    tiles: ImagePreview[]
  }
}

export default component$<Props>(({ store }) => {

  const handleFiles = $(async (event: Event) => {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files || []).slice(0, 10);

    store.tiles = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      size: 0,
    }));
  });

  return (
    <div style={{ maxWidth: '800px', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap:'5px' }}>
      <label for="fileInput">Wybierz pliki</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange$={handleFiles}
      
      />


    </div>
  );
});