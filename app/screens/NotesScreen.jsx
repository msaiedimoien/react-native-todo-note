import React from 'react';
import Task from "../components/task/Task";
import {FlatList} from "native-base";

const NotesScreen = () => {
    const notes = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Tell her about your new project",
            description: "Tell her about your new project",
        }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Use your new credit card",
            description: "Use your new credit card",
        }, {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Use a charcoal pencil",
            description: "Change mail",
        }];

  return (
      <FlatList
          data={notes}
          keyExtractor={n => n.id}
          renderItem={({item}) => (
              <Task item={item} />
          )}
      />
  );
};

export default NotesScreen;
