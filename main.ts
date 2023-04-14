input.onButtonPressed(Button.A, function () {
    on = 255
    for (let index = 0; index < 2; index++) {
        music.playMelody("D D F F D D F F ", 120)
        music.playMelody("D D C5 B A A G - ", 120)
    }
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    on = on
    on += -10
    basic.pause(300)
})
let on = 0
on = 255
