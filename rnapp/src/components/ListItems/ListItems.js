import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
//ScrollView: Only good for a limited amount of elements. Big lists -> performance issues
//what does only render what needs to be rendered?FlatList -> the best solution to render any list
//Also availabel: Section List. List with sections and these sections also have lists?

import ListItem from './ListItem/ListItem';

const listItems= (props) =>
{
    //Data must be an Array of Objects with a key property!
    return <FlatList
                style={styles.listItems}
                data={props.places}
                renderItem={(info) =>(
                    <ListItem
                        placeName={info.item.name}
                        placeImage={info.item.image}
                        onItemPressed={()=> props.onItemSelected(info.item.key)} 
                    />
                )} 
            />
    
};

const styles= StyleSheet.create({
    listItems:{
        width: "100%"
    }
})

export default listItems;