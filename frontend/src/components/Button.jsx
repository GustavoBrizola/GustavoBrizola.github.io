/**
 * Provides dinamic component and abstraction
 * to create a button
 * @param {*} props 
 * @returns 
 */
export default
function Button(props)
{
    // Component determines which HTML element is
    const Component = props.Type;
    return (
        <Component
            className={props.ClassName} 
            href={props.Href}
            target={props.Target}
            rel={props.Rel}
        >
            {/* If props.Image won't be defined, won't render none image */}
            {props.Image && 
            (
                <><img
                    className={props.ClassImage}
                    src={props.Image}
                    alt={props.ImageAlt} 
                />
                <div className={props.VerticalDiviser}/></>
            )}
            
            {props.Text}
        </Component>
    );
}