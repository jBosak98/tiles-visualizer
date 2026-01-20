import { component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Floor from "~/components/floor/floor";
import GroutColorPicker from "~/components/grout-color-picker/grout-color-picker";
import GroutPicker from "~/components/grout-picker/grout-picker";
import TilePicker from "~/components/tile-picker/tile-picker";
import OffsetPicker from "~/components/offset-picker/offset-picker";
import RotatePicker from "~/components/rotate-picker/rotate-picker";

export type ImagePreview = {
  url: string;
  name: string;
  size: number;
}

export default component$(() => {
  const groutSize = useSignal(10);
  const groutColor = useSignal('#3b82f6');
  const offset = useSignal(100);
  const offset2 = useSignal(100)
  const rotate = useSignal(false);

  const tileStore = useStore<{ tiles: ImagePreview[] }>({ tiles: [] });
  const shuffledRows = [...Array(40)].map(() => [...tileStore.tiles].sort(() => Math.random() - 0.5))

  return (
    <>
      <div style={{
        display: 'flex',
        'flex-direction': 'row',
        height: '15%',
        'min-height': '150px',
        'justify-content': 'center',
        gap: '10%',
      }}>
        {tileStore.tiles.length === 0 ? <TilePicker store={tileStore} /> : undefined}
        {tileStore.tiles.length !== 0 ? <>
          <GroutPicker groutSize={groutSize} />
          <RotatePicker rotate={rotate} />
          <div style={{ display: 'flex', "flex-direction": "column", justifyContent: "space-around" }}>
            <OffsetPicker offset={offset} />
            <OffsetPicker offset={offset2} />
          </div>
          <GroutColorPicker groutColor={groutColor} />
        </> : undefined}
      </div>

      <Floor
        tilesRows={shuffledRows}
        groutSize={groutSize.value}
        groutColor={groutColor.value}
        offsets={[0, offset.value, offset2.value]}
        rotate={rotate.value}
      />

    </>
  );
});

export const head: DocumentHead = {
  title: "Wizualizer płytek",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
