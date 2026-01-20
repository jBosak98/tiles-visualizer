import { component$ } from "@builder.io/qwik";
import { ImagePreview } from "~/routes";

type Props = {
  tilesRows: ImagePreview[][]
  groutSize: number
  groutColor: string
  offsets: number[]
  rotate: boolean
}

export default component$<Props>(({ tilesRows, groutSize, groutColor, offsets, rotate }) => {
  const tilesSize = tilesRows.flatMap((x) => x || []).length


  if (tilesSize === 0) {
    return <div style={{ display: 'flex', "flex-direction": 'column', alignItems: 'center', height:'50vh', justifyContent:'center' }}>
      <h3>Wgraj grafiki płytek</h3>
      <h5>Pobierz je, na przykład <a href="https://www.tubadzin.pl/produkt/wood-pile-natural-str-plytka-gresowa-194588" target="_blank">tutaj</a></h5>
    </div>
  }

  return <>
    {tilesSize > 0 && (
      <div>
        <div style={{
          display: 'flex',
          'flex-direction': rotate ? 'row' : 'column',
          gap: `${groutSize}px`,
          backgroundColor: groutColor,
          overflowX: 'auto',
          position: 'absolute',
          maxWidth: '150vw',
          minWidth: '130vw',
          maxHeight: '150vh',
          minHeight: '130vh',
          overflow: 'hidden',
          transform: `translateX(-20%)`
        }}>
          {
            tilesRows
              .map((tileRow, index) => <>
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    'flex-direction': rotate ? 'column' : 'row',
                    gap: `${groutSize}px`,
                    transform: `${rotate ? 'translateY' : 'translateX'}(${((rotate ? -1 : 1) * offsets[index % 3])}px)`
                  }}>
                  {tileRow.map((tileImage) =>
                    <div
                      key={tileImage.name}
                      style={{
                        display: 'inline-flex',
                        width: 'fit-content',
                        transform: `rotate(-${rotate ? 0 : 0}deg)`,
                        maxHeight: '600px'
                      }}
                    >
                      <img
                        src={tileImage.url}
                        alt={tileImage.name}
                        style={{
                          objectFit: 'cover',
                          maxWidth: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </div>
                  )}
                </div>
              </>)
          }
        </div>
      </div>
    )}</>
})