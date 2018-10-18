export interface MethodDefinition {
  readonly path: string;
  readonly requestStream: boolean;
  readonly responseStream: boolean;
}

export interface ServiceDefinition {
  [key:string]: MethodDefinition;
}

export interface ServiceImplementation {
  /** @internal */
  readonly __service_definition__: ServiceDefinition;
}

export abstract class Server {

  /**
   * Add a service to the server
   */
  abstract addService<ImplementationType extends ServiceImplementation>
    ( implementation: ImplementationType
    );

  /**
   * Binds the server to the given port, with SSL disabled if creds is an 
   * insecure credentials object
   */
  abstract bind(port: number);

  /**
   * Forcibly shuts down the server. The server will stop receiving new calls 
   * and cancel all pending calls. When it returns, the server has shut down. 
   * This method is idempotent with itself and tryShutdown, and it will trigger 
   * any outstanding tryShutdown callbacks.
   */
  abstract forceShutdown();

  /**
   * Start the server and begin handling requests
   */
  abstract start();

  /**
   * Gracefully shuts down the server. The server will stop receiving new calls,
   * and any pending calls will complete. The callback will be called when all 
   * pending calls have completed and the server is fully shut down. This 
   * method is idempotent with itself and forceShutdown.
   */
  abstract tryShutdown(callback: () => void);

  /**
   * Gracefully shuts down the server. The server will stop receiving new calls,
   * and any pending calls will complete. The callback will be called when all 
   * pending calls have completed and the server is fully shut down. This 
   * method is idempotent with itself and forceShutdown.
   */
  abstract tryShutdown(): Promise<void>;

}
