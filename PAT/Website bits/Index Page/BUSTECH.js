


// Enumerate Semester 1
var Lists = [ 
     document.getElementById("ddlSortField"), 
     document.getElementById("ddlSortField2"), 
     document.getElementById("ddlSortField3"), 
     document.getElementById("ddlSortField4"),
     document.getElementById("ddlSortField5"), 
     document.getElementById("ddlSortField6"), 
     document.getElementById("ddlSortField7")
],
     nbLists = Lists.length;


// Binds change events to each list
for(var iList = 0; iList < nbLists; iList++) {
     Lists[iList].onchange = RemoveItems(iList);
}


function RemoveItems(iList) {
     return function() {
          var value = [];

          // Add the selected items of all previous lists including the one changed
          for(var jList = 0; jList <= iList; jList++)              value.push(Lists[jList].options[Lists[jList].selectedIndex].text);


          // Hide in all succeeding lists these items
          for(var kList = iList + 1; kList < nbLists; kList++)
               HideItems(kList, value);
     }
}


// Hide items selected in previous lists in all next lists
function HideItems(iList, value) {
     var nbOptions = Lists[iList].options.length,
         nbValues = value.length,
         found;

     if(nbValues === 0) return;

     for(var iOption = 0; iOption < nbOptions; iOption++) {
          // Find if this element is present in the previous lists
          found = false;
          for(var iValue = 0; iValue < nbValues; iValue++) {
               if(Lists[iList].options[iOption].text === value[iValue]) {
                    found = true;
                    break;
               }
          }

          // If found, we hide it
         if(found) {
               Lists[iList].options[iOption].style.display = "none";
             Lists[iList].options[iOption].selected = "";
         }
          // else we un-hide it (in case it was previously hidden)
          else 
               Lists[iList].options[iOption].style.display = "";
     }
     }
     
    
     
    
    
     // Enumerate Major 2000
var Lists2 = [ 
     document.getElementById("ddlSortField11"), 
     document.getElementById("ddlSortField14")
],
     nbLists2 = Lists2.length;


// Binds change events to each list
for(var iList2 = 0; iList2 < nbLists2; iList2++) {
     Lists2[iList2].onchange = RemoveItems2(iList2);
}


function RemoveItems2(iList2) {
     return function() {
          var value2 = [];

          // Add the selected items of all previous lists including the one changed
          for(var jList2 = 0; jList2 <= iList2; jList2++)              value2.push(Lists2[jList2].options[Lists2[jList2].selectedIndex].text);


          // Hide in all succeeding lists these items
          for(var kList2 = iList2 + 1; kList2 < nbLists2; kList2++)
               HideItems2(kList2, value2);
     }
}


// Hide items selected in previous lists in all next lists
function HideItems2(iList2, value2) {
     var nbOptions2 = Lists2[iList2].options.length,
         nbValues2 = value2.length,
         found;

     if(nbValues2 === 0) return;

     for(var iOption2 = 0; iOption2 < nbOptions2; iOption2++) {
          // Find if this element is present in the previous lists
          found = false;
          for(var iValue2 = 0; iValue2 < nbValues2; iValue2++) {
               if(Lists2[iList2].options[iOption2].text === value2[iValue2]) {
                    found = true;
                    break;
               }
          }

          // If found, we hide it
         if(found) {
               Lists2[iList2].options[iOption2].style.display = "none";
             Lists2[iList2].options[iOption2].selected = "";
         }
          // else we un-hide it (in case it was previously hidden)
          else 
               Lists2[iList2].options[iOption2].style.display = "";
     }
}


   
     // Enumerate Semester 3
var Lists3 = [ 
     document.getElementById("ddlSortField9"), 
     document.getElementById("ddlSortField10"), 
     document.getElementById("ddlSortField15"), 
     document.getElementById("ddlSortField16")
],
     nbLists3 = Lists3.length;


// Binds change events to each list
for(var iList3 = 0; iList3 < nbLists3; iList3++) {
     Lists3[iList3].onchange = RemoveItems3(iList3);
}


function RemoveItems3(iList3) {
     return function() {
          var value3 = [];

          // Add the selected items of all previous lists including the one changed
          for(var jList3 = 0; jList3 <= iList3; jList3++)              value3.push(Lists3[jList3].options[Lists3[jList3].selectedIndex].text);


          // Hide in all succeeding lists these items
          for(var kList3 = iList3 + 1; kList3 < nbLists3; kList3++)
               HideItems3(kList3, value3);
     }
}


// Hide items selected in previous lists in all next lists
function HideItems3(iList3, value3) {
     var nbOptions3 = Lists3[iList3].options.length,
         nbValues3 = value3.length,
         found;

     if(nbValues3 === 0) return;

     for(var iOption3 = 0; iOption3 < nbOptions3; iOption3++) {
          // Find if this element is present in the previous lists
          found = false;
          for(var iValue3 = 0; iValue3 < nbValues3; iValue3++) {
               if(Lists3[iList3].options[iOption3].text === value3[iValue3]) {
                    found = true;
                    break;
               }
          }

          // If found, we hide it
         if(found) {
               Lists3[iList3].options[iOption3].style.display = "none";
             Lists3[iList3].options[iOption3].selected = "";
         }
          // else we un-hide it (in case it was previously hidden)
          else 
               Lists3[iList3].options[iOption3].style.display = "";
     }
}



     // Enumerate NORMAL ELECTIVE
