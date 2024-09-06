function Parent() {
    const title = "Monitor";
    return <Child text ={title} num={1} />;
}

function Child(props: { text: string; num: number }) {
    return <div>{props.num} </div>;
}

export default Parent;