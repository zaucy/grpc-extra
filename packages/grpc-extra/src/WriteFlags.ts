export enum WriteFlags {

  /**
   * Hint that the write may be buffered and need not go out on the wire 
   * immediately. GRPC is free to buffer the message until the next 
   * non-buffered write, or until writes_done, but it need not buffer 
   * completely or at all.
   */
  BUFFER_HINT = 1,

  /**
   * Force compression to be disabled for a particular write
   */
  NO_COMPRESS = 2,
}
