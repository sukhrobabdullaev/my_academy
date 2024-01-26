import Link from 'next/link'

// const res = await fetch("https://fakestoreapi.com/products/");
// const products: ProductType[] = await res.json();
const CourseDetails = () => {
  return (
    <div className='lg:ml-64 md:ml-20 sm:ml-24'>
        <h2>CourseDetails</h2>
        <Link href={'/course/react/id'}>KIRISH</Link>
    </div>
  )
}

export default CourseDetails