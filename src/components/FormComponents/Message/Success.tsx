const Success = ({ success }: { success?: string }) => {
  return (
    <div className="valid-feedback d-block">{success}</div>
  )
}

export default Success