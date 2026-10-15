function ICard({ data }) {
  return (
    <div
      style={{
        border: '10px solid red',
        width: '200px',
        minHeight: '360px',
        margin: 'auto',
        padding: '8px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ backgroundColor: 'blue', color: 'white' }}>
        ABES ENGINEERING COLLEGE
      </h2>
      <img
        src={data.image}
        height="100"
        width="100"
        style={{ borderRadius: '50%', objectFit: 'cover' }}
        alt={`${data.name} student portrait`}
      />
      <h3>Roll No. = {data.roll}</h3>
      <h3>Name = {data.name}</h3>
      <h3>Branch = {data.branch}</h3>
    </div>
  )
}

export default ICard
