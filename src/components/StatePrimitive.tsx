import { useState } from "react";

// function StatePrimitive() {
//   const [title, setTitle] = useState<string>("-");
//   return (
//     <div>
//         {title}
//         <br />
//       <input value={title} onChange={(event) => setTitle(event.target.value)} />
//     </div>
//   );
// }
// export default StatePrimitive;

function StatePrimitive() {
  const [title, setTitle] = useState<string>("-");
  const [age, setAge] = useState<number>(0);
  const [items, setItems] = useState<number[]>([]);
//   const addItem = () => {
//       // items.push(Math.random())
    
//     //full
//     // const newItems = [...items]
//     // newItems.push(Math.random())
//     // setItems(newItems)

//     //short
//     const newItems = [...items, Math.random()]
//     setItems(newItems)
//   };

  //very short
    const addItem = () => {
        setItems([...items, Math.random()]);
    };
   

    const removeItem = (value: number) => {
        const newItems = items.filter((item) => item !== value)
        setItems(newItems)
    };

  return (
    <div>
      {title}
      <br />
      <div>
        Title:
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        {age * 2} Age:
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(Number(event.target.value))}
        />
      </div>
      <div>
        List{" "}
            {items.map((item) => (
                <p key={item}>
                    {item}
                    <button onClick={() => removeItem(item)}>Delete</button>
                </p>
            ))}
            <button onClick={addItem}>Add item</button>
      </div>
    </div>
  );
}
export default StatePrimitive;
