
export default function Info(props) {
  return (
    <h3 className='font-semibold'>{props.name}: <span className='text-gray-500'>{props.desc}</span></h3>
  )
}
