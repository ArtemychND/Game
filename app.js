new Vue ({
  el: '#app',
  data: {
    isStarted: false,
    endOfGame: false,
    arrOfHit: [],
    userHealth: {
      width: '200px',
      height: '20px',
      backgroundColor: 'green'
    },
    monsterHealth: {
      width: '200px',
      height: '20px',
      backgroundColor: 'green'
    },
  },
  methods: {
    attack() {
      let widthUser = parseInt(this.userHealth.width);
      let widthMonster = parseInt(this.monsterHealth.width);

        widthUser = widthUser - (Math.random() * 40).toFixed();
        widthMonster = widthMonster - (Math.random() * 40).toFixed();
        this.userHealth.width = widthUser + 'px';
        this.monsterHealth.width = widthMonster + 'px';

        if(widthUser <= 0) {
          alert('You defited!');
          this.userHealth.width = 0 + 'px';
          this.endOfGame = true;
        }
        if(widthMonster <= 0) {
          alert('You win, monster has been defited!');
          this.monsterHealth.width = 0 + 'px';
          this.endOfGame = true;
        }
    },
    hial() {
      let widthUser = parseInt(this.userHealth.width);
      
      if(widthUser <= 150) {
        this.userHealth.width = widthUser + 50 + 'px';
      } else {
        this.userHealth.width = '200px';
      }
    },
    giveUp() {
      this.userHealth.width = 0 + 'px';
      this.monsterHealth.width = 0 + 'px';
    }
  },

  watch: {
    'userHealth.width': function(value, oldValue) {
      if(value === '200px') {
        this.arrOfHit = []
      }

      let width = parseInt(value);
      let oldWidth = parseInt(oldValue);

      if(value < oldValue) {
        this.arrOfHit.push(`Player get damage ${oldWidth - width} points`);
      } else {
        this.arrOfHit.push(`Player hial ${width - oldWidth} points`)
      }
      if(width === 0) {
        let ask = confirm('DO you want continue?');
        if(ask) {
          this.userHealth.width = '200px';
          this.monsterHealth.width = '200px';
          this.endOfGame = false;
        }
      }
    },
    'monsterHealth.width': function(value, oldValue) {
      if(value === '200px') {
        this.arrOfHit = []
      }
      
      let width = parseInt(value);
      let oldWidth = parseInt(oldValue);

      if(value < oldValue) {
        this.arrOfHit.push(`Monster get damage ${oldWidth - width} points`);
      }
      if(width === 0) {
        let ask = confirm('You win, do you want continue?');
        if(ask) {
          this.userHealth.width = '200px';
          this.monsterHealth.width = '200px';
          this.endOfGame = false;
        }
      }
    }
  }
})
