import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from '../../redux/directory/directory.selectors'

import { DirectoryContainer } from './directory.styles'

const Directory = ({ sections }) => {
  return (
      <DirectoryContainer>
          {
              sections.map(({id, ...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps} />
              ))
          }
      </DirectoryContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  sections : selectSections
})

export default connect(mapStateToProps)(Directory)
