import React from 'react'
import {shallow} from 'enzyme'
import App from '../../components/App'

describe('App', () => {
  it('renders the welcome message', () => {
    const component = shallow(<App />)
    const paragraph = component.find('p')
    expect(paragraph.exists()).toBe(true)
    expect(paragraph.text()).toContain('my new react')
  })
})
