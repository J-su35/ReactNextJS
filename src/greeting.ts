//Use interface
// interface GreetingParams {
//     name: string;
//     age: number;
//     format: "Default" | "Table";
//   }

  //Use Type
type GreetingParams = {
    name: string;
    age: number;
    format: "Default" | "Table";
}
  
  function greeting(params: GreetingParams) {
    if (params.format === 'Table' || 'Default') {
      console.table(params);
    } else {
      console.log("error");
    }
  }
  
  greeting({ name: 'Alice', age: 18, format: 'Table' });