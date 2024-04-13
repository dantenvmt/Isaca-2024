import './Home.css';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    Reliability: [],
    Facilities: [],
    Interface: []
  });

  const allComponents = useMemo(() => ({
    Reliability: ['MTBF: > 20,000hrs', 'MTTR: < 2hrs', 'Uptime: 98%'],
    Facilities: ['Chiller Fluid: 20°C @ > 1.7 GPM, 60 PSIG', 'Vacuum: 17 in-Hg min @ 1.5 SCFM', 'CDA: 60-90 PSIG, 1 SCFM'],
    Interface: ['Standard hardware BOLTS interface.', 'Custom hardware interfaces available.']
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
        <h1 className="title">Manufacturing Intelligent: Design Optimization</h1>
        <div className="content">
          <div className="left-section">
            <h2>Current Specification for Wafer Heating & Cooling Stations</h2>
            <div className="existing-components">
              <ul id="existingList">
                <li>Front side: &lt; 1 @ 0.1 µm, PWP<button className="remove-button">Remove</button></li>
                <li>Backside: &lt; 1,400 @ 0.2 µm, PWP<button className="remove-button">Remove</button></li>
              </ul>
            </div>
          </div>
          <div className="middle-section">
            <h2>Selected Specification</h2>
            <div className="selected-components">
              <div id="selectedCategories"></div>
            </div>
          </div>
          <div className="right-section">
            <h2>New Specification</h2>
            <div className="potential-components">
              <select id="categorySelect">
                <option value="Reliability">Reliability</option>
                <option value="Facilities">Facilities</option>
                <option value="Interface">Interface</option>
              </select>
              <ul id="potentialList"></ul>
            </div>
            <Link to="/AI">
              <button id="submitButton">Verify New Specification</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;