import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <form action="POST" name="contact" data-netlify="true" netlify>
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default Contact
