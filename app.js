document.addEventListener('DOMContentLoaded', function () {

    // here i am defining my variables in a big chuck just for easy reading
    let paragraph = document.createElement('p');
    let div = document.createElement('div');
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let h6 = document.createElement('h6');

    let h1Text = document.createTextNode('This is an h1')
    let h2Text = document.createTextNode('This is an h2')
    let h3Text = document.createTextNode('This is an h3')
    let h4Text = document.createTextNode('This is an h4')
    let h5Text = document.createTextNode('This is an h5')
    let h6Text = document.createTextNode('This is an h6')


    //here i am setting some class names
    paragraph.className = 'some-paragraph';
    div.className = 'header-container';
    h1.className = 'h1';
    h2.className = 'h2';
    h3.className = 'h3';
    h4.className = 'h4';
    h5.className = 'h5';
    h6.className = 'h6';

    //BEGIN THE APPEND
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);

    h1.appendChild(h1Text);
    h2.appendChild(h2Text);
    h3.appendChild(h3Text);
    h4.appendChild(h4Text);
    h5.appendChild(h5Text);
    h6.appendChild(h6Text);
    div.appendChild(paragraph);
    document.body.appendChild(div);

})

// okay here I am trying to set up my color button
const colorArray = ['#E8CCD7', '#CCCCFF', '#BD33A4', '#ED872D', '#29AB87', '#C9A0DC', '#3AA8C1', '#FED85D']

//document.addEventListener('DOMContentLoaded', function () {
//    h1.onclick = function () {
//        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
//        button.style.color = rand;
//    };
//)};



document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    button.innerText = 'R.R. Party Town'
    document.body.appendChild(button);

    button.onclick = function () {
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        button.style.color = rand;
    };
});


//holy shit my button works but apparently that wasnt right but i'm keeping it cause i fkin worked hard on it




//and this is the increaing iteration button
document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    button.innerText = 'Click to add new list item'
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        let buttonParagraph = document.createElement('p')
        p.innerText = 'this is text'

    });
});