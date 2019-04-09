import { Navigation } from 'react-native-navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    //just this would always run whenever we import startMainTabs! Wrap it in a function!
    Promise.all([ //once all promises are resolved, the then block gets executed.
        Icon.getImageSource(Platform.OS==='android' ? "md-map" : "ios-map", 30),
        Icon.getImageSource(Platform.OS==='android' ? "md-share-alt" : "ios-share",30),
        Icon.getImageSource(Platform.OS==='android' ? "md-menu" : "ios-menu",30)
    ]).then(sources =>{ // we get an array of the data these promises returned
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place", //for the tab
                    title: "Find Place",  //navbar at the top
                    icon:  sources[0],//required for Android, not for ios!
                    navigatorButtons: { //buttons in the navBar
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place", //for the tab
                    title: "Share Place",  //navbar at the top
                    icon: sources[1],
                    navigatorButtons: { //buttons in the navBar
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            },
            appStyle: {
                tabBarSelectedButtonColor: "orange"
            }
        });
    }); 
    
    
};
//when this function runs, react native navigation will replace the current app, the current nav- Approach with this one

export default startTabs;
