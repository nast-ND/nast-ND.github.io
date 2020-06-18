// var search = document.querySelector('.search-img');
// var search_1 = document.querySelector('.search');
// search.onclick = function() {
//     // alert(1);
//     search_1.classList.add('search-active');
// }
// var close = document.querySelector('.close-search');
// close.onclick = function() {
//     // alert(1);
//     search_1.classList.remove('search-active');
// }

document.querySelector('.search-img').addEventListener('click', () => {
    document.querySelector('.search').classList.add('active');
    document.querySelector('.close-search').classList.add('close-search-active');
})
document.querySelector('.close-search').addEventListener('click', () => {
    document.querySelector('.search').classList.remove('active');
    document.querySelector('.close-search').classList.remove('close-search-active');
})

var item = document.querySelector('.menu');
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-btn').classList.toggle('menu-btn_active');
    document.querySelector('.container').classList.toggle('container-bg');
    // document.querySelector('.menu-btn').classList.toogle('menu-btn-bg-active');
    if(item.classList.contains('menu-active')) {
        item.classList.remove('menu-active');
        document.querySelector('.bg-menu').classList.remove('bg-menu-active');
        document.querySelector('.content-wr').classList.remove('.content-wr-active');
        // document.querySelector('.container').classList.remove('bg-container');
    } else {
        document.querySelector('.content-wr').classList.add('.content-wr-active');
        document.querySelector('.menu').classList.add('menu-active');
        document.querySelector('.bg-menu').classList.add('bg-menu-active');
        document.querySelector('.menu-btn').classList.add('menu-btn-bg-active');
        
    }
})



// $('.menu-btn').on('click', function(e) {
//     e.preventDefault;
//     $(this).toggleClass('menu-btn_active');
//     $('.menu').toggleClass('menu-active');
// });