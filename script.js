const existingList = document.getElementById('existingList');
const selectedCategories = document.getElementById('selectedCategories');
const potentialList = document.getElementById('potentialList');
const categorySelect = document.getElementById('categorySelect');
const undoButton = document.getElementById('undoButton');
const resetButton = document.getElementById('resetButton');

const allComponents = {
    category1: ['Component 1', 'Component 2', 'Component 3'],
    category2: ['Component 4', 'Component 5', 'Component 6'],
    category3: ['Component 7', 'Component 8', 'Component 9']
};

const selectedComponents = {
    category1: [],
    category2: [],
    category3: []
};

let history = [];

const initialExistingComponents = Array.from(existingList.children).map(li => li.firstChild.textContent);

function populatePotentialList() {
    const selectedCategory = categorySelect.value;
    potentialList.innerHTML = '';

    allComponents[selectedCategory].forEach(component => {
        if (!selectedComponents[selectedCategory].includes(component)) {
            const li = document.createElement('li');
            li.textContent = component;
            potentialList.appendChild(li);
        }
    });
}

function populateSelectedCategories() {
    selectedCategories.innerHTML = '';

    for (const category in selectedComponents) {
        if (selectedComponents[category].length > 0) {
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('category');
            categoryElement.setAttribute('data-category', category);

            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category;
            categoryElement.appendChild(categoryTitle);

            const categoryList = document.createElement('ul');
            selectedComponents[category].forEach(component => {
                const li = document.createElement('li');
                li.textContent = component;
                categoryList.appendChild(li);
            });

            categoryElement.appendChild(categoryList);
            selectedCategories.appendChild(categoryElement);
        }
    }
}

function resetExistingComponents() {
    existingList.innerHTML = '';

    initialExistingComponents.forEach(component => {
        const li = document.createElement('li');
        li.innerHTML = `${component} <button class="remove-button">Remove</button>`;
        existingList.appendChild(li);
    });
}

populatePotentialList();
populateSelectedCategories();

categorySelect.addEventListener('change', populatePotentialList);

potentialList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const selectedComponent = event.target.textContent;
        const selectedCategory = categorySelect.value;

        history.push({ action: 'select', component: selectedComponent, category: selectedCategory });

        selectedComponents[selectedCategory].push(selectedComponent);
        populatePotentialList();
        populateSelectedCategories();
    }
});

selectedCategories.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const deselectedComponent = event.target.textContent;
        const selectedCategory = event.target.closest('.category').getAttribute('data-category');

        history.push({ action: 'deselect', component: deselectedComponent, category: selectedCategory });

        selectedComponents[selectedCategory] = selectedComponents[selectedCategory].filter(component => component !== deselectedComponent);
        populatePotentialList();
        populateSelectedCategories();
    }
});

existingList.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-button')) {
        const existingComponent = event.target.parentNode;
        existingComponent.remove();
    }
});

undoButton.addEventListener('click', function () {
    if (history.length > 0) {
        const lastAction = history.pop();
        if (lastAction.action === 'select') {
            selectedComponents[lastAction.category] = selectedComponents[lastAction.category].filter(component => component !== lastAction.component);
        } else if (lastAction.action === 'deselect') {
            selectedComponents[lastAction.category].push(lastAction.component);
        }
        populatePotentialList();
        populateSelectedCategories();
        resetExistingComponents();
    }
});

resetButton.addEventListener('click', function () {
    selectedComponents.category1 = [];
    selectedComponents.category2 = [];
    selectedComponents.category3 = [];
    history = [];
    populatePotentialList();
    populateSelectedCategories();
    resetExistingComponents();
});