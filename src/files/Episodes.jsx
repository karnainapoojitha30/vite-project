import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Episodes.css'

const SEASONS = {
  1: {
    label: 'Season 1',
    tag: '1983 · The Vanishing of Will Byers',
    episodes: [
      { n: 1, title: 'The Vanishing of Will Byers', runtime: 49, synopsis: 'On his way home from a friend\u2019s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.' },
      { n: 2, title: 'The Weirdo on Maple Street', runtime: 55, synopsis: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.' },
      { n: 3, title: 'Holly, Jolly', runtime: 51, synopsis: 'An increasingly worried Nancy looks for Barb and finds out what Jonathan\u2019s been up to. Joyce is convinced Will is trying to reach her.' },
      { n: 4, title: 'The Body', runtime: 50, synopsis: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys ask Mr. Clarke a hypothetical question.' },
    ],
  },
  2: {
    label: 'Season 2',
    tag: '1984 · Trouble in Hawkins',
    episodes: [
      { n: 1, title: 'MADMAX', runtime: 48, synopsis: 'As the town preps for Halloween, a high-scoring rival shows up at the arcade. Will sees something terrible on trick-or-treat night.' },
      { n: 2, title: 'Trick or Treat, Freak', runtime: 56, synopsis: 'After Will\u2019s episode at school, Mike wants to use the supercomputer at Hawkins Lab to find Eleven. Nancy and Jonathan hatch a plan.' },
      { n: 3, title: 'The Pollywog', runtime: 51, synopsis: 'Dustin adopts a strange new pet, and Hopper\u2019s investigation leads him to a corn field bearing a horrifying secret.' },
    ],
  },
  3: {
    label: 'Season 3',
    tag: '1985 · The Mall Rats',
    episodes: [
      { n: 1, title: 'Suzie, Do You Copy?', runtime: 51, synopsis: 'Summer brings new jobs and new heartache as the kids try to relax. Hopper and Joyce investigate a bizarre power outage.' },
      { n: 2, title: 'The Mall Rats', runtime: 48, synopsis: 'Nancy and Jonathan chase down a story. Eleven and Max hang out. Will tries to keep the Party together.' },
    ],
  },
}

const Episodes = () => {
  const seasonKeys = Object.keys(SEASONS)
  const [season, setSeason] = useState(seasonKeys[0])
  const [selected, setSelected] = useState(SEASONS[seasonKeys[0]].episodes[0])

  const data = SEASONS[season]

  const list = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  }
  const row = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 90, damping: 14 } },
  }

  return (
    <section className="page-section ep-section">
      <div className="ep-header">
        <span className="ep-eyebrow">HAWKINS, INDIANA</span>
        <h2>Episode Guide</h2>
        <p className="ep-tag">{data.tag}</p>
      </div>

      <div className="ep-dial">
        {seasonKeys.map((k) => (
          <button
            key={k}
            className={`ep-dial-btn ${season === k ? 'active' : ''}`}
            onClick={() => {
              setSeason(k)
              setSelected(SEASONS[k].episodes[0])
            }}
          >
            {SEASONS[k].label}
          </button>
        ))}
      </div>

      <div className="ep-layout">
        <motion.div className="ep-list" variants={list} initial="hidden" animate="visible" key={season}>
          {data.episodes.map((ep) => (
            <motion.div
              key={ep.n}
              variants={row}
              className={`ep-tape ${selected.n === ep.n ? 'active' : ''}`}
              onClick={() => setSelected(ep)}
            >
              <span className="ep-tape-num">{String(ep.n).padStart(2, '0')}</span>
              <span className="ep-tape-title">{ep.title}</span>
              <span className="ep-tape-runtime">{ep.runtime}m</span>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.n + season}
            className="ep-detail"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            <span className="ep-detail-label">Chapter {selected.n}</span>
            <h3>{selected.title}</h3>
            <p>{selected.synopsis}</p>
            <button className="ep-play-btn">▶ Play Episode</button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Episodes
