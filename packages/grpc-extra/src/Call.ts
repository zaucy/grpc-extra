export abstract class Call<T> {

  /**
   * Get the endpoint this call/stream is connected to.
   * @returns The URI of the endpoint
   */
  abstract getPeer(): string;

  /**
   * Resolves promise once stream has finished rejects on error.
   */
  abstract toPromise(): Promise<T>;
}
