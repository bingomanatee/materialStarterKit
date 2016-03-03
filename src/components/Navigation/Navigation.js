/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';
import RaisedButton from 'material-ui/lib/raised-button';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

class Navigation extends Component {

    static propTypes = {
        className: PropTypes.string
    };

    render() {
        return (
          <ToolbarGroup float="right">
              <RaisedButton label="About" onClick={Link.handleClick} to="/about"/>
              <RaisedButton label="Contact" onClick={Link.handleClick} to="/contact"/>

              <ToolbarSeparator />
              <RaisedButton label="Log In" onClick={Link.handleClick} to="/login"/>
          </ToolbarGroup>    );
    }
}

export default withStyles(Navigation, s);
