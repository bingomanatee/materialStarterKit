/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

class Header extends Component {
    render() {
        return (
          <Toolbar>
              <ToolbarGroup firstChild={true} float="left">
                  <Link className={s.brand} to="/">
                      <img src={require('./logo-small.png')} width="38" height="38" alt="React"/>
                  </Link>
                  <span className={s.brandTxt}>Your Company</span>
              </ToolbarGroup>
              <Navigation className={s.nav}/>
              <ToolbarSeperator />
              <ToolbarGroup firstChild={true}>
                  <DropDownMenu value={1}>
                      <MenuItem value={1} primaryText="En-US" />
                      <MenuItem value={2} primaryText="Fr-FR" />
                  </DropDownMenu>
              </ToolbarGroup>
          </Toolbar>
        );
    }
}

export default withStyles(Header, s);
