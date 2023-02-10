// import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';
const Human = () => {
  const heroes = [
    {
      name: 'Anh',
      id: 'sdfsetdxrgdfgdfg',
    },
    {
      name: 'Duc',
      id:'sdfetngbjhgbsdhfbjkg',
    },
    {
      name: 'Ls',
      id: 'jsdnfsbef',
    },
    {
      name: 'Kric',
      id: 'sfeudsfser',
    },
    {
      name: 'OnlyC',
      id: 'gsdsefefdfsdf',
    },
    {
      name: 'Tran Duc Bo',
      id: 'endfbsdfbbf',
    },
    {
      name: 'Ha',
      id: 'eknfjgfng',
    },
    {
      name: 'Nam',
      id: uuidv4(),
    },
    {
      name: 'Nhan',
      id: uuidv4(),
    },
  ]

  return (
    <div>
      <h1>Human list</h1>
      {heroes.map((item, index) => (
        <div key={index}>
          {/* <Link href={`human/${item.id}`}>{item.name}</Link> */}
        </div>
      ))}
    </div>
  )
}

export default Human
