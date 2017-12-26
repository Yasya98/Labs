var data = [
    10,
    11,
    13,
    15,
    9,
    7,
    10,
    8,
    13,
    12,
    14,
    11,
    10
]

    // 27.190858,
    // 27.079535,
    // 27.163714,
    // 26.976058,
    // 26.551453,
    // 26.310335,
    // 26.098994,
    // 25.854789,
    // 25.693957,
    // 26.521094,
    // 26.862019,
    // 27.155849


var app = document.getElementById('app');
ctx = app.getContext('2d');

ctx.fillStyle = "#ECF0F1"
ctx.fillRect(0, 0, app.width, app.height);

ctx.lineWidth = 1;

ctx.strokeStyle = "#2980B9"

ctx.moveTo(0, app.height - data[0])
for (let i = 1; i < data.length; i++) {
    var x = i * 40;
    var y = app.height - (data[i] * 10)

    console.log(x, y)

    ctx.lineTo(x, y)
    ctx.stroke();
}
