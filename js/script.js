class Bonus {
    constructor(title,rows,line,priceText) {
        this.title = document.querySelectorAll(title);
        this.rows = document.querySelectorAll(rows);
        this.line = document.querySelectorAll(line);
        this.priceText = document.querySelector(priceText);
    }
    deleteElementsHtml() {
        const th = this;
        if(th.title && th.title.length >= 5 && th.rows.length >= 1 && th.line.length >= 1) {
            th.title.forEach((elm, i) => {
                if(i >= 6) {
                    elm.style.opacity = 0;
                    elm.style.height = 0;
                }
            });
            th.rows.forEach((elm, i) => {
                i >= 1 ? elm.style.marginTop = 0 : '';
            });
            th.line.forEach((elm, i) => {
                i >= 1 ? elm.style.top = '10px' : '';
            });
        }
    }

    parsePrice() {
        Number.prototype.toDivide = function() {
            const int = String(Math.trunc(this));
            if(int.length <= 3) return int;
            let space = 0,
                number = '';
        
            for(let i = int.length - 1; i >= 0; i--) {
                if(space == 3) {
                    number = ' ' + number;
                    space = 0;
                }
                number = int.charAt(i) + number;
                space++;
            }
        
            return number;
        }

        const parseInt = Number(this.priceText.innerText);
        this.priceText.innerText = parseInt.toDivide();

    }
}

const exempBonus = new Bonus(
    '.page-bonus-wrapper__list--title',
    '.page-bonus-wrapper__list--rows',
    '.page-bonus-wrapper__list--line',
    '.page-bonus-wrapper__bonus-int'
);

exempBonus.deleteElementsHtml();
exempBonus.parsePrice();



