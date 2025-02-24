// Automatically determine if we're on GitHub Pages or local development
const BASE_URL = location.hostname === 'terryyLi.github.io' 
    ? '/pittsburghlaborhistorytrail' 
    : '';

// Update all asset paths to use the base URL
document.addEventListener('DOMContentLoaded', function() {
    // Update all asset paths that start with /pittsburghlaborhistorytrail/
    const elements = document.querySelectorAll('[src^="/pittsburghlaborhistorytrail/"], [href^="/pittsburghlaborhistorytrail/"]');
    elements.forEach(element => {
        const attr = element.hasAttribute('src') ? 'src' : 'href';
        element[attr] = element[attr].replace('/pittsburghlaborhistorytrail/', BASE_URL + '/');
    });
});
