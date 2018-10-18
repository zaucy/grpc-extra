import { ServerCall } from "./ServerCall";
import { ServiceError } from "./ServiceError";
import { Metadata } from "./Metadata";
import { WriteFlags } from "./WriteFlags";

export abstract class ServerUnaryCall<RequestType, ResponseType> extends ServerCall<RequestType> {

  /**
   * 
   */
  abstract sendUnaryData
    ( error: ServiceError
    );

  /**
   * 
   */
  abstract sendUnaryData
    ( error:        null
    , value:        ResponseType
    , trailer?:     Metadata
    , writeFlags?:  WriteFlags
    );

}
