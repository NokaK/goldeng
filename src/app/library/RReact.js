import { APIKEY } from "../config/apiToken";


export default class RReact {


    // ─── FETCH JSON FROM API ──────────────────────── //! POST AND GET────────────────────────────────
    static RFetch(apiURL, method, sendObject) {
        let options;
        let jsonObject;



        let headers = {
            // 'Access-Control-Allow-Origin': '*',
            // "mode": "no-cors",    
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        }



        if (method == "POST" || method == "post") {
            if (sendObject) {
                options = {
                    method: 'POST',
                    body: JSON.stringify(sendObject)
                }
            }
        }

        if (method == "GET" || method == "get") {
            if (!sendObject) {
                options = {
                    method: 'GET',
                }
            }
        }

        return fetch(apiURL, options)
            .then(response => {
                return response.json()
            })
            .then(json => {
                jsonObject = json
                return jsonObject;
            })
    }



    //! ─── BUILD A SINGLE ELEMENT FROM A TEMPLATE STRING ──────────────────────────────
    static buildFromTemplate(elementTemplateString) {
        let parse = new DOMParser()

        let template = parse.parseFromString(
            `${elementTemplateString}`
            , "text/html"
        )

        return template.body.firstElementChild
    }




    //! ─── APPEND CREATED ELEMENT  ─────────────────────────────────────────────────────
    static appendCreatedElementToELement(parentElement, elementTemplateString) {
        let parent = document.querySelector(parentElement)
        let child = this.buildFromTemplate(elementTemplateString)
        if (parent) {
            parent.append(child)
        }
    }




    //! ─── CREATE ELEMENT WITH JSON  ─────────────────────────────────────────────────────
    static createElementWithJson(apiURL, elementTemplateString) {

        this.getJSON(apiURL).then(json => {
            // console.log({...json}); 
        });

        let parser = new DOMParser();
    }
}





// module.exports = RReact;
