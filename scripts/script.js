systemsDropdown.addEventListener('change', () => {
    resetDefault(glassDropdown)
    popGlassThickness()
    const systemObject = extractSystemObjects()
    deleteRows()
    popTable(systemObject)
    
})

glassDropdown.addEventListener('change', () => {
    const thicknessValue = glassDropdown.value;
    const systemObject = extractSystemObjects()
    systemObject.forEach(object => {
        if (object.glassThickness === thicknessValue){
            deleteRows()
            popTable([object])
        }
    })
    // console.log(`.${thicknessValue}`)
    // const tableRow = document.getElementById(`${thicknessValue}`);

    // tableRow.style.backgroundColor = 'rgb(192,249,251)'
})

configCheckbox.addEventListener('change', () => {
    const systemObject = extractSystemObjects()
    const testedObject = []
    deleteRows()
    systemObject.forEach(object => {
        if (object.tested === '✓'){
            testedObject.push(object)
        }
    })
    if(configCheckbox.checked){
        popTable(testedObject);
    }
    else {
        popTable(systemObject)
    }
})

