const Success = ({ success }: { success?: string }) => {
  return (
    <div className="message valid-feedback d-block">{success}</div>
  )
}

export default Success