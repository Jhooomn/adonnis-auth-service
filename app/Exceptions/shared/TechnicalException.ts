import {Exception} from "@poppinss/utils";
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class TechnicalException extends Exception {
  public async handle(error: this, ctx: HttpContextContract) {
    ctx.response.status(error.status).send(error.message)
  }
}
