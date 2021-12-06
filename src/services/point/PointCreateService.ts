import prismaClient from "../../prisma";

class PointCreateService{
  
  async execute(timer: string, reference: string, latitude: string, longitude: string, price: string){
    const point = await prismaClient.point.create({
      data: {
        timer,
        reference,
        latitude,
        longitude,
        price
      },
    });

    return point;
  }
}

export { PointCreateService }