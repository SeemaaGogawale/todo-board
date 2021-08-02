
function checkBoxClick(id)
{

	
var activeList = document.getElementById(id).parentElement.parentElement;
var checkBox = document.getElementById(id);

  
  
  checkBox.checked = true;
  activeList.classList.add('active');
  activeList.style.border="2px solid blue"

}



function onTaskListClick(id) {
	
      var activeCheckBox = document.getElementById(id).childNodes[1].childNodes[1];
      console.log('child node', activeCheckBox);
  var activeList = document.getElementById(id);
  activeCheckBox.checked = false;

      activeList.classList.remove('active');
      activeList.style.border="none"
}