import { Partner } from "../interfaces/partner";
import jsonPartners from "../data/partners.json";

class PartnerController{
    search = (searchTerm: string = "") => {

        const partners: Partner[] = jsonPartners as Partner[];

        //If no search term specified, return all partners
        if(searchTerm === ""){
            return partners;
        }
        else{
            //Search by term
            let result = partners.find((p) => {
                return p.organization.startsWith(searchTerm);
            });
            return result;
        }
        
    }
}

export default PartnerController;