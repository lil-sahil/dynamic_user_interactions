import { getDropDownClass,
         getAllUl       
       } from "./dom.js"




const dropDownMenu = (() => {

  // Remove default css styling
  
  // Drop down menu styling
  const basicDropDownMenuStyles = (parentUL) => {

    // Display Flex on child li
    for (const element of parentUL.children) {
      element.style.display = 'flex';
      element.style.flexDirection = 'column'
      element.style.justifyContent = 'center'
      element.style.alignItems = 'center'
    }

    // Parent UL Styling
    // Remove default list styling 
    parentUL.style.listStyle = 'none';

    // Display Flex
    parentUL.style.display = 'flex'

    // Expand to fill the width of the screen
    parentUL.style.justifyContent = 'space-around'

    // Max Width
    parentUL.style.width = '50vw'


    // All children UL
    getAllUl(parentUL).forEach(element =>{
      element.style.listStyle = 'none';
      element.style.padding = '0'
      element.style.margin = '0'
    })
  }  
  
  

  const makeDropDown = (() => {
    // For each add-drop-down class
    getDropDownClass().forEach(dropdownMenu => {
  
      dropdownMenu.childNodes.forEach(element => {

        if( element.nodeName === 'UL'){
          // Add Styling
          basicDropDownMenuStyles(element)
        }
      })

    })
  })()
  
})()
