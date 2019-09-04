
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

new Promise((resolve) => {
    removeElements();
    resolve();
}).then(res => {
    window.print();
}) 

