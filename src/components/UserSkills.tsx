"use client";
// DATABASEID = 5c25f340f0fd4695954ea9037198e8cb
// secret_rTCFO75vesBPVrVN7I2vxLkIwolPAnKrSz3QeJrHghK

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Skill } from "@/types";
// import Image from "next/image";
// import { GetStaticProps } from 'next';

// import { MantineProvider, Center, Group } from '@mantine/core';
// import { Grid, Container } from '@mantine/core';

// export function GridSkillsSection() {

//   const [skills,setSkills] = useState([]);

//   useEffect(()=>{
//     const getStaticProps: GetStaticProps = async () =>{
//       // try{ 
//         // const res = await axios.get(url);
//         // setSkills(res.data.post);
//         const url = "http://localhost:3000/api/skills";
//         const res = await fetch(url);
//         const data = await res.json();
//         setSkills(data.skills);
        
//         return {
//           props: {
//             skills: data,
//         },
//     }
//   },[]);

//   return (
//     <Container my="md" className="bg-white p-8 pt-2 rounded-2xl drop-shadow-lg">
//       <Center sx={(theme) => ({
//             height: '2.5rem',
//             backgroundImage: theme.fn.gradient(),
//             color: theme.white,
//           })} className="rounded-xl w-1/2 font-bold transform translate-x-1/2 drop-shadow-lg my-5 mb-10">
//           スキル
//       </Center>
//       <Grid className="gap-2 flex justify-evenly">
//           {/* ゆくゆくはプロフィールから自分が選んだものだけ（idとかでstate維持） */}
//           {skills.slice(0,14).map((skill : Skill)=>{
//             return (
//               <Grid.Col key={skill.id}  xs={1.3} className="bg-slate-100 py-3 rounded-2xl relative drop-shadow-lg duration-300 hover:transform hover:duration-300 hover:-translate-y-5 hover:cursor-pointer">
//                 <div  className="flex justify-center">
//                   <Image 
//                     src= {`/${skill.path}.png`} 
//                     alt={skill.path} 
//                     objectFit="cover" 
//                     width={200} 
//                     height={200} 
//                   />
//                   <p className="font-bold text-center text-xs absolute bottom-0 mt-2">{skill.name}</p>
//                 </div>
//               </Grid.Col>
//             );
//           })}
//       </Grid>
//     </Container>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Skill } from "@/types";
import Image from "next/image";

import { MantineProvider, Center, Group } from '@mantine/core';
import { Grid, Container } from '@mantine/core';

export function GridSkillsSection() {

  const [skills,setSkills] = useState([]);

  // useEffectフックでAPI Routesにアクセスしてデータを取得する
  useEffect(()=>{
    const fetchSklls = async () => {
      const response = await fetch('http://localhost:3000/api/skills');
      const data = await response.json();
      setSkills(data);
    };
    fetchSklls();
  },[]);

  console.log(skills)

  return (
    <Container my="md" className="bg-white p-8 pt-2 rounded-2xl drop-shadow-lg">
      <Center sx={(theme) => ({
            height: '2.5rem',
            backgroundImage: theme.fn.gradient(),
            color: theme.white,
          })} className="rounded-xl w-1/2 font-bold transform translate-x-1/2 drop-shadow-lg my-5 mb-10">
          スキル
      </Center>
      <Grid className="gap-2 flex justify-evenly">
          {/* ゆくゆくはプロフィールから自分が選んだものだけ（idとかでstate維持） */}
          {skills.slice(0,14).map((skill : Skill)=>{
            return (
              <Grid.Col key={skill.id}  xs={1.3} className="bg-slate-100 py-3 rounded-2xl relative drop-shadow-lg duration-300 hover:transform hover:duration-300 hover:-translate-y-5 hover:cursor-pointer">
                <div  className="flex justify-center">
                  <Image 
                    src= {`/${skill.path}.png`} 
                    alt={skill.path} 
                    objectFit="cover" 
                    width={200} 
                    height={200} 
                  />
                  <p className="font-bold text-center text-xs absolute bottom-0 mt-2">{skill.name}</p>
                </div>
              </Grid.Col>
            );
          })}
      </Grid>
    </Container>
  );
}
