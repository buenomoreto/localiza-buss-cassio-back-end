import { Request, Response } from "express";
import { PointCreateService } from "../../services/point/PointCreateService";


class PointCreateController{

  async handle(request: Request, response: Response){
    const service = new PointCreateService();
    const {
      timer,
      reference,
      latitude,
      longitude,
      price
    } = request.body;

    const point = await service.execute(timer,
      reference,
      latitude,
      longitude,
      price);

    return response.json(point);
  }
}

export { PointCreateController }