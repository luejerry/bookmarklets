// Get favicon of current page
(()=>{
    const cur = location.href;
    location.href = 'http://www.google.com/s2/favicons?domain_url=' + encodeURIComponent(cur);
})()