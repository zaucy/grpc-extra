import { Call } from "./Call";
import { Metadata } from "./Metadata";
import { StatusObject } from "./StatusObject";

export abstract class ClientCall<T> extends Call<T> {
    /**
   * Cancel the ongoing call. Results in the call ending with a CANCELLED 
   * status, unless it has already ended with some other status.
   */
  abstract cancel(): void;

  /**
   * @param callback Invoked when initial response metadata sent by the server. 
   * If the metadata is already sent the callback is invoked immediately.
   */
  abstract onMetadata(callback: (metadata: Metadata) => void);

  /**
   * @param callback Invoked when call has completed.
   */
  abstract onStatus(callback: (status: StatusObject) => void);
}
