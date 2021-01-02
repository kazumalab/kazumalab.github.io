import Link from 'next/link'

export default function ListLink(props) {
  return (
    <li>
      <Link href={props.url}>
        <a target="_blank">
          {props.title}
        </a>
      </Link>
    </li>
  )
}