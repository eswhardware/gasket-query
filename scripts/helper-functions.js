const systemsDropdown = document.getElementById('systems-dropdown');
const glassDropdown = document.getElementById('glass-thickness');
const tableBody = document.querySelector('tbody');
const originalTable = tableBody.innerHTML;
const configCheckbox = document.getElementById('tested-checkbox');


function popSystemsDropdown() {
    let systemNames = new Set;
    
    for (let object of data){
        systemNames.add(object.system)
    }
    for (let element of systemNames){
        let option = document.createElement('option');
        option.textContent = `${element}`;
        option.value = element;
        systemsDropdown.appendChild(option);
    }
}

function popGlassThickness(){
    const selectedSystem = systemsDropdown.value;
    let systemObject = [];
    for (let element of data){
        if (element.system === selectedSystem){
            let option = document.createElement('option');
            option.textContent = `${element.glassThickness}`;
            option.value = element.glassThickness;
            glassDropdown.appendChild(option);
            systemObject.push(element)
        }
    }
    return systemObject;
}

function extractSystemObjects(){
    const selectedSystem = systemsDropdown.value;
    let systemObject = [];
    
    for (let element of data){
        if (element.system === selectedSystem){
            systemObject.push(element)
        }
    }
    return systemObject;
}

function popTable(systemObject){
    const sObject = systemObject;

    sObject.forEach(object => {
        let row = document.createElement('tr');
        row.id = object.glassThickness;
        tableBody.appendChild(row);
        if(object.tested === 'TESTED'){
            row.className = 'tested'
        }

        for (let column of Object.keys(object)){
            let tableData = document.createElement('td');
            tableData.textContent = object[column];
            row.appendChild(tableData)
        }        
    })
}

function deleteRows(){    
    tableBody.innerHTML = originalTable;
}

function resetDefault(htmlElement){
    while (htmlElement.length !== 1){
        htmlElement.remove(1)
    }
}
