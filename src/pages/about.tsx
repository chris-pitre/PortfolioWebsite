import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">
                <p>Lorem ipsum</p>
            </Layout>
        </main>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage
