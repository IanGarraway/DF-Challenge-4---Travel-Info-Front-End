



function isMobile(innerWidth, scrWidth) {
    const minWidth = 768;

    return innerWidth < minWidth || scrWidth < minWidth;    
}

export default isMobile;