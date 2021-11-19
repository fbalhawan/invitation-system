import { Partner } from "../interfaces/partner";
import jsonPartners from "../data/partners.json";
import DistanceController from "./distanceController";

let partners: Partner[] = [];

class PartnerController {

    constructor() {
        partners = jsonPartners as Partner[];
        if(partners.length > 0){
            partners = this.sortByKey(partners,"organization")
        }
        for(var partner of partners){
            if(partner && partner.offices && partner.offices.length > 0){
                for(var office of partner.offices){
                    let coordinates = office.coordinates.split(",");
                    let longitude: number = Number.parseFloat(coordinates[0]),
                        latitude: number = Number.parseFloat(coordinates[1]);
                    if(process.env.LONGITUDE && process.env.LATITUDE){
                        office.distanceFromSource = DistanceController.calculateDistance(
                                                Number.parseFloat(process.env.LONGITUDE),
                                                Number.parseFloat(process.env.LATITUDE),
                                                longitude,latitude);
                    }
                    
                }
            }

        }
    }

    search = (searchTerm: string = "") => {
        //If no search term specified, return all partners
        if (searchTerm === "") {
            return partners;
        }
        else {
            //Search by term
            let result = partners.filter((p) => {
                return p.organization.toUpperCase().includes(searchTerm.toUpperCase());
            });
            return result;
        }

    }

    sortByKey = (array: any, key: any) => {
        return array.sort(function (a: any, b: any) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
}

export default PartnerController;