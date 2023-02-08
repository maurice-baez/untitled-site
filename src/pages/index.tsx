import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { TestComponent } from './styledComponents';


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <TestComponent>
        <p>HELLLO</p>
      </TestComponent>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Untitled Video Game Site</title>
