"use client";
   
import { useState } from "react";
import styles from "./page.module.css";
import MapComponent from "../components/MapComponent";
import Selector from "@/components/Selector";

export default function Home() {
  
  const [select, setSelect] = useState<String>("point");
  return (
    <main>
      <div style={{ display: "flex" }}>
        <MapComponent select={select}/>
        <Selector setSelect={setSelect}/>
      </div>
    </main>
  );
}
