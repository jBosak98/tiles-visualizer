import { component$, Signal } from '@builder.io/qwik';

const colors = [
  { color: '#596476', id: 61 },
  { color: '#cecccf', id: 110 },
  { color: '#807f7b', id: 113 },
  { color: '#948c7f', id: 116 },
  { color: '#e6ddcc', id: 130 },
  { color: '#b7a28f', id: 133 },
  { color: '#786257', id: 136 },
  { color: '#c27557', id: 140 },
  { color: '#785247', id: 143 },
  { color: '#59504b', id: 149 },
  { color: '#ebccba', id: 160 },
  { color: '#b8c3d7', id: 170 },
  { color: '#d7e2da', id: 180 },
  { color: '#ddc4ae', id: 258 },

  { color: '#ffffff', id: 100 },
  { color: '#e9eaec', id: 111 },
  { color: '#4f5259', id: 114 },
  { color: '#645f63', id: 119 },
  { color: '#f1e0cc', id: 131 },
  { color: '#a18b7d', id: 134 },
  { color: '#cec1ae', id: 137 },
  { color: '#dea26c', id: 141 },
  { color: '#654342', id: 144 },
  { color: '#edd56b', id: 150 },
  { color: '#c88185', id: 161 },
  { color: '#227e89', id: 171 },
  { color: '#94bd93', id: 181 },
  { color: '#6e7263', id: 260 },


  { color: '#dbdbd9', id: 103 },
  { color: '#9d9ca1', id: 112 },
  { color: '#9c9a8d', id: 115 },
  { color: '#000000', id: 120 },
  { color: '#e0cfb5', id: 132 },
  { color: '#a8846c', id: 135 },
  { color: '#caa087', id: 139 },
  { color: '#906a5f', id: 142 },
  { color: '#ba563f', id: 145 },
  { color: '#8a6b59', id: 152 },
  { color: '#9f89af', id: 162 },
  { color: '#37619b', id: 172 },
  { color: '#96d1cd', id: 182 },
]

export default component$<{ groutColor: Signal<string> }>(({ groutColor }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <label>
        <p>Kolor fugi mapei:</p>
        <input
          type="color"
          value={groutColor.value}
          onInput$={(e) => groutColor.value = (e.target as HTMLInputElement).value}
        />
        <span>{groutColor}</span>
      </label>
      <select
        id="color-select"
        bind:value={groutColor}
      >
        {colors.map(({ color, id }) => (
          <option value={color} key={id}>
            {`${id}`}
          </option>
        ))}
      </select>
    </div>
  );
});