document.addEventListener('DOMContentLoaded', function () {

    const colorArray = ['#E8CCD7', '#CCCCFF', '#BD33A4', '#ED872D', '#29AB87', '#C9A0DC', '#3AA8C1', '#FED85D']

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

    h1.onclick = function () {
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        h1.style.color = rand;
    };

    h2.onclick = function () {
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        h2.style.color = rand;
    };

    h3.onclick = function () {
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        h3.style.color = rand;
    };

    h4.onclick = function () {
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        h4.style.color = rand;
    };

    h5.onclick = function () {
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        h5.style.color = rand;
    };

    h6.onclick = function () {
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        h6.style.color = rand;
    };



    let buttonColor = document.createElement('button');
    buttonColor.innerText = 'R.R. Party Town'
    document.body.appendChild(buttonColor);

    buttonColor.onclick = function () {
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        buttonColor.style.color = rand;
    };

    let buttonIndex = document.createElement('button');
    buttonIndex.innerText = 'Count it!'
    document.body.appendChild(buttonIndex);


    let i = 0;  // i is counter for items in button list below

    buttonIndex.onclick = function () {
        i = (i + 1)
        let listItem = document.createElement('li');
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        // not sure how to get i to increase each click
        listItem.innerText = `This is list item ${i}`;
        listItem.style.color = rand;
        document.body.appendChild(listItem);
    
        //here i need to make this remove an li upon double click
        listItem.addEventListener('dblclick', function (e) {
            const targetItem = e.target;
            targetItem.remove();
        
        })
    };


})

