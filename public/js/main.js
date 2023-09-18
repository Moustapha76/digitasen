function startCount(el){
    let max = el.dataset.goal;
    let count = setInterval(() => {
       el.textContent++;
       if(el.textContent == max){
            clearInterval(count)
       }    
    }, 2000 / stats);
}
let section = document.querySelector('section.section-2');
let stats = document.querySelectorAll('section.section-2 .item .number');
let start = false;

window.addEventListener('scroll',function(e){
    let x = window.scrollY
    let topOffset = section.offsetTop - 400
    if(x > topOffset){
        if(!start){
            stats.forEach(stat => startCount(stat));
        }
        start = true;
    }
})

$(function() {
    var filterList = {
        init: function() {
            // MixItUp plugin
            // http://mixitup.io
            $('.item-grid').mixItUp({
                selectors: {
                    target: '.item',
                    filter: '.filter'
                },
                load: {
                    filter: 'all' // show app tab on first load
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});