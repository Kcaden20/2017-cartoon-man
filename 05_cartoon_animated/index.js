var eyeBlink = anime({
  targets: '.eye',
  height: 1,
  marginTop: 100,
  loop: true,
  elasticity: 1000,
  delay: anime.random(2000, 6000),
  duration: 100
});

var shoulderMove = anime({
  targets: '.right-shoulder',
  rotate: '-135deg',
  duration: 2000,
  scaleX: -1,
  begin: function(anim){
var elbowBend = anime({
    targets: '.right-forearm',
    rotate: '135deg',
    complete: function(anim){

      var handWave = anime({
        targets: '.right-hand',
        rotate: [
          {value: '30deg', duration: 1000},
          {value: '-90deg', duration: 1000}
        ],
        complete: function(anim){

          var mouthO = anime({
            targets: '.mouth',
            width: 50,
            height: 50,
            borderRadius: 100,
            complete: function(anim){

              var headRotate = anime({

                targets: '.head',
                rotate: [
                  {value: '45deg', duration: 2000},
                  {value: '-45deg', duration: 2000},
                  {value: '0deg', duration: 1000}
                ],
                complete: function(anim){
                  var straightenElbow = anime({
                    targets: '.right-forearm',
                    rotate: '0deg',
                    begin: function(anim){
                        var leftArmOut = anime({
                          targets: '.left-shoulder',
                          rotate: '45deg',
                          begin: function(anim){
                            var leftForearmRotate = anime({
                              targets: '.left-hand',
                              scaleX: -1
                            })
                          }
                      })

                        var leftLegOut = anime({
                          targets: '.left-leg',
                          rotate: '30deg'
                        })

                        var rightLegOut = anime({
                          targets: '.right-leg',
                          rotate: '-30deg',
                          begin: function(anim){
                            var leftShoeturn = anime({
                              targets: '#left-shoe',
                              rotate: '-30deg'
                            })

                            var rightShoeTurn = anime({
                              targets: '#right-shoe',
                              rotate: '30deg'
                            })
                          }

                        })
                    }
                  })
                }
              })

              var shrug = anime({
                targets: '.left-arm',
                translateY: [
                  {value: -50, duration: 250},
                  {value: 0, duration: 250},
                  {value: -50, duration: 250},
                  {value: 0, duration: 250},
                  {value: -50, duration: 250},
                  {value: 0, duration: 250},
                  {value: -50, duration: 250},
                  {value: 0, duration: 250}
                ],
                easing:'easeOutQuart'

              })

              var eyesPop = anime({
                targets: '.eyes',
                scale: [
                  {value: 2 , duration: 1000},
                  {value: 1, duration: 1000}
                ]

              })
            }
          })
        }
      })
    }
  })
}
});
