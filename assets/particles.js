document.addEventListener('DOMContentLoaded', function(){

    particles();

    function particles(){
        var width, height, largeHeader, canvas, ctx, circles, animateHeader = true;

        initHeader();

        function initHeader(){
            canvas = document.getElementById('particles');
            ctx = canvas.getContext('2d');

            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width;
            canvas.height = height;

            // create particles
            circles = [];
            for(var x = 0; x < width * .5; x++){
                var c = new Circle();
                circles.push(c);
            };
            animate();
        };

        function animate(){
            if(animateHeader){
                ctx.clearRect(0, 0, width, height);
                for(var i in circles){
                    circles[i].draw();
                };
            };
            requestAnimationFrame(animate);
        };

        // Canvas manipulation
        function Circle(){
            var _this = this;

            // Constructor
            (function(){
                _this.pos = {};
                init();
            })();

            function init(){
                _this.pos.x = Math.random() * width;
                _this.pos.y = height + Math.random() * 100;
                _this.alpha = .1 + Math.random() * .3;
                _this.scale = .1 + Math.random() * .3;
                _this.velocity = Math.random();
            };

            this.draw = function(){
                if(_this.alpha <= 0){
                    init();
                };
                _this.pos.y -= _this.velocity;
                _this.alpha -= .0005;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(255, 255, 255, ' + _this.alpha + ')';
                ctx.fill();
            };
        };
    };

    window.addEventListener('resize',function(){
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function(){
            particles();
        }, 500);
    });
    
    window.addEventListener('orientationchange',function(){
        particles();
    });
});