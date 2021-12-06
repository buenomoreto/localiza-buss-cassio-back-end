import { Request, Response } from "express";
import { PointService } from "../../services/point/PointService";


class PointController{
  async handle(request: Request, response: Response){
    const service = new PointService();
    const points  = await service.execute();

    return response.json(points);
  }
}

export { PointController }