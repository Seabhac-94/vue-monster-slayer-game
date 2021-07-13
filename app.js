function getRandomValue (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(5,12)
            this.monsterHealth -= attackValue;
            this.attackPlayer(); // triggers attackPlayer() once attackMonster is complete
            console.log(this.monsterHealth)
        },
        attackPlayer(){
            const attackValue = getRandomValue(8,15)
            this.playerHealth -= attackValue;
        }
    }

})

app.mount("#game")