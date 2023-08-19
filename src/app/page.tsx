"use client";

import Image from 'next/image'
import React, { useEffect } from "react";
import axios from "axios";

import { HeroContentLeft } from '@/components/TopHero';

export default function Home() {

  const url = "http://localhost/api/skill";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
        console.log(res);
        return;
      }catch (e){
        return e;
      }
    })();
  },[]);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <HeroContentLeft />
    </main>
  )
}
