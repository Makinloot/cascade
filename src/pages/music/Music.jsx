import React from 'react'
import PageTitle from '../../components/page-title/PageTitle'
import Row from '../../components/row/Row'
import Button from '../../components/button/Button'

import { popular, podcast, albumPreview, epPreview } from '../../data'

import './Music.scss'
import { Link } from 'react-router-dom'

const Music = () => {
  return (
    <div className='music' style={{color: 'white'}}>
      <PageTitle page='music' />
      <div className="container">
        <div className="music-wrapper">
          <Row data={popular} title="popular" />
          <div className="preview-container flex-row" style={{justifyContent: 'flex-start', gap: 80, margin: '150px 0'}}>
            <Row data={albumPreview} title="album review" />
            <Row data={epPreview} title="ep review" />
          </div>
          <Row data={podcast} title="podcast series" />
          <Link to="/podcasts" className='flex-row' style={{margin: '60px 0'}}>
            <Button value="view more podcasts" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Music