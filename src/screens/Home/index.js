import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import useCalculate from '../../utils/hooks/useCalculate';
import {useDispatch, useSelector} from 'react-redux';
import getBrandsThunk from '../../redux/Brands/thunk';
import {store} from '../../redux/store';
import {getBrandApi} from '../../api/brand';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const INITIAL_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '5869d4a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd9d6-145571e29d722',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557129d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-b96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557d1e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3d1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Home = ({navigation}) => {
  const [data, setData] = useState(INITIAL_DATA);

  // custom hook
  const {plus} = useCalculate();
  // console.log('💩: Home -> plus', plus({x: 1, y: 2}));

  //redux
  const dispatch = useDispatch();
  const myBrands = useSelector(state => state.getBrandsReducer.data);
  const loading = useSelector(state => state.getBrandsReducer.loading);

  // console.log('💩: Home -> myBrands', myBrands);

  store.getState();
  // console.log('💩: Home -> store.getState()', store.getState());

  useEffect(() => {
    dispatch(getBrandsThunk());
  }, []);

  const getBrandsData = async () => {
    try {
      const res = await getBrandApi({limit: 10, page: 1});
      console.log('💩: getBrandsData -> res', res);
    } catch (error) {
      console.log('💩: getBrandsData -> error', error);
    }
  };

  const onLoadMore = () => {
    setData([
      ...data,
      {
        id: `${Math.random()}`,
        title: 'New Item',
      },
      {
        id: `${Math.random()}`,
        title: 'New Item',
      },
      {
        id: `${Math.random()}`,
        title: 'New Item',
      },
    ]);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', {headerTitle: 'Product 2'});
        }}
        style={styles.item}>
        <Text>{item?.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text>headerTitle</Text>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>Empty</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color="red" />
      </View>
    );
  };

  const flatList = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      flatList?.current?.scrollToEnd();
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatList}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        stickyHeaderIndices={[0]}
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              setData(INITIAL_DATA);
            }}
          />
        }
        onEndReached={onLoadMore}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: 80,
    borderWidth: 1,
    marginTop: 10,
  },
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'pink',
  },
  headerContainer: {height: 44, backgroundColor: 'pink'},
  loadingContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
