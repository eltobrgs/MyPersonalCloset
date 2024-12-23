import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Closet from '../pages/closet';
import User from '../pages/UserProfile';
import Ajustes from '../pages/ajustes';
import CustomTabBar from '../components/CustomTabBar';
import Home from '../pages/home';
import { AuthProvider_list } from '../context/authContext_list';
const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <AuthProvider_list>

            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBar={props => <CustomTabBar{...props} />}
            >
                <Tab.Screen
                    name="Home"
                    component={Home} />

                <Tab.Screen
                    name="Closet"
                    component={Closet}
                />

                <Tab.Screen
                    name="User"
                    component={User}
                />

                <Tab.Screen
                    name="Ajustes"
                    component={Ajustes}
                />
            </Tab.Navigator>
        </AuthProvider_list>

    );
}