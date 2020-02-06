const getSel = s => document.querySelector(s);

function RandomRGB() {
    return Math.round(1 + Math.random() * (255 - 1))
}

let b = 0; ///// 7 - 67 строки це вкл - викл для стилів тексту
getSel('.bold').onclick = function () {
    if (b == 0) {
        getSel('.textBox').style.fontWeight = 'bold';
        b++
    } else {
        getSel('.textBox').style.fontWeight = '';
        b--
    }
}
let c = 0
getSel('.italic').onclick = function () {
    if (c == 0) {
        getSel('.textBox').style.fontStyle = 'italic';
        c++
    } else {
        getSel('.textBox').style.fontStyle = '';
        c--
    }
}
let u = 0
getSel('.underline').onclick = function () {
    if (u == 0) {
        getSel('.textBox').style.textDecoration = 'underline';
        u++
    } else {
        getSel('.textBox').style.textDecoration = '';
        u--
    }
}
let l = 0
getSel('.lineThrough').onclick = function () {
    if (l == 0) {
        getSel('.textBox').style.textDecoration = 'line-through';
        l++
    } else {
        getSel('.textBox').style.textDecoration = '';
        l--
    }
}

getSel('.textLeft').onclick = function () {
    getSel('.textBox').style.textAlign = 'left';
}
getSel('.textLeft').onclick = function () {
    getSel('.textBox').style.textAlign = 'left';
}
getSel('.textCenter').onclick = function () {
    getSel('.textBox').style.textAlign = 'center';
}
getSel('.textRight').onclick = function () {
    getSel('.textBox').style.textAlign = 'right';
}
getSel('.textSize').onclick = function () {
    getSel('.textBox').style.fontSize = getSel('.textSize').value;
    getSel('.textSize').value = '';
}
getSel('.textFont').onclick = function () {
    getSel('.textBox').style.fontFamily = getSel('.textFont').value;
    getSel('.textFont').value = '';
}


getSel('.textColor').onclick = function () { /// блоки стилів кольору (70-78)
    getSel('.cont1').style.display = 'block';
    getSel('#blur').style.display = 'block';
}

getSel('.textBackgroundColor').onclick = function () {
    getSel('.cont2').style.display = 'block';
    getSel('#blur').style.display = 'block';
}

// (81-160 блоки з фоном для тексту і картики )
let arr1 = ['DeepPink', 'Hotpink', 'LightPink', 'MediumVioletRed', 'PaleVioletRed', 'pink', 'crimson', 'darkRed', 'DarkSalmon', 'FireBrick', 'IndianRed', 'lightCoral', 'LightSalmon', 'IndianRed', 'Maroon', 'Peru', 'RosyBrown', 'saddleBrown', 'SandyBrown', 'black', 'Brown']
const boxColor = document.getElementsByClassName('colorC');

const boxText = document.getElementsByClassName('colorT');
for (let i = 0; i < boxText.length; i++) {
    boxText[i].style.background = arr1[i];
}
for (let i = 0; i < boxText.length; i++) {
    boxText[i].onclick = function () {
        getSel('.textBox').style.color = arr1[i];
        console.log('++');

    }
}