var Lists4 = [ 
     document.getElementById("ddlSortField17"), 
     document.getElementById("ddlSortField21") 
     
],
     nbLists4 = Lists4.length;


// Binds change events to each list
for(var iList4 = 0; iList4 < nbLists4; iList4++) {
     Lists4[iList4].onchange = RemoveItems4(iList4);
}


function RemoveItems4(iList4) {
     return function() {
          var value4 = [];

          // Add the selected items of all previous lists including the one changed
          for(var jList4 = 0; jList4 <= iList4; jList4++)              value4.push(Lists4[jList4].options[Lists4[jList4].selectedIndex].text);


          // Hide in all succeeding lists these items
          for(var kList4 = iList4 + 1; kList4 < nbLists4; kList4++)
               HideItems4(kList4, value4);
     }
}


// Hide items selected in previous lists in all next lists
function HideItems4(iList4, value4) {
     var nbOptions4 = Lists4[iList4].options.length,
         nbValues4 = value4.length,
         found;

     if(nbValues4 === 0) return;

     for(var iOption4 = 0; iOption4 < nbOptions4; iOption4++) {
          // Find if this element is present in the previous lists
          found = false;
          for(var iValue4 = 0; iValue4 < nbValues4; iValue4++) {
               if(Lists4[iList4].options[iOption4].text === value4[iValue4]) {
                    found = true;
                    break;
               }
          }

          // If found, we hide it
         if(found) {
               Lists4[iList4].options[iOption4].style.display = "none";
             Lists4[iList4].options[iOption4].selected = "";
         }
          // else we un-hide it (in case it was previously hidden)
          else 
               Lists4[iList4].options[iOption4].style.display = "";
     }
}
/*
     // Enumerate Major 3000
var Lists5 = [ 
     document.getElementById("ddlSortField14"), 
     document.getElementById("ddlSortField11")
     
],
     nbLists5 = Lists5.length;


// Binds change events to each list
for(var iList5 = 0; iList5 < nbLists5; iList5++) {
     Lists5[iList5].onchange = RemoveItems5(iList5);
}


function RemoveItems5(iList5) {
     return function() {
          var value5 = [];

          // Add the selected items of all previous lists including the one changed
          for(var jList5 = 0; jList5 <= iList5; jList5++)              value5.push(Lists5[jList5].options[Lists5[jList5].selectedIndex].text);


          // Hide in all succeeding lists these items
          for(var kList5 = iList5 + 1; kList5 < nbLists5; kList5++)
               HideItems5(kList5, value5);
     }
}


// Hide items selected in previous lists in all next lists
function HideItems5(iList5, value5) {
     var nbOptions5 = Lists5[iList5].options.length,
         nbValues5 = value5.length,
         found;

     if(nbValues5 === 0) return;

     for(var iOption5 = 0; iOption5 < nbOptions5; iOption5++) {
          // Find if this element is present in the previous lists
          found = false;
          for(var iValue5 = 0; iValue5 < nbValues5; iValue5++) {
               if(Lists5[iList5].options[iOption5].text === value5[iValue5]) {
                    found = true;
                    break;
               }
          }

          // If found, we hide it
         if(found) {
               Lists5[iList5].options[iOption5].style.display = "none";
             Lists5[iList5].options[iOption5].selected = "";
         }
          // else we un-hide it (in case it was previously hidden)
          else 
               Lists5[iList5].options[iOption5].style.display = "";
     }
}
*/
     // Enumerate Elective
var Lists6 = [ 
 

     document.getElementById("ddlSortField17"), 
         document.getElementById("ddlSortField18"), 
     document.getElementById("ddlSortField21"),
      document.getElementById("ddlSortField22")
       document.getElementById("ddlSortField23")
],
     nbLists6 = Lists6.length;


// Binds change events to each list
for(var iList6 = 0; iList6 < nbLists6; iList6++) {
     Lists6[iList6].onchange = RemoveItems6(iList6);
}


function RemoveItems6(iList6) {
     return function() {
          var value6 = [];

          // Add the selected items of all previous lists including the one changed
          for(var jList6 = 0; jList6 <= iList6; jList6++)              value6.push(Lists6[jList6].options[Lists6[jList6].selectedIndex].text);


          // Hide in all succeeding lists these items
          for(var kList6 = iList6 + 1; kList6 < nbLists6; kList6++)
               HideItems6(kList6, value6);
     }
}


// Hide items selected in previous lists in all next lists
function HideItems6(iList6, value6) {
     var nbOptions6 = Lists6[iList6].options.length,
         nbValues6 = value6.length,
         found;

     if(nbValues6 === 0) return;

     for(var iOption6 = 0; iOption6 < nbOptions6; iOption6++) {
          // Find if this element is present in the previous lists
          found = false;
          for(var iValue6 = 0; iValue6 < nbValues6; iValue6++) {
               if(Lists6[iList6].options[iOption6].text === value6[iValue6]) {
                    found = true;
                    break;
               }
          }

          // If found, we hide it
         if(found) {
               Lists6[iList6].options[iOption6].style.display = "none";
             Lists6[iList6].options[iOption6].selected = "";
         }
          // else we un-hide it (in case it was previously hidden)
          else 
               Lists6[iList6].options[iOption6].style.display = "";
     }
}
