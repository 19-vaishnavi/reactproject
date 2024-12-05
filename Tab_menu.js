export default function TabMenu({children, command}){
    return(
        <button onClick={command}>{children}</button>
    );
}