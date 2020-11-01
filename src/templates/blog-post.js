import React from "react"

export default function Post({ pageContext }) {
    const { title, body } = pageContext.post;
    console.log(pageContext)
    return (
        <>
          <h1>{title}</h1>
          <div>これはテストです</div>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </>
    )
}