//Day 1

//method 1
// export default function App() {
//     return <h1>Hello, REACT</h1>;
// }
//method 2
// const App = () => {
//     return <h1>Hello, REACT</h1>;
// }

// export default App;

//next lesson
// const name = "Bas";
// const age = 18;
// const alive = true;
// const App = () => {
//     // return <div>Hello, {"1, 2, 3 " + name}</div>;
//     return <div>Hello,
//         {name}
//         {age}
//         {alive}
//     </div>;
// }

// export default App;

//next lesson
import ObjectRender from "@/components/ObjectRender";
const name = "Bas";

const App = () => {
    return (
        <div>
            <ObjectRender />
            Hello, {"1, 2, 3 " + name}
        </div>
    );
}

export default App;

// import ObjectRender from "@/components/ObjectRender";
// import ListRender from "@/components/ListRender";
// import { Quiz1 } from "@/components/Quiz1";
// import Quiz2 from "@/components/Quiz2";
// import Quiz3 from "@/components/Quiz3";

// const name = "Bas"
// const App = () => {
//     return <div>
//             {/* <Quiz1 />
//             <Quiz2 />
//             <Quiz3 />       */}
//             <ListRender />
//           </div>;
// };

// export default App;

