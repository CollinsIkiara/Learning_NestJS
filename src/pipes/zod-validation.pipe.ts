import { ArgumentMetadata, BadRequestException, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import errors from "../config/errors.config.js";

@Injectable()
export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: any) {}

    transform(value: any, metadata: ArgumentMetadata) {
        try {
            if (metadata.type === 'query') {
                const { error } = this.schema.query.validate(value);
                if (error) throw new Error(error);
            } else if (metadata.type === 'body') {
              const { error } = this.schema.body.validate(value);
              if (error) throw new Error(error); 
            }
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            } else {
                console.log(e);
            }
            throw new BadRequestException(errors.validationFailed);
        }
        return value;
    }
}