
window.checkboxCheck = () => {
  let Allselected = document.querySelectorAll(".selected");
  let Allcheckmark = document.querySelectorAll(".checkmark");
  let collapseGroupes = document.querySelectorAll('.collapsible-group')

  // const collapse = document.querySelector(".collapse-none");
  if (Allselected || Allcheckmark || collapseGroupes) {

    Allcheckmark.forEach(checkbox => {
      checkbox.addEventListener("click", e => {
        let clickedElementcheckbox = e.target;
        clickedElementcheckbox.classList.toggle("new-checkmark");
        let aditidionColapse = clickedElementcheckbox.parentElement.nextElementSibling;
      });
    });
  } else {
    console.log("Element does not exist");
  }
}

///! PROFILE-PAGE DROPDOWN

const has_sub = document.querySelector(".has-sub");
const sub_item_closed = document.querySelector(".sub-item-closed");
if (has_sub) {
  has_sub.addEventListener("click", () => {
    sub_item_closed.classList.toggle("sub-item-opened");
  });
}

///! MY-PROFILE FROM CHANGE

const pencil = document.querySelector(".edit-c");
const person_edit = document.querySelector(".person-edit");
const person_info = document.querySelector(".person-info");

if (pencil) {
  pencil.addEventListener("click", () => {
    pencil.classList.toggle("close");
    person_edit.classList.toggle("display-block");
    person_info.classList.toggle("display-none");
    console.log("clicked");
  });
}





///! change bigcheckbox to checked
window.checkBigCheckboxOpenCollapsed = (checkBoxElement) => {

  let mustCollapse = checkBoxElement.parentElement.parentElement.parentElement.querySelector('div[name="collapsible-group-collapsed-element"]');
  console.log(mustCollapse)

  if (mustCollapse.classList.contains('collapse')) {
    mustCollapse.classList.remove('collapse')
  } else {
    mustCollapse.classList.add('collapse')
  }


  if (checkBoxElement.classList.contains('new-check-box')) {
    console.log("remove")
    checkBoxElement.classList.remove('new-check-box')
  } else {
    checkBoxElement.classList.add('new-check-box')
  }
}





// get the checkmark site price and add to the local storage site price
window.addRecommendedSitePrice = (checkBox) =>{
  let curendSitePrice = +localStorage.getItem('site-price');
  let checkboxPrice = +checkBox.dataset.recomendedServicesPrice

  if (checkBox.classList.contains('new-checkmark')) {
    let sum = curendSitePrice - checkboxPrice;
    localStorage.setItem('site-price', sum)    
  }else{
    let sum = curendSitePrice + checkboxPrice;
    localStorage.setItem('site-price', sum)
  }

  console.log(localStorage.getItem('site-price'));
  

}