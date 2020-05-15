window.addEventListener('load', () => {

    initCheckFont();   

    let resume = document.querySelector('.resume');

    if (isFontAvailable('Josefin Sans')) {
        resume.classList.remove('sans-serif'); 
    } else {
        resume.classList.add('sans-serif'); 
    }
    
    if (isFontAvailable('Georgia')) {
        resume.classList.remove('sans-serif-p'); 
    } else {
        resume.classList.add('sans-serif-p'); 
    }
});

/**
 * Checks if a font is available to be used on a web page.
 * @license MIT
 * @copyright Sam Clarke 2013
 * @author Sam Clarke <sam@samclarke.com>
 */
function initCheckFont() {
    let width;
    let body = document.body;

    let container = document.createElement('span');
    container.innerHTML = Array(100).join('wi');
    container.style.cssText = [
        'position:absolute',
        'width:auto',
        'font-size:128px',
        'left:-99999px'
    ].join(' !important;');    

    let getWidth = function (fontFamily) {
        container.style.fontFamily = fontFamily;
        body.appendChild(container);
        width = container.clientWidth;
        body.removeChild(container);
        return width;
    };

    // Pre compute the widths of sans-serif to improve performance.    
    let sansWidth = getWidth('sans-serif');

    window.isFontAvailable = function (font) {
        console.log('font =', font);
        return sansWidth !== getWidth(font + ',sans-serif');
    };
}
