import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const IssuesPage = () => {
  return (
    <div><Button>
      <Link href='/issues/New'>New Issue </Link>
    </Button>
    
    </div>
  )
}

export default IssuesPage