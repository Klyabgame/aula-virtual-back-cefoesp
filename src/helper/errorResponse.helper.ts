import { HttpException, InternalServerErrorException } from "@nestjs/common";

export class errorResponse {
    
    
    static errors(error:any,errorMessage:string,exceptionErrors:string){
    console.log(errorMessage, error);

      if(error instanceof HttpException){
        throw error;
      }
      throw new InternalServerErrorException(exceptionErrors);

  }

}