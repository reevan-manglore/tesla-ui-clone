import React, { useEffect, useState } from 'react'

function useIntersectionRatio(ref, cb,
        {root=null,
        rootMargin="0px",
        threshold = [] }
    ) {
    const [intersectionRatio, setintersectionRatio] = useState(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entry,observer)=>{
            setintersectionRatio(entry[0].intersectionRatio);
        },
            {root,rootMargin,threshold}
        );
        observer.observe(ref.current);
        return ()=>observer.unobserve(ref.current);
    }, []);

    return intersectionRatio;
}

export default useIntersectionRatio