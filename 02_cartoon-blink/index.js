
var blinkInterval = setInterval(function(){
  var blink = (Math.random() * 10000) + 1;

}, 5000);

var blink

var myTimeLine = anime.timeline({
  loop: true,
  direction: 'alternate',
  autoplay: true

})

var eyeMovement = anime({
  targets: '.eye, .mouth',
  translateX: [
    {value: 20, duration: 1200},
  ]
});

var eyeBlink = anime({
  targets: '.eye',
  height: 1,
  marginTop: 100,
  loop: true,
  elasticity: 1000,
//   direction: 'alternate',
  delay: anime.random(2000, 6000),
  duration: 100
})







    var myTimeline = anime.timeline({
        loop: true,
        direction: 'alternate',
        autoplay: true
    })

    myTimeline
    .add({
        targets: '.eye , .mouth',
        translateX: [
            { value: 20, duration: 1200},
            { value: -20, duration: 800},
            { value: 0, duration: 2000}
        ]
    })
    .add({

            targets: '.eye , .mouth',
            translateY: [

                { value: -20, duration: 800},
                { value: 0, duration: 2000}
            ]


    })

/*
    .add({
        targets: '.mouth',
        borderRadius: 1000,
        width: [
        {value: 50, duration: 2000}
        ],
        offset: '-=1000'
    });


    anime({
      targets: '.right-arm, .left-arm',
      rotate: '1turn',
      duration: 8000,
      loop:true,
    });
*/
