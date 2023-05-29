function init() {
  var tl1 = anime
    .timeline({
      easing: 'easeOutExpo',
      loop: false,
    })
    .add({
      targets: '.txt1, .txt2, .txt3_a, .txt4_a, .txt5_a, .txt6, .txt7_a, .txt8_a, .txt9_a, .txt10_a, .txt11, .txt12_a, .txt13_a, .txt14_a, .txt15_a, .txt16, .txt17',
      opacity: [0, 1],
      duration: 500,
      // easing: 'steps(1)',
      // delay: anime.stagger(150),
    })
    .add({
      targets: '.txt3_a, .txt4_a, .txt8_a, .txt12_a, .txt14_a',
      begin: function() {
        Op1()
        anime({
          targets: '.txt3, .txt4, .txt8, .txt12, .txt14',
          opacity: [0, 1],
          duration: 500,
          easing: 'steps(1)',
          delay: anime.stagger(150),
        })
      }
    })
    
    .add({
      targets: '.txt5_a, .txt7_a, .txt9_a, .txt10_a, .txt13_a, .txt15_a',
      begin: function() {
        Op2()
        anime({
          targets: '.txt5, .txt7, .txt9, .txt10, .txt13, .txt15',
          opacity: [0, 1],
          duration: 500,
          easing: 'steps(1)',
          delay: anime.stagger(150),
        })
      }
    })
    .add({
      targets: '.txt100',
      opacity: [0, 1],
      width: '140px',
      duration: 500, 
      easing: 'steps(10)',
    }, '-=500')
    .add({
      targets: '.group1, .txt100, .txt101, .txt102',
      opacity: [1, 0],
      duration: 500
    }, '+=3200')
    .add({
      targets: '.logo, .elem',
      opacity: [0, 1],
      duration: 500
    }, '-=500')

    function Op1() {
      anime({
        targets: '.txt3_a, .txt4_a, .txt8_a, .txt12_a, .txt14_a',
        opacity: [1, 0],
        duration: 500,
        easing: 'steps(1)',
        delay: anime.stagger(150),
      })
    }

    function Op2() {
      anime({
        targets: '.txt5_a, .txt7_a, .txt9_a, .txt10_a, .txt13_a, .txt15_a',
        opacity: [1, 0],
        duration: 500,
        easing: 'steps(1)',
        delay: anime.stagger(150),
      })
    }
}
