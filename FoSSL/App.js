import React, {Component} from 'react';
import {createStackNavigator, createAppContainer,DrawerNavigator } from "react-navigation";
import {HomeScreen} from './src/home';
import {DetailsScreen} from './src/detail';
import {FinalScreen} from './next/final';
import SplashScreen from 'react-native-splash-screen';
import SideBar from './src/help/sidebar';
import {BBCPage} from './screens/bbc.js';
import {TCPage} from './screens/tc.js';
import {BZPage} from './screens/bz.js';
import {CNNPage} from './screens/cnn.js';
import {CCNPage} from './screens/ccn.js';
import {ESPage} from './screens/es.js';
import {EWPage} from './screens/ew.js';
import {GIPage} from './screens/gi.js';
import {GNPage} from './screens/gn.js';
import {WRPage} from './screens/wr.js';
import {TVPage} from './screens/tv.js';
import {TNWPage} from './screens/tnw.js';
import {THPage} from './screens/th.js';
import {TSPage} from './screens/ts.js';
import {TOIPage} from './screens/toi.js';
import {MTPage} from './screens/mt.js';
import {RCPage} from './screens/rc.js';
import {TRPage} from './screens/tr.js';
import {IGNPage} from './screens/ign.js';
export const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Final: { screen: FinalScreen },
    Side: { screen: SideBar},
    BBC: {screen: BBCPage},
    TC: {screen: TCPage},
    BZ: {screen: BZPage},
    CNN: {screen: CNNPage},
    CCN: {screen: CCNPage},
    ES: {screen: ESPage},
    EW: {screen: EWPage},
    GI: {screen: GIPage},
    GN: {screen: GNPage},
    WR: {screen: WRPage},
    TV: {screen: TVPage},
    TR: {screen: TRPage},
    RC: {screen: RCPage},
    TNW: {screen: TNWPage},
    TH: {screen: THPage},
    TS: {screen: TSPage},
    TOI: {screen: TOIPage},
    IGN: {screen: IGNPage},
    MT: {screen: MTPage},
    Details: { screen: DetailsScreen },
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  componentDidMount() {
        SplashScreen.hide();
    }
  render() {
   return <AppContainer />;
  }
}