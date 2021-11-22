import { Request, Response, Router } from "express";
import { Partner } from "../../../interfaces/partner";
import PartnerController from "../../../controllers/partnerController";
import jsonPartners from "../../../data/partners.json";

let router = Router();

router.get('/',(req: Request, res: Response)=>{
    // const partners: Partner[] = jsonPartners as Partner[];
    var term: string = req.query.term ? req.query.term.toString() : "";
    var range: number = req.query.range ? parseFloat(req.query.range.toString()) : 0;

    var partnerController = new PartnerController();
    var partners = partnerController.search(term, range);

    res.status(200).send(partners);
});

export default router;