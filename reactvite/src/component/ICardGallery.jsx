import ICard from './ICard'
import cat from '../images/cat.png'

function ICardGallery() {
  const students = [
    { pic: cat, roll: '80808', name: 'Rahul', branch: 'CSE-AIML' },
    { pic: cat, roll: '565656', name: 'Pankaj', branch: 'CSE-AIML' },
    { pic: cat, roll: '43233', name: 'Raj', branch: 'CSE' },
    { pic: cat, roll: '565657', name: 'Ankit', branch: 'CSE-AIML' },
    { pic: cat, roll: '676767', name: 'Vansh', branch: 'CSE' },
  ]

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {students.map((student) => (
        <ICard key={student.roll} data={student} />
      ))}
    </div>
  )
}

export default ICardGallery
