systemsDropdown.addEventListener('change', () => {
    resetDefault(glassDropdown)
    popGlassThickness()
    const systemObject = extractSystemObjects()
    deleteRows()
    popTable(systemObject)
    
})

glassDropdown.addEventListener('change', () => {
    const thicknessValue = glassDropdown.value;
    console.log(`.${thicknessValue}`)
    const tableRow = document.getElementById(`${thicknessValue}`);

    tableRow.style.backgroundColor = 'rgb(192,249,251)'
})

configCheckbox.addEventListener('change', () => {
    const selectedRow = document.querySelectorAll('.tested');
    if (configCheckbox.checked){      
        selectedRow.forEach(row => {
            row.style.backgroundColor = 'rgb(155,255,147)';
        })        
    }
    else {
        selectedRow.forEach(row => {
            row.style.backgroundColor = 'rgb(255,255,255)';
        })
    }
})

