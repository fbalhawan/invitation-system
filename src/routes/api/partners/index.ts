import { Request, Response, Router } from "express";
import { Partner } from "../../../interfaces/partner";
import PartnerController from "../../../controllers/partnerController";
import jsonPartners from "../../../data/partners.json";

let router = Router();

router.get('/',(req: Request, res: Response)=>{
    // const partners: Partner[] = jsonPartners as Partner[];
    var searchTerm: string = req.query.q ? req.query.q.toString() : "";
    var partnerController = new PartnerController();
    var partners = partnerController.search(searchTerm);

    res.status(200).send(partners);
});

export default router;