import { useEffect } from "react";

export
const BreakScroll = (declaration) => {
    useEffect(() => {
        const previousOverflowY = document.body.style.overflowY;
        if (declaration) {
            document.body.style.overflowY = 'hidden';
        }
        return () => {
            document.body.style.overflowY = previousOverflowY;
        };
    }, [declaration]);
}