import './Home.css';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    category1: [],
    category2: [],
    category3: []
  });

  const allComponents = useMemo(() => ({
    category1: ['Component 1', 'Component 2', 'Component 3'],
    category2: ['Component 4', 'Component 5', 'Component 6'],
    category3: ['Component 7', 'Component 8', 'Component 9']
  }), []);

  const handlePotentialListClick = useCallback((event) => {
    if (event.target.tagName === 'LI') {
      const selectedComponent = event.target.textContent;
      const selectedCategory = document.getElementById('categorySelect').value;

      setSelectedComponents(prevSelectedComponents => ({
        ...prevSelectedComponents,
        [selectedCategory]: [...prevSelectedComponents[selectedCategory], selectedComponent]
      }));
    }
  }, []);

  const handleSelectedCategoriesClick = useCallback((event) => {
    if (event.target.tagName === 'LI') {
      const deselectedComponent = event.target.textContent;
      const selectedCategory = event.target.closest('.category').getAttribute('data-category');

      setSelectedComponents(prevSelectedComponents => ({
        ...prevSelectedComponents,
        [selectedCategory]: prevSelectedComponents[selectedCategory].filter(component => component !== deselectedComponent)
      }));
    }
  }, []);

  const populatePotentialList = useCallback((categorySelect, potentialList, selectedComponents) => {
    const selectedCategory = categorySelect.value;
    potentialList.innerHTML = '';

    allComponents[selectedCategory].forEach(component => {
      if (!selectedComponents[selectedCategory].includes(component)) {
        const li = document.createElement('li');
        li.textContent = component;
        potentialList.appendChild(li);
      }
    });
  }, [allComponents]);

  useEffect(() => {
    const existingList = document.getElementById('existingList');
    const selectedCategories = document.getElementById('selectedCategories');
    const potentialList = document.getElementById('potentialList');
    const categorySelect = document.getElementById('categorySelect');

    const initialExistingComponents = Array.from(existingList.children).map(li => li.firstChild.textContent);

    populatePotentialList(categorySelect, potentialList, selectedComponents);
    populateSelectedCategories(selectedCategories, selectedComponents);
    resetExistingComponents(existingList, initialExistingComponents);

    categorySelect.addEventListener('change', () => populatePotentialList(categorySelect, potentialList, selectedComponents));
    potentialList.addEventListener('click', handlePotentialListClick);
    selectedCategories.addEventListener('click', handleSelectedCategoriesClick);
    existingList.addEventListener('click', handleExistingListClick);

    return () => {
      categorySelect.removeEventListener('change', () => populatePotentialList(categorySelect, potentialList, selectedComponents));
      potentialList.removeEventListener('click', handlePotentialListClick);
      selectedCategories.removeEventListener('click', handleSelectedCategoriesClick);
      existingList.removeEventListener('click', handleExistingListClick);
    };
  }, [handlePotentialListClick, handleSelectedCategoriesClick, populatePotentialList, selectedComponents]);

  const handleExistingListClick = (event) => {
    if (event.target.classList.contains('remove-button')) {
      const existingComponent = event.target.parentNode;
      existingComponent.remove();
    }
  };

  const populateSelectedCategories = (selectedCategories, selectedComponents) => {
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
  };

  const resetExistingComponents = (existingList, initialExistingComponents) => {
    existingList.innerHTML = '';

    initialExistingComponents.forEach(component => {
      const li = document.createElement('li');
      li.innerHTML = `${component} <button class="remove-button">Remove</button>`;
      existingList.appendChild(li);
    });
  };

  return (
    <div className='divshit'>
      <div className="container">
        <div className="left-section">
          <div className="existing-components">
            <h2>Existing Components</h2>
            <ul id="existingList">
              <li>Existing Component 1 <button className="remove-button">Remove</button></li>
              <li>Existing Component 2 <button className="remove-button">Remove</button></li>
            </ul>
          </div>
          <div className="selected-components">
            <h2>Selected Components</h2>
            <div id="selectedCategories"></div>
          </div>
        </div>
        <div className="right-section">
          <div className="potential-components">
            <h2>Potential Components</h2>
            <select id="categorySelect">
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
            <ul id="potentialList"></ul>
          </div>
          <Link to="/AI">
            <button id="submitButton">Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;