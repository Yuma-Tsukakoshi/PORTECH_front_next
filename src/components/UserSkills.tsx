"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Skill } from "@/types";
import Image from "next/image";

import { MantineProvider, Center, Group } from '@mantine/core';
import { Grid, Container } from '@mantine/core';

export function GridSkillsSection() {

  const [skills,setSkills] = useState([]);
  const url = "http://localhost/api/skill";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
        setSkills(res.data.post);
        return;
      }catch (e){
        return e;
      }
    })();
  },[]);

  return (
    <Container my="md" className="bg-white p-8 pt-2 rounded-2xl">
      <Center sx={(theme) => ({
            height: '2.5rem',
            backgroundImage: theme.fn.gradient(),
            color: theme.white,
          })} className="rounded-xl w-1/2 font-bold transform translate-x-1/2 drop-shadow-lg my-4">
          My Skills
      </Center>
      <Grid className="gap-1 flex justify-between">
          {/* ゆくゆくはプロフィールから自分が選んだものだけ（idとかでstate維持） */}
          {skills.slice(0,14).map((skill : Skill)=>{
            return (
              <Grid.Col xs={1.5} className="bg-slate-100 py-3 rounded-2xl relative drop-shadow-lg duration-500 hover:transform hover:duration-500 hover:-translate-y-5 hover:cursor-pointer">
                <div key={skill.id} className="flex justify-center">
                  {/* <Image src={skill.image} alt={skill.path} objectFit="cover" width={500} height={500} /> */}
                    <img src= { skill.image } alt="" className="w-12 object-cover"/>
                  <p className="font-bold text-center text-xs absolute bottom-0 mt-2">{skill.name}</p>
                </div>
              </Grid.Col>
            );
          })}
      </Grid>
    </Container>
  );
}
