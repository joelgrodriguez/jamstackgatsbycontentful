import React from "react"

const Card = ({ node: { title, slug, image, description, instructor } }) => {
  return (
    <div>
      <a
        href={slug}
        className="no-underline bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition flex-1 flex flex-col overflow-hidden"
      >
        <div>
          <div
            className="bg-cover aspect-ratio-16x9"
            />
          <img src={`https:${image.file.url}`} alt="" />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <h3 className="font-display text-black no-underline mb-4">{title}</h3>
          
        </div>
        <hr/>
        <br/>
      </a>
    </div>
  )
}

export default Card
