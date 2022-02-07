import { getDropDownClass,
         getAllUl     
       } from "./dom.js"




const dropDownMenu = (() => {


  const hidechildren = (parentUL) => {
    // All ul in li to be hidden
    for (const element of parentUL.children) {
      for (const childElement of element.children) {
        if (childElement.nodeName === 'UL'){
          childElement.style.display = 'none'
        }
      }
    }
  }

  const hoverControl = (parentUL) => {
    
    for (const element of parentUL.children) {
      element.addEventListener('mouseover', (e) => {
        for (const element of e.target.children){
          element.style.display = 'block'
        }
        
      })

      element.addEventListener('mouseout', () => {
        hidechildren(parentUL)
      })
    }
  }

  
  // Drop down menu styling
  const DropDownMenuStyles = (parentUL) => {

    // Display Flex on child li
    for (const element of parentUL.children) {
      element.style.display = 'flex';
      element.style.flexDirection = 'column'
      element.style.justifyContent = 'center'
      element.style.alignItems = 'center'
      element.addEventListener('mouseover', (e) => {
        
      })
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
    getAllUl(parentUL).forEach(element => {
      element.style.listStyle = 'none';
      element.style.padding = '0'
      element.style.margin = '0'
    })

    // All ul in li to be hidden
    hidechildren(parentUL)


  }  

  const makeDropDown = (() => {
    // For each add-drop-down class
    getDropDownClass().forEach(dropdownMenu => {
  
      dropdownMenu.childNodes.forEach(element => {

        if( element.nodeName === 'UL'){
          // Add Styling
          DropDownMenuStyles(element)

          // Add Hover Effect
          hoverControl(element)
        }
      })

    })
  })()
  
})()
