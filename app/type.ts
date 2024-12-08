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

/**
 * The props for the paginator component
 */
export type PaginatorProps = {
  /** The category to paginate */
  category: string | undefined
  /** The current page */
  page: number | undefined
  /** The total number of pages */
  totalPages: number | undefined
}

/** The properties of the Products page*/
export type HomePageProps = {
  /** The search parameters */
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}