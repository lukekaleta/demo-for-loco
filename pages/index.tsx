import type { NextPage } from 'next'

import { Example } from "components/Example";
import { Layout } from "components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Example />
    </Layout>
  )
}

export default Home
