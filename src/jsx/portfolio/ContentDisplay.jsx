import React, {useState, useRef, useLayoutEffect, useEffect} from "react";

export
const SectionDisplay = ({PageMap, SetActiveSection, SetBurguerMenu}) => {

    const [sectionCount, setSectionCount] = useState(6);

    // const elementRef = useRef(null);
    // const [totalWidth, setTotalWidth] = useState(0);
    // useLayoutEffect(() => {
    //     if(elementRef.current) {setTotalWidth(elementRef.current.clientWidth);}
    // }, []);

    // useEffect(() => {
    //     // It only updates by reloading the page
    //     setSectionCount(Math.floor(window.innerWidth/totalWidth))
    // },[sectionCount]);

    return (
        <>
        {Object.entries(PageMap).slice(0, sectionCount).map(([key, value]) => (
            <a className = 'nav-link'key={key} href={value.label} onClick={(e) => { e.preventDefault(); SetActiveSection(key); SetBurguerMenu(false); }}>
                {value.icon && <img src={value.icon} alt={null} style={{width: '18px'}}/>}
                {value.label && <span>{value.label}</span>}
            </a>
        ))}
    </>
    )
}

export
const ContentDisplay = ({PageMap, ActiveSection }) => {
    return (<>{PageMap[ActiveSection]?.component || <></>}</>)
}

