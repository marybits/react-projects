import { useEffect, useState } from 'react'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setData(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={data}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={data} currentItem={currentItem} />
    </section>
  )
}
export default App