const boxText1 = document.getElementsByClassName('colorT1');
for (let i = 0; i < boxText.length; i++) {
    boxText1[i].style.background = arr1[i];
}
for (let i = 0; i < boxText1.length; i++) {
    boxText1[i].onclick = function () {
        getSel('.textBox').style.background = arr1[i];
        console.log('++');

    }
}
let borders = `border-left: 1px solid gray; border-top: 1px solid gray; border-right: 1px solid gray; border-bottom: 0px;`
let noBorders = `border-left: 0px; border-top: 0px; border-right: 0px; border-bottom: 1px solid gray;`
getSel('.imagesBlockBackground').onclick = function () {
    this.style = borders;
    getSel('.colorBlockBackground').style = noBorders;
    getSel('.filesBlockBackground').style = noBorders;

    getSel('.inputFile').style.display = 'none';
    getSel('.colorWrap2').style.display = 'none';
    getSel('.imagesBlockBackgroundBox').style.display = 'flex';
}
getSel('.filesBlockBackground').onclick = function () {
    this.style = borders;
    getSel('.colorBlockBackground').style = noBorders;
    getSel('.imagesBlockBackground').style = noBorders;

    getSel('.imagesBlockBackgroundBox').style.display = 'none';
    getSel('.colorWrap2').style.display = 'none';
    getSel('.inputFile').style.display = 'flex';

}
getSel('.colorBlockBackground').onclick = function () {
    this.style = borders;
    getSel('.filesBlockBackground').style = noBorders;
    getSel('.imagesBlockBackground').style = noBorders;

    getSel('.inputFile').style.display = 'none';
    getSel('.imagesBlockBackgroundBox').style.display = 'none';
    getSel('.colorWrap2').style.display = 'flex';
}
////////// не зміг побороти завантаження файлу на сторінку this.value видає fakepath.nameXXX 
/////а file[0] працює лиш тоді коли картинки є в самій папці (тому вони і там)
//// вичитав що це все заради безпеки користувача, і щоб це пофіксити треба шукати якісь плагіни, тому перестав шукати рішення далі і залишив як є
getSel('#file-input').onchange = function () { 
    getSel('.textBox').style.background = 'url(' + this.files[0].name + ')';
    console.log(this.value);
    console.log(this.files[0].name);
}

let Wallpapersbox = ['url(wallpapers/1.jpg)', 'url(wallpapers/2.jpg)', 'url(wallpapers/3.jpg)', 'url(wallpapers/4.jpg)', 'url(wallpapers/5.jpg)', 'url(wallpapers/6.png)', 'url(wallpapers/7.jpg)', 'url(wallpapers/8.jpg)', 'url(wallpapers/9.jpg)']

const boxIMG = document.getElementsByClassName('imgBackground');
for (let i = 0; i < boxIMG.length; i++) {
    boxIMG[i].style.background = Wallpapersbox[i];
}
for (let i = 0; i < boxIMG.length; i++) {
    boxIMG[i].onclick = function () {
        getSel('.textBox').style.background = Wallpapersbox[i];
        console.log('++');
    }
}
getSel('#file-input').onclick = function () {
    getSel('.textBox').style.background = this.value
}

///////// (а тут форма входу)
getSel('.signIn').onclick = function () {
    getSel('.signInUnclock').style.display = 'block';
    getSel('.blur').style.display = 'block';
}


getSel('.saveEdit').onclick = function () {
    getSel('.nav').style.display = 'flex';
    getSel('.secondMenu').style.display = 'none';
    getSel('.textBox').style.display = 'block';
    getSel('.boxEdit').style.display = 'none';
    getSel('.textBox').innerHTML = getSel('.textA').value;
}

///////////таблиця і лісти (176-306)
getSel('.createTable').onclick = function () {
    getSel('.createTableBox').style.display = 'flex';
    getSel('.blur').style.display = 'block';
}

