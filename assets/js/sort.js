document.addEventListener('DOMContentLoaded', () => {
    const sortButton = document.getElementById('sortButton');
    const nameList = document.getElementById('nameList');

    sortButton.addEventListener('click', () => {
        const items = Array.from(nameList.getElementsByTagName('li'));
        items.sort((a, b) => a.textContent.localeCompare(b.textContent));
        nameList.innerHTML = '';
        items.forEach(item => nameList.appendChild(item));
    });
});