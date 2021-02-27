var Links = {
    setColor: function(color) {
        var alist = document.querySelectorAll('a'),
            i = 0;
        while(i < alist.length) {
            alist[i].style.color = color;
            i++;
        }
    }
},
    Body = {
        setColor: function(color) {
            document.querySelector('body').style.color = color;
        },
        setBackgroundColor: function(color) {
            document.querySelector('body').style.backgroundColor = color;
        }
    }

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Links.setColor('tan')
        target.style.transition = '0.3s';
        self.value = 'day';
    } else {
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Links.setColor('#eee')
        target.style.transition = '0.3s';
        self.value = 'night';
    }
}