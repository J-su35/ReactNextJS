function ListRender() {
    // const tasks = ["เบิกงบ", "ซื้อคอม", "test2"];
    const tasks = [
        {
            title: "เบิกงบ",
        },
        {
            title: "ซื้อคอม",
        }
    ]
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.title}>{task.title}</li>
        ))}
      </ul>
    );
  }
  export default ListRender;