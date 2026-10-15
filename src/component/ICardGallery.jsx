import ICard from './ICard'
import image from '../assets/photo.jpg'

function ICardGallery() {
  const students = [
    { roll: '2345', name: 'Chand', branch: 'AIML', image },
    { roll: '2346', name: 'Chand', branch: 'AIML', image },
    { roll: '2347', name: 'Chand', branch: 'AIML', image },
    { roll: '2348', name: 'Chand', branch: 'AIML', image },
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center',
      }}
    >
      {students.map((student) => (
        <ICard key={student.roll} data={student} />
      ))}
    </div>
  )
}

export default ICardGallery
