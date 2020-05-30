import './components/form-interaction'
// import { checkmarkClicked } from './components/form-interaction'
import './components/navigation';
import { getServiceGroups } from './fetch api/GET/services'
import { getBankCountries } from "./fetch api/GET/openBank"
import "./fetch api/GET/serviceDetails"
import "./fetch api/POST/submitServiceForm"
import "./fetch api/POST/submitService"
import "./fetch api/POST/registerUser"



import './fetch api/POST/openBank'
import './components/form-interaction'

import './utils/getLoginAndRegisterData'




export const init = () => {

    // ─── STATIC EVENT FUNCTIONS ─────────────────────────────────────────────────────
    // window.collapedForm = collapedForm
    // window.checkmarkClicked = checkmarkClicked

    // ─── FETCH API ───────────────────────────────────────────────────── 

    getServiceGroups();
    getBankCountries();
    

    if (!document.querySelector('select[name="service-type"]')) {
        getServiceFeatures()
        
    }
    // postServiceId();

}