getSel('#butCreateTable').onfocus = function () {
    if (getSel('#tr').value == '') {
        getSel('#tr').style = 'box-shadow: 0 0 2px 1px red';
        getSel('#valTable').style.display = 'block';
    } else {
        getSel('#tr').style = 'box-shadow: 0';
    }
    if (getSel('#td').value == '') {
        getSel('#td').style = 'box-shadow: 0 0 2px 1px red';
        getSel('#valTable').style.display = 'block';
    } else {
        getSel('#td').style = 'box-shadow: 0';
    }
    if (getSel('#widthTD').value == '') {
        getSel('#widthTD').style = 'box-shadow: 0 0 2px 1px red';
        getSel('#valTable').style.display = 'block';
    } else {
        getSel('#widthTD').style = 'box-shadow: 0';
    }
    if (getSel('#widthBorder').value == '') {
        getSel('#widthBorder').style = 'box-shadow: 0 0 2px 1px red';
        getSel('#valTable').style.display = 'block';
    } else {
        getSel('#widthBorder').style = 'box-shadow: 0';
    }
    if (getSel('#heightTD').value == '') {
        getSel('#heightTD').style = 'box-shadow: 0 0 2px 1px red';
        getSel('#valTable').style.display = 'block';
    } else {
        getSel('#heightTD').style = 'box-shadow: 0';
    }
    if (getSel('#tr').value != '' && getSel('#td').value != '' && getSel('#widthTD').value != '' && getSel('#widthBorder').value != '' && getSel('#heightTD').value != '') {
        getSel('#textA').value += '<table>';
        for (let i = 0; i < getSel('#tr').value; i++) {
            getSel('#textA').value += `<tr>`;
            for (let j = 0; j < getSel('#td').value; j++) {
                let CoB = getSel('#colorOfBorder').value;
                let ToB = getSel('#typeOfBorder').value;
                getSel('#textA').value += `<td style = "width: ${getSel('#widthTD').value}px; height: ${getSel('#heightTD').value}px; border:${getSel('#widthBorder').value}px ${ToB} ${CoB}"> TD </td>`;
            }
            getSel('#textA').value += '</tr>';
        }
        getSel('#textA').value += '</table>';
        getSel('#createTableBox').style.display = 'none';
        getSel('#blur').style.display = 'none';

        getSel('#tr').value = '';
        getSel('#td').value = '';
        getSel('#widthTD').value = '';
        getSel('#widthBorder').value = '';
        getSel('#heightTD').value = '';
        getSel('#valTable').style.display = 'none';
    }
}

getSel('#resetTable').onclick = function () {
    getSel('#tr').value = '';
    getSel('#td').value = '';
    getSel('#widthTD').value = '';
    getSel('#widthBorder').value = '';
    getSel('#heightTD').value = '';
    getSel('#valTable').style.display = 'none';
}

getSel('#resetOl').onclick = function () {
    getSel('.OlContainerInput').value = '';
}
getSel('#resetUl').onclick = function () {
    getSel('.UlContainerInput').value = '';
}

/////////////////////list

getSel('.createOL').onclick = function () {
    getSel('.OlContainer').style.display = 'block';
    getSel('.blur').style.display = 'block';
}
/////////////////
getSel('#createOl').onclick = function () {
    if (getSel('.OlContainerInput').value == '') {
        getSel('.OlContainerInput').style = 'box-shadow: 0 0 2px 1px red';
        getSel('#valOl').style.display = 'block';
    } else {
        getSel('.OlContainerInput').style = 'box-shadow: 0';
        getSel('#valOl').style.display = 'none';
    }

    if (getSel('.OlContainerInput').value != '') {
        let ST = getSel('#olSelect').value;
        getSel('#textA').value += `<ol style=" list-style-type : ${ST}" >`;
        for (let i = 0; i < getSel('.OlContainerInput').value; i++) {
            getSel('#textA').value += '<li> list </li>';
        }
        getSel('#textA').value += '</ol>';
        getSel('.OlContainer').style.display = 'none';
        getSel('.blur').style.display = 'none';
        getSel('#valOl').style.display = 'none';
    }
}


getSel('.createUL').onclick = function () {
    getSel('.UlContainer').style.display = 'block';
    getSel('.blur').style.display = 'block';
}
getSel('#createUl').onclick = function () {

    if (getSel('.UlContainerInput').value == '') {
        getSel('.UlContainerInput').style = 'box-shadow: 0 0 2px 1px red';
        getSel('#valUl').style.display = 'block';
    } else {
        getSel('.UlContainerInput').style = 'box-shadow: 0';
        getSel('#valUl').style.display = 'none';
    }
    if (getSel('.UlContainerInput').value != '') {
        let SM = getSel('#ulSelect').value;
        getSel('#textA').value += `<ul type ="${SM}" >`;
        for (let i = 0; i < getSel('.UlContainerInput').value; i++) {
            getSel('#textA').value += '<li> list </li>';
        }
        getSel('#textA').value += '</ul>';
        getSel('.UlContainer').style.display = 'none';
        getSel('.blur').style.display = 'none';
        getSel('#valUl').style.display = 'none';
    }
} //// айдішки з першою буквою Х це хрестики закриття вікна
getSel('#x1').onclick = function () {
    getSel('.cont1').style.display = 'none';
    getSel('.blur').style.display = 'none';
}

