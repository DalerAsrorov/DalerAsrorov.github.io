import { PageProps } from 'gatsby'
import React from 'react'

const Error404Page: React.FC<PageProps> = () => {
  if (typeof window !== 'undefined') {
    window.location = '/' as any
  }

  return null
}

export default Error404Page
