export type ErrorProps = {
  /** The error that was thrown */
  error: Error & {
    /** An automatically generated hash of the error thrown. It can be used to match the corresponding error in server-side logs. */
    digest?: string
  }
  /** Attempts to recover from the error */
  reset: () => void
}