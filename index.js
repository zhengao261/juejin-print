function handleLazyImg() {
    const lazyImgs = document.querySelectorAll('img.lazyload');
    if(lazyImgs.length > 0) {
        lazyImgs.forEach(element => {
            const srcAddress = element.attributes['data-src'].value;
            element.setAttribute('src', srcAddress);
        })
    }
    return true;
}

function removeElements() {
    document.getElementsByClassName('main-header-box')[0] && document.getElementsByClassName('main-header-box')[0].remove();
    document.getElementsByClassName('main-header-box')[0] && document.getElementsByClassName('main-header-box')[0].remove();
    document.getElementsByClassName('author-info-block')[0] && document.getElementsByClassName('author-info-block')[0].remove();
    document.getElementsByClassName('suspension-panel')[0] && document.getElementsByClassName('suspension-panel')[0].remove();
    document.getElementsByClassName('tag-list-box')[0] && document.getElementsByClassName('tag-list-box')[0].remove();
    document.getElementsByClassName('footer-author-block')[0] && document.getElementsByClassName('footer-author-block')[0].remove();
    document.getElementsByClassName('article-banner')[0] && document.getElementsByClassName('article-banner')[0].remove();
    document.getElementsByClassName('comment-list-box')[0] && document.getElementsByClassName('comment-list-box')[0].remove();
    document.getElementsByClassName('recommended-area')[0] && document.getElementsByClassName('recommended-area')[0].remove();
}

handleLazyImg();
removeElements();
setTimeout(() => {
    window.print();
}, 1000)
