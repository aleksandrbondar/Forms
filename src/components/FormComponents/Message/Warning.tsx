
const Warning = ({ warning }: { warning?: string }) => {
  return (
    <div className="message text-warning d-block" >{warning}</div>
  )
}

export default Warning