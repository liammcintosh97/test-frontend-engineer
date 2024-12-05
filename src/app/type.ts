export type ErrorProps = {
  /** The error that was thrown */
  error: Error & {
    /** An automatically generated hash of the error thrown. It can be used to match the corresponding error in server-side logs. */
    digest?: string
  }
  /** Attempts to recover from the error */
  reset: () => void
}

/** The page meta data */
export type MetaData = {
  /** The title */
  title: string
  /** The description */
  description: string
  /** The openGraph config */
  openGraph: {
    title: string
    description: string
    url: string | undefined
    siteName: string
    locale: string
    authors: {
      name: string
      url: string | undefined
    }[];
    images: {
      url: string | undefined
      alt: string
    }[]
  }
}