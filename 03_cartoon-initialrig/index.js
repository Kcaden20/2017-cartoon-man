
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
  delay: anime.random(2000, 6000),
  duration: 100
})


var faceTimeLine = anime.timeline({

    loop: true,
    direction: 'alternate',
    autoplay: true
})


faceTimeLine

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

.add({
  targets: '.eye',
  scale: 1.4,
  duration: 1000
})

.add({
  targets: '.mouth',
  scale: 1.4,
  borderRadius: 100,
  width: 50,
  offset: '-=1000',
  complete: function(anim) {
     console.log('completed : ' + anim.completed);
     anime({
      targets: '.mouth',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      delay: 1000
    });

  }
});


anime({
  targets: '.left-hand, .right-hand',
  elasticity: 500,
  rotate: [
    {value: '45deg', duration: 2000},
    {value: '0deg', duration: 2000},
    {value: '-45deg', duration: 2000}
    ],
  delay: 2000,
  loop: true
});

anime({
  targets: '.fingers',
  height: 200,
  easing: 'easeInOutQuart',
  elasticity: 1000,
  duration: 3000,
  loop: true,
  delay: 3000,
  loop: true,
  direction: 'alternate'

});

anime({
  targets: '.right-shoulder',
  rotate: '-45deg',
  loop: true,
  direction: 'alternate',
  duration: 3000

});

var armsTimeLine = anime.timeline({
    loop: true,
    direction: 'alternate',
    autoplay: true
})

armsTimeLine

.add({
  targets: '.right-forearm',
  rotate: '45deg'
})

.add({
  targets: '.left-forearm',
  rotate: '-45deg'
});

anime({
  targets: '.left-thigh',
  rotate: '45deg',
  direction: 'alternate',
  loop: true,
  delay: 1000,
  duration: 2000
});

anime({
  targets: '.left-calf',
  rotate: [
  {value: '-45deg', duration: 2000},
  {value: '0deg', duration: 2000}],
  loop: true,
  elasticity: 0
});

anime({
  targets: '.right-thigh',
  rotate: '-45deg',
  direction: 'alternate',
  delay: 1000,
  loop: true,
  duration: 2000
});

anime({
  targets: '.right-calf',
  rotate: [
  {value: '45deg', duration: 2000},
  {value: '0deg', duration: 2000}],
  loop: true,
  elasticity: 0
});

anime({
  targets: '#left-shoe',
  rotate: '-45deg'
});

anime({
  targets: '#right-shoe',
  rotate: '45deg'
});




