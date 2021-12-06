import prismaClient from "../../prisma";

class PointService{
  async execute(){
    const points = await prismaClient.point.findMany();
    return points;
  }
}

export { PointService }