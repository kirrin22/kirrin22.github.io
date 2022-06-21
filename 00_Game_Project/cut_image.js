function cutImageLoad() {
    imageKR()
    imageEN()
}

function imageKR() {
    //KR
    for(let i = 0; i <= 30; i++)
    {
        cut[i] = loadImage('cut_image/cut'+ i + '.jpg'); //cut1 = first cutScene
    }
}
function imageEN() {
    //EN
    for(let i = 0; i <= 30; i++)
    {
        cutE[i] = loadImage('cut_English/cutE_'+ i +'.jpg');
    }
}