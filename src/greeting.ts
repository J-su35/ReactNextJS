interface GreetingParams {
    name: string;
    age: number;
    format: "Default" | "Table";
  }
  
  function greeting(params: GreetingParams) {
    if (params.format === 'Table') {
      console.table(params);
    } else {
      console.log("error");
    }
  }
  
  greeting({ name: 'Alice', age: 18, format: 'Table' });