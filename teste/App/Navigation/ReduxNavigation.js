import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
/*import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'

addNavigationHelpers({
  dispatch: this.props.dispatch,
  state: this.props.nav,
  addListener: createReduxBoundAddListener('root')
})*/

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <AppNavigation navigation={navigation} />
  /*<AppNavigation navigation={{
         dispatch: this.props.dispatch,
         state: this.props.nav,
         addListener,
      }} />*/
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
