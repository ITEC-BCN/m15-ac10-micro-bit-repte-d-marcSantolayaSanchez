let hola = ""
basic.forever(function () {
    if (input.temperature() > 22) {
        hola = "Calor"
        basic.showString("Calor")
    } else {
        hola = "Frio"
        basic.showString("Frio")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
