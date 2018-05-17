#!/usr/bin/env node

const { h, render, Component, Color } = require('ink')
const QuickSearch = require('ink-quicksearch')
const opn = require('opn')
const termImg = require('term-img')

const selectHandler = item => {

  if(item.url) {
    opn(item.url, {wait: false})
  }

  if(item.action) {
    return item.action()
  }

}

const indicatorComponent = ({isSelected}) => {
  return isSelected ? '🐰 ' : '   '
}

const itemComponent = ({isSelected, children}) => {
  const color = isSelected ? '#7fbd95' : '#ddd'
  return <Color hex={color}>{children}</Color>
}

const selectItems = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/leafia78'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/Ghostrick'
  },
  {
    label: 'Web',
    url: 'https://phimos.is'
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@leafia78/'
  },
  {
    label: 'Hatena Blog',
    url: 'http://www.ngmrlog.love/'
  },
  {
    label: 'Homete',
    url: 'https://www.mottohomete.net/leafia78'
  },
  {
    label: 'Exit',
    action: process.exit
  }
]


const App = () => {

	return (
    <div>
      <div>
        My nickname is "nagimaru". <br/>
        I'am web engineer, And web designer.<br/>

        I usually use
        <Color hex='#7fbd95'> Elixir </Color>
        and
        <Color hex='#7fbd95'> Angular </Color>
        in my work.<br/>

        And, I can develop mobile app with
        <Color hex='#7fbd95'> ReactNative </Color>
        and
        <Color hex='#7fbd95'> MobX</Color>.
      </div>

      <br/>

      <QuickSearch
        items={selectItems}
        onSelect={selectHandler}
        itemComponent={itemComponent}
        indicatorComponent={indicatorComponent}
      />
    </div>
  )
}

const imageFallback = () => {
  console.log()
  console.log('(Sorry, Images can not be displayed. Your device is not supported...)')
  console.log()
}

termImg(__dirname + '/assets/user.png', {width: '400px', fallback: imageFallback})
render(<App/>)
