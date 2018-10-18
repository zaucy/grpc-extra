import { Status } from './Status';
import { Metadata } from "./Metadata";

/**
 * Represents the status of a completed request. If code is grpc.status.OK, 
 * then the request has completed successfully. Otherwise, the request has 
 * failed, details will contain a description of the error. Either way, 
 * metadata contains the trailing response metadata sent by the server when it 
 * finishes processing the call.
 */
export class StatusObject {

  /**
   * The error code
   */
  code: Status;

  /**
   * Human-readable description of the status
   */
  details: string;

  /**
   * Trailing metadata sent with the status, if applicable
   */
  metadata?: Metadata;
}
