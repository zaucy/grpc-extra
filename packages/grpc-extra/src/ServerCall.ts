import { Call } from "./Call";
import { Metadata } from "./Metadata";

export abstract class ServerCall<RequestType> extends Call<RequestType> {

  /**
   * The request metadata from the client
   */
  metadata: Metadata;

  /**
   * The request message from the client
   */
  request: RequestType;

  /**
   * Indicates if the call has been cancelled
   */
  readonly cancelled: boolean;

  /**
   * Send the initial metadata for the call.
   */
  abstract sendMetadata(responseMetadata: Metadata): void;

  /**
   * @param callback invoked when the call has been cancelled. After this has 
   * been emitted, the call's cancelled property will be set to true. If call is
   * already canceled callback will be invoked immediately.
   */
  abstract onCancelled(callback: () => void);

}
