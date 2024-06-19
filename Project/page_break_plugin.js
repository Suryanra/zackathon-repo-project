window.addEventListener("DOMContentLoaded", () => {
    const frWrapper = document.querySelector('.fr-wrapper');
    const frElement = document.querySelector('.fr-element');

// const newDiv = document.createElement()
    console.log(frElement.getBoundingClientRect().height);
    const newDiv = document.createElement('div');
    frElement.appendChild(newDiv);
    newDiv.style.width = '100%';
    frElement.style.maxHeight = 100 + 'px'
    newDiv.style.backgroundColor = 'red';
    newDiv.style.color = 'white';
    if ('ResizeObserver' in window) {
        // Create a new ResizeObserver instance
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === frElement) {
                    console.log(`Height of .fr-element: ${entry.contentRect.height}px`);
                    let height = entry.contentRect.height;
                    if (height === 317.5) {
                        console.log(frElement.innerHTML);
                    }
                }
            }
        });

        // Start observing the .fr-element
        resizeObserver.observe(frElement);
    } else {
        console.warn('ResizeObserver is not supported in your browser.');
    }

});

