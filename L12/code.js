const getSel = s => document.querySelector(s);


getSel('.button1').onclick = function() {
    getSel('.boxStyle').style.display = 'none';
    getSel('.boxEdit').style.display = 'block';
    getSel('#textA').value = getSel('#box1').innerHTML;

}
getSel('.button4').onclick = function() {
    getSel('#box1').innerHTML = getSel('#textA').value;
}

getSel('.button2').onclick = function() {
    getSel('.boxEdit').style.display = 'none';
    getSel('.boxStyle').style.display = 'block';

}
getSel('.button3').onclick = function() {
    getSel('.box1').style.display = 'none';
    getSel('.btns').style.display = 'none';
    getSel('.boxEdit').style.display = 'none';
    getSel('.boxChoose').style.display = 'block';
}

/////                                                               radio
getSel('#r1').onclick = function() {
    getSel('.box1').style.fontSize = '12px';
}
getSel('#r2').onclick = function() {
    getSel('.box1').style.fontSize = '14px';
}
getSel('#r3').onclick = function() {
    getSel('.box1').style.fontSize = '16px';
}
getSel('#r4').onclick = function() {
    getSel('.box1').style.fontSize = '18px';
}
getSel('#r5').onclick = function() {
    getSel('.box1').style.fontSize = '20px';
}


////                                                                font

const fontF = document.forms['fontF'];
fontF.sel.onchange = function() {
    for (let i = 0; i < fontF.sel.options.length; i++) {
        if (fontF.sel.options[i].selected) {
            getSel('.box1').style.fontFamily = fontF.sel.value;
        }
    }
}

////                                                                color 

getSel('.button5').onclick = function() {
    getSel('.colorBlock').style.display = 'none';
    getSel('.colorText').style.display = 'block';
}
getSel('.button6').onclick = function() {
    getSel('.colorText').style.display = 'none';
    getSel('.colorBlock').style.display = 'block';
}

let arr1 = ['lightyellow', 'yellow', 'gold', 'goldenrod', 'orange', 'peru', 'saddlebrown', 'sienna', 'brown']
let arr2 = ['brown', 'sienna', 'saddlebrown', 'peru', 'orange', 'goldenrod', 'gold', 'yellow', 'lightyellow']

const boxColor = document.getElementsByClassName('colorC');
for (let i = 0; i < boxColor.length; i++) {
    boxColor[i].onclick = function() {
        getSel('.box1').style.backgroundColor = arr1[i];
    }
}
const boxText = document.getElementsByClassName('colorT');
for (let i = 0; i < boxText.length; i++) {
    boxText[i].onclick = function() {
        getSel('.box1').style.color = arr2[i];
    }
}


//////                                                              style
getSel('#sBold').onchange = function() {
    if (sBold.checked) {
        getSel('.box1').style.fontWeight = 'bold';
    } else {
        getSel('.box1').style.fontWeight = '';

    }
}
getSel('#sCursive').onchange = function() {
        if (sCursive.checked) {
            getSel('.box1').style.fontStyle = 'italic';
        } else {
            getSel('.box1').style.fontStyle = '';

        }
    }
    ////

getSel('#chooseRad1').onclick = function() {
    getSel('.boxList').style.display = 'none';
    getSel('.boxTable').style.display = 'block';
}
getSel('#chooseRad2').onclick = function() {
    getSel('.boxTable').style.display = 'none';
    getSel('.boxList').style.display = 'block';
}



////                                                                table


getSel('#inputNumList').value
getSel('.button9').onclick = function() {
    getSel('.hol').textContent += '<table>';
    for (let i = 0; i < getSel('#tr').value; i++) {
        getSel('.hol').textContent += `<tr>`;
        for (let j = 0; j < getSel('#td').value; j++) {
            let CoB = colorOfBorderF.colorOfBorder.value;
            let ToB = typeOfBorderF.typeOfBorder.value;
            getSel('.hol').textContent += `<td style = "width: ${getSel('#widthTD').value}px; height: ${getSel('#heightTD').value}px; border:${getSel('#widthBorder').value}px ${ToB} ${CoB}"> TD </td>`;
        }
        getSel('.hol').textContent += '</tr>';
    }
    getSel('.hol').textContent += '</table>';
    getSel('#textA').value += getSel('.holder').textContent
    getSel('.holder').textContent = '';

    getSel('.box1').style.display = 'block';
    getSel('.boxEdit').style.display = 'block';
    getSel('.boxChoose').style.display = 'none';
    getSel('.btns').style.display = 'block';
}

////                                                                list


getSel('.button10').onclick = function() {
    let ST = changeMarksF.changeMarks.value;
    getSel('.hol2').textContent += `<ul type ="${ST}" >`;
    for (let i = 0; i < getSel('#inputNumList').value; i++) {
        getSel('.hol2').textContent += '<li> list </li>';
    }
    getSel('.hol2').textContent += '</ul>';
    getSel('#textA').value += getSel('.holder2').textContent
    getSel('.box1').style.display = 'block';
    getSel('.boxEdit').style.display = 'block';
    getSel('.boxChoose').style.display = 'none';
    getSel('.btns').style.display = 'block';
}