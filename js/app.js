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