import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';
import NewQuote from './screens/NewQuote';
import Schedule from './screens/ScheduleScreen';
import Random from './screens/RandomScreen';
import Todays from './screens/TodayQuoteScreen';
import { NavigationContainer } from '@react-navigation/native';
import QuotePage from './screens/quotePage';
import colors from './vars/color';

// import { initDB, addQuote, getRandomQuote } from './tools/db';
// import { scheduleNotification } from './tools/Notification';

const Stack = createStackNavigator();

function App() {
    // const [quote, setQuote] = useState(null);

    // useEffect(() => {
    //     initDB();
    //     scheduleNotification();

    //     const subscription = Notifications.addNotificationResponseReceivedListener(response => {
    //         if (quote) alert(`"${quote.quote}"\n\n— ${quote.author}\n\nStory: ${quote.story}`);
    //     });

    //     return () => subscription.remove();
    // }, [quote]);

    // const handleAddQuote = (quoteData) => {
    //     addQuote(quoteData.quote, quoteData.author, quoteData.story);
    //     alert('Quote added successfuly!');
    // };

    // const handleShowQuote = () => {
    //     getRandomQuote(setQuote);
    // };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.darkOliveGreen,
          },
          headerTintColor: colors.khaki,
          headerTit
        }}
      >
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen 
          name="allquotes" 
          component={AllQuote} 
          options={{
            title: 'All Quotes',
          }}
        />
        <Stack.Screen 
          name="newquote" 
          component={NewQuote} 
          options={{
            title: 'Write New Quote',
          }}
        />
        <Stack.Screen 
          name="schedule" 
          component={Schedule} 
          options={{
            title: "Schedule Quote Notification",
          }}
        />
        <Stack.Screen 
          name="random" 
          component={Random} 
          options={{
            title: "Random Quote",
          }}
        />
        <Stack.Screen 
          name="todays" 
          component={Todays} 
          options={{
            title: "Today's Quote",
          }}
        />

        <Stack.Screen 
          name="quotePage" 
          component={QuotePage} 
          options={{
            title: "Quote Page",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;