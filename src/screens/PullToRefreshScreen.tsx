import React, {useContext} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../contexts/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 1500);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          // progressViewOffset={10}
          progressBackgroundColor={colors.primary} // Android
          colors={['white', 'red', 'orange']} // Android
          // style={{backgroundColor: '#5856D6'}} // IOS
          // tintColor="white" // IOS
          // title="refreshing" // IOS
          // titleColor="white" // IOS
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />

        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
