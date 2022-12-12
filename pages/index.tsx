import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import InputURL from '../components/url_input'
import { useState, useEffect } from 'react'
import EventList from '../components/events/events-list'
import classes from './index.tsx.module.css';

export default function Home() {

  return (
    <div className={classes.contents}>
      <h1>Randomify</h1>
      <InputURL/>
      <EventList />
    </div>
  )
}
