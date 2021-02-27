var Links = {
    setColor: function(color) {
        $('a').css('color', color);
    }
},
    Body = {
        setColor: function(color) {
            $('body').css('color', color);
        },
        setBackgroundColor: function(color) {
            $('body').css('backgroundColor', color);
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