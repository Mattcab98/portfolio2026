const GridBackground = () => {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
        overflow-hidden
        bg-[#C6FF00]
      "
    >
      <div className="grid-background absolute -inset-20" />
    </div>
  )
}

export default GridBackground