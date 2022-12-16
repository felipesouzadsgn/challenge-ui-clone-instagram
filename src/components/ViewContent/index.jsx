export const ViewContent = ({ type, url }) => {
  return (
    <>
      {
        type === "image" ?
          (
            <img className="view" src={url} alt="" />
          ) :
          (
            <iframe className="view"
              src={url}
              title=""
              allow="autoplay">
            </iframe>
          )
      }
    </>
  )
}