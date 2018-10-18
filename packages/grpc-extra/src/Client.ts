export abstract class Client {
  
  /**
   * A generic gRPC client. Primarily useful as a base class for generated 
   * clients
   *
   * @param address Server address to connect to
   */
  constructor(address: string) {}

  /**
   * Close this client.
   */
  abstract close();
}
