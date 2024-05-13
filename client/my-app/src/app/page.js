"use client"
import Image from "next/image";
import React,{ useEffect, useState} from "react"
import {Model} from "../components/Model/Model.js"
export default function Home() {
  useEffect(() =>{
    fetch("http://localhost:8080/api/home")
    .then((response) =>response.json())
    .then((data) =>{
      console.log(data);
    });
  },[])

  
  return (
    <Model/>
  );
}
