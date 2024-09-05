import { useState } from 'react'
import data from './data'
import Questions from './Questions'

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [active, setActive] = useState(null)

  const toggleQuestion = (id) => {
    setActive(id === active ? null : id)
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeId={active}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}
export default App
