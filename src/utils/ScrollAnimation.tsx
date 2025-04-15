import React, { useEffect, useRef } from 'react';


export function ScrollAnimation() {
    const hiddenElementsRef = useRef<NodeListOf<Element> | null>(null);

    useEffect(() => {
        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        // Query the elements you want to observe
        hiddenElementsRef.current = document.querySelectorAll('.scroll_animation');

        // Start observing the elements
        if (hiddenElementsRef.current) {
            hiddenElementsRef.current.forEach((el) => observer.observe(el));
        }

        // Cleanup observer on component unmount
        return () => {
            if (hiddenElementsRef.current) {
                hiddenElementsRef.current.forEach((el) => observer.unobserve(el));
            }
        };
    }, [])  
}
