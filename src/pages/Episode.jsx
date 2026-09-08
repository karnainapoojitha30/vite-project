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
      { n: 5, title: 'The Flea and the Acrobat', runtime: 53, synopsis: 'Hopper breaks into the lab to uncover the truth. Nancy and Jonathan grow closer while setting a trap for the creature.' },
      { n: 6, title: 'The Monster', runtime: 46, synopsis: 'A frantic search for Eleven ensues after she vanishes. The boys face a bully, and the creature draws terrifyingly close to Will.' },
      { n: 7, title: 'The Bathtub', runtime: 41, synopsis: 'Eleven tries to use her powers to find Will in the Upside Down, while Hopper strikes a dangerous bargain with Dr. Brenner.' },
      { n: 8, title: 'The Upside Down', runtime: 55, synopsis: 'Nancy and Jonathan face the creature head-on. Hopper and Joyce venture into the Upside Down to find Will before it\u2019s too late.' },
    ],
  },
  2: {
    label: 'Season 2',
    tag: '1984 · Trouble in Hawkins',
    episodes: [
      { n: 1, title: 'MADMAX', runtime: 48, synopsis: 'As the town preps for Halloween, a high-scoring rival shows up at the arcade. Will sees something terrible on trick-or-treat night.' },
      { n: 2, title: 'Trick or Treat, Freak', runtime: 56, synopsis: 'After Will\u2019s episode at school, Mike wants to use the supercomputer at Hawkins Lab to find Eleven. Nancy and Jonathan hatch a plan.' },
      { n: 3, title: 'The Pollywog', runtime: 51, synopsis: 'Dustin adopts a strange new pet, and Hopper\u2019s investigation leads him to a corn field bearing a horrifying secret.' },
      { n: 4, title: 'Will the Wise', runtime: 46, synopsis: 'A visit to Murray\u2019s leads Nancy and Jonathan to a shocking discovery, while Will\u2019s visions of the Upside Down intensify.' },
      { n: 5, title: 'Dig Dug', runtime: 51, synopsis: 'Eleven searches for answers about her past and her mother, while Hawkins Lab races to contain a rapidly spreading threat.' },
      { n: 6, title: 'The Spy', runtime: 41, synopsis: 'Murray helps Nancy and Jonathan go public with the truth about Hawkins Lab, while Will struggles against a darkening presence.' },
      { n: 7, title: 'The Lost Sister', runtime: 46, synopsis: 'Eleven tracks down another test subject in Chicago and gets pulled into a reckless plan for revenge.' },
      { n: 8, title: 'The Mind Flayer', runtime: 47, synopsis: 'The Party regroups to protect Will as the creature closes in, while Hopper and Joyce confront the danger spreading beneath Hawkins.' },
      { n: 9, title: 'The Gate', runtime: 62, synopsis: 'Eleven returns to close the gate for good as the town rallies to fight off the shadow creature once and for all.' },
    ],
  },
  3: {
    label: 'Season 3',
    tag: '1985 · The Mall Rats',
    episodes: [
      { n: 1, title: 'Suzie, Do You Copy?', runtime: 51, synopsis: 'Summer brings new jobs and new heartache as the kids try to relax. Hopper and Joyce investigate a bizarre power outage.' },
      { n: 2, title: 'The Mall Rats', runtime: 48, synopsis: 'Nancy and Jonathan chase down a story. Eleven and Max hang out. Will tries to keep the Party together.' },
      { n: 3, title: 'The Case of the Missing Lifeguard', runtime: 51, synopsis: 'Hopper and Joyce follow a trail of strange behavior in town, while the kids uncover something unsettling at the pool.' },
      { n: 4, title: 'The Sauna Test', runtime: 50, synopsis: 'The group devises a test to expose who in town has been overtaken, while Robin and Steve stumble onto a secret Russian code.' },
      { n: 5, title: 'The Flayed', runtime: 53, synopsis: 'As the infection spreads through Hawkins, the kids split up to gather supplies and warn the people they love.' },
      { n: 6, title: 'E Pluribus Unum', runtime: 51, synopsis: 'The group discovers just how far the corruption has spread through town and races to warn Hopper before it\u2019s too late.' },
      { n: 7, title: 'The Bite', runtime: 58, synopsis: 'With Hawkins under siege, the team splits up to stop the threat at its source while a mysterious bite worsens.' },
      { n: 8, title: 'The Battle of Starcourt', runtime: 77, synopsis: 'The Party makes a final stand against the Mind Flayer at Starcourt Mall, at great cost to Hawkins and to Hopper.' },
    ],
  },
  4: {
    label: 'Season 4',
    tag: '1986 · The Hawkins Massacre',
    episodes: [
      { n: 1, title: 'The Hellfire Club', runtime: 76, synopsis: 'Months after moving to California, the group settles into a new normal until a shocking murder shakes Hawkins once again.' },
      { n: 2, title: 'Vecna\u2019s Curse', runtime: 79, synopsis: 'As Hawkins panics over the killing, Nancy and the gang investigate a curse tied to a terrifying new enemy.' },
      { n: 3, title: 'The Monster and the Superhero', runtime: 63, synopsis: 'Eleven relives a painful memory from Hawkins Lab, while Dustin and friends look for a way to reach another victim in time.' },
      { n: 4, title: 'Dear Billy', runtime: 78, synopsis: 'Max confronts painful memories as she becomes the creature\u2019s next target, leading to a desperate race to save her.' },
      { n: 5, title: 'The Nina Project', runtime: 73, synopsis: 'Eleven undergoes a dangerous procedure to recover her powers, while Joyce and Hopper are caught in a Russian prison ordeal.' },
      { n: 6, title: 'The Dive', runtime: 78, synopsis: 'The group devises a plan to enter the Upside Down and locate Vecna\u2019s lair before he can claim another victim.' },
      { n: 7, title: 'The Massacre at Hawkins Lab', runtime: 98, synopsis: 'A flashback reveals the true story of the Hawkins Lab massacre and the origin of the season\u2019s greatest threat.' },
      { n: 8, title: 'Papa', runtime: 85, synopsis: 'Eleven faces Vecna directly while Hopper and Joyce fight their way out of Russia and back home to Hawkins.' },
      { n: 9, title: 'The Piggyback', runtime: 139, synopsis: 'Hawkins descends into chaos as the Party makes a final, desperate stand to close the gates for good.' },
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