getSel('#x2').onclick = function () {
    getSel('.cont2').style.display = 'none';
    getSel('.blur').style.display = 'none';
}
getSel('#x3').onclick = function () {
    getSel('.createTableBox').style.display = 'none';
    getSel('.blur').style.display = 'none';
}
getSel('#x4').onclick = function () {
    getSel('.OlContainer').style.display = 'none';
    getSel('.blur').style.display = 'none';
}
getSel('#x5').onclick = function () {
    getSel('.UlContainer').style.display = 'none';
    getSel('.blur').style.display = 'none';
}
getSel('#x6').onclick = function () {
    getSel('.signInUnclock').style.display = 'none';
    getSel('.blur').style.display = 'none';
}


let login = 'admin';
let pass = 'admin';

/// а тут валідація (правда не вийшло як треба зробити перевірку на пустоту і правильність(вірніше вивід повідомлення))
// так що зробив простий варіант(повідомлення тільки на пустоту, а на правильність підсвітка інпут)
getSel('#signInInput1').oninput = function () {
    if (signInInput1.value == login) {
        this.style = 'box-shadow: 0 0 2px 1px green';
        check1 = true;
    } else {
        this.style = 'box-shadow: 0 0 2px 1px red';
        check1 = false;
    }
}
getSel('#signInInput2').oninput = function () {
    if (signInInput2.value == pass) {
        this.style = 'box-shadow: 0 0 2px 1px green';
        check2 = true;
    } else {
        this.style = 'box-shadow: 0 0 2px 1px red';
        check2 = false;
    }
}
let emp = false;
let ch1 = false;
let ch2 = false;

getSel('#signInButton').onfocus = function () {
    if (signInInput1.value == '' || signInInput2.value == '') {
        getSel('#valEmpty').style.display = 'block';
        emp = true;
    }
    if (check1 == true && check2 == true) {
        getSel('.signInUnclock').style.display = 'none';
        getSel('.blur').style.display = 'none';
        getSel('.editBlock').style.display = 'none';

    }
}
getSel('#signInButton').onblur = function () {
    getSel('#valEmpty').style.display = 'none'
}

getSel('.edit').onclick = function () {
    getSel('.nav').style.display = 'none';
    getSel('.secondMenu').style.display = 'flex';
    getSel('.textBox').style.display = 'none';
    getSel('.boxEdit').style.display = 'block';
    getSel('.textA').value = getSel('.textBox').innerHTML;
}



// тут намагався зробити блоки кольору через рандом, але при кліку працював тільки перший блок (в js і jquery) 
// надіюсь на розясненния чому це не працювало і як треба було зробити (блоки були з однаковим класом і різними id)
/* let i = 0
let colorRGB;
while (i != 21){
    colorRGB = 'rgb(' + RandomRGB() + ',' + RandomRGB() + ',' + RandomRGB() + ')';
    getSel(`#t${i}`).style.background = colorRGB;
    getSel(`#t${i}`).value = colorRGB;  
    getSel(`#tt${i}`).style.background = colorRGB;
    getSel(`#tt${i}`).value = colorRGB;  
    i++;
}
getSel('.colorT').onclick = function () {
    getSel('.textBox').style.color = this.value;
    console.log('++');
} */

////// P.S. намагався зробити все чим швидше, так що робив найзрозумілишими для мене способами, тому тут все на js без додавання jquery, регулярок і анімації