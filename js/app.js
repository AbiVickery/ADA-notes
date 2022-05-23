FormData.onsubmit = validate;

function validate(e) {
    errorList.innerHTML = '';
    for(let i = 0; i < formItems.length; i++)
    {
        const testItem = formItems[i];
        if(testItem.input.value === '') {
            errorField.style.left = '360px';
            createLink(testItem);
        }
    }

    if(errorList.innerHTML !== '') {
        e.preventDefault();
    }
}

function createLink(testItem) {
    const listItem =
    document.createElement('li');
    const anchor =
    document.createElement('a');

    anchor.textContent = testItem.input.name + ' field is empty: fill in your ' + testItem.input.name + '.';
    anchor.href = '#' + testItem.input.name;
    anchor.onclick = function() {
        testItem.input.focus();
    };
    listItem.appendChild(anchor);
    errorList.appendChild(listItem);
}