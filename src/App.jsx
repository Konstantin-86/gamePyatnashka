import { useState } from "react";

import "./App.css";
function App() {
  const [arr, setArr] = useState([]);
  const [inptValue, setInptValue] = useState(3);
  const [style, setStyle] = useState({ width: 405, height: 400 });

  const startFunc = () => {
    if (inptValue == 3) {
      setStyle({ width: 305, height: 300 });
      const array = ["1", "2", "3", "4", "5", "6", "7", "8", ""];
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setArr(array);
    }
    if (inptValue == 4) {
      setStyle({ width: 405, height: 400 });
      const array = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "",
      ];
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setArr(array);
    }
  };

  const funcClick = (index) => {
    const gridSize = +inptValue;
    const emptyIndex = arr.findIndex((elem) => elem === "");
    function canMove(index, emptyIndex, gridSize) {
      // Рассчитываем координаты выбранной цифры и пустого места
      const tileRow = Math.floor(index / gridSize);
      const tileCol = index % gridSize;
      const emptyRow = Math.floor(emptyIndex / gridSize);
      const emptyCol = emptyIndex % gridSize;

      // Проверяем, можно ли переместить выбранную цифру на свободное место
      return (
        (tileRow === emptyRow && Math.abs(tileCol - emptyCol) === 1) ||
        (tileCol === emptyCol && Math.abs(tileRow - emptyRow) === 1)
      );
    }
    if (canMove(index, emptyIndex, gridSize)) {
      const arr2 = [...arr];
      [arr2[index], arr2[emptyIndex]] = [arr2[emptyIndex], arr2[index]];
      setArr(arr2);
    }
  };

  return (
    <>
      <div className="inner">
        <h3>Выбери режим</h3>
        <div className="inner-select">
          <select
            className="sel"
            value={inptValue}
            onChange={(e) => setInptValue(e.target.value)}
            name="select"
          >
            <option value="3">3 x 3</option>
            <option value="4">4 x 4</option>
          </select>
        </div>

        <button className="startBtn" onClick={startFunc}>
          start
        </button>
        <div className="table" style={style}>
          {arr.map((item, index) => (
            <div
              className={
                item == index + 1
                  ? item == ""
                    ? "table-item-grey"
                    : "table-item-true"
                  : item == ""
                  ? "table-item-grey"
                  : "table-item-false"
              }
              key={index}
              onClick={() => funcClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
