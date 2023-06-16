import Link from 'next/link'
import { useRouter } from 'next/router'

const HumanDetail = () => {
  const router = useRouter()
  return (
    <div>
      <div data-testid="user-id">
        userID {router.query.id}
      </div>
      <h1>Human Detail</h1>
    </div>
  )
}

export default HumanDetail
