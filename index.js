const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

const showBuyTickets = () => modal.classList.add('modal-open');
const hidenBuyTickets = () => modal.classList.remove('modal-open');


for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

modalClose.addEventListener('click', hidenBuyTickets);
modal.addEventListener('click', hidenBuyTickets);


// Tính chất nổi bọt của của sự kiện, hành vi nổi bọt.
// - Khi click vào thẻ con thì hành vi đó có thể lắng nghe được tới thẻ cha.
// - nó là một tính chất. cách đóng: stopPropagation();

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})


// Header ------------------------------ In mobile 

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;



mobileMenu.onclick = function () {
    var isHeaderClose = header.clientHeight === headerHeight;
    if (isHeaderClose) {
        header.style.cssText = "height:auto; overflow:visible;"
    } else {
        header.style.cssText = null;
    }
}


//  tu dong ddong khi chon menu ------------------
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        }
        else header.style.cssText = null;
    }
}
