import { postServiceGroupId } from "../fetch api/POST/service-setup";
import { getBankCountries } from "../fetch api/GET/openBank";

export let serviceInputsElements = {
    //! services, jurisdictions and 
    typeOfService: document.querySelector("select[name=service-type]"),
    optionCountry: document.querySelector("select[name=jurisdictions]"),
    typeOfInc: document.querySelector("select[name=type_of_inc]"),


}



if (serviceInputsElements.typeOfService) {
    serviceInputsElements.typeOfService.addEventListener("change", e => {
        let service_id = e.target.value.toString();
        let elementClassToAppendTo = e.target.name.toString();
        let optionName = e.target.selectedOptions[0].innerText.trim("")

        let serviceCaption = e.target.options[e.target.selectedIndex].dataset.servicecaption
        console.log(serviceCaption)
        // localStorage.setItem("service_caption", "");
        localStorage.setItem("service_caption", serviceCaption);

        postServiceGroupId(service_id, `.setup-service`, optionName)
    })
}




