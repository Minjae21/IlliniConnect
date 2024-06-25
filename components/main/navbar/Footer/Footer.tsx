import React from 'react'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="absolute bottom-0 right-0 text-xl text-gray-300">
        <p>Created by <Link href="https://minjae21.github.io/index.html">Minjae Jang</Link></p>
    </footer>
  )
}

export default Footer