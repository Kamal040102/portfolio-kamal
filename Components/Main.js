import React from 'react'
import me from '../me.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://kit.fontawesome.com/444eba2dfa.js" crossorigin="anonymous"></script>
        <div className="flex justify-center">
            <Image className="rounded-full" src={me} 
                alt="Me.jpg"
                width={120}
                height={120}
            />
        </div>
        <div className="text-white flex flex-col justify-center items-center">
            <h2 className="text-7xl my-2">Kamal Sharma</h2>
            <h3 className="text-2xl my-2">Student, Developer and Data Scientist</h3>
        </div>
        <div className="flex flex-row justify-evenly my-10">
        <Link href="https://www.instagram.com/mr_kamalsharma"><i class="fa-brands fa-instagram text-white cursor-pointer"></i></Link>
        <Link href="https://www.facebook.com"><i class="fa-brands fa-facebook text-white cursor-pointer"></i></Link>
        <Link href="https://www.linkedin.com/in/kamalsharma05/"><i class="fa-brands fa-linkedin text-white cursor-pointer"></i></Link>
        <Link href="https://www.github.com/Kamal040102"><i class="fa-brands fa-github text-white cursor-pointer"></i></Link>
        <Link href="https://discord.com/users/835128382962401280"><i class="fa-brands fa-discord text-white cursor-pointer"></i></Link>
        <Link href="https://www.snapchat.com/kamal_s5201"><i class="fa-brands fa-snapchat text-white cursor-pointer"></i></Link>
        <Link href="mailto:kamal5201ks@gmail.com"><i class="fa-brands fa-google text-white cursor-pointer"></i></Link>
        </div>
    </div>
  )
}

export default Main