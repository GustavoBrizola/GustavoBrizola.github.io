/**
 * 
 * @param {*} props 
 * @returns 
 */
export default
function List(props)
{
    const Component = props.Type || 'a';

    return (
        <Component 
            className={props.ClassName}
        >
            {/* Check if Info is an array, then map through it */}
            {Array.isArray(props.Info) 
                ? props.Info.map((item, index) => <span key={index}>{item}</span>) 
                : (props.Info && <span>{props.Info}</span>)
            }
        </Component>
    );
}