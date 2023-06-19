const div = document.getElementById('div');
const generateList = function generateList(arr) {
    const ul = document.createElement('ul');
    arr.forEach(function(el) {
        const li = document.createElement('li');
        let childElement;
        if (Array.isArray(el)) {
            childElement = generateList(el);
        } else {
            childElement = document.createTextNode(el);
        }
        li.appendChild(childElement);
        ul.appendChild(li);
    })
    return ul;
  }
 div.appendChild(generateList([1, 2, 3]));
 div.appendChild(generateList([1, 2, [1.1, 1.2, 1.3], 3]));