import React from 'react';
import { FlatList } from "native-base";
import Task from "../components/Task";

const TasksScreen = () => {
    const tasks = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Call Erica",
            description: "Tell her about your new project",
            category: "person-pin",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Pay Gas Bill",
            description: "Use your new credit card",
            category: "person-pin",
            isCompleted: true,
            memoCompleted: "Recorded in the accounting software."
        }, {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Complete SSL Install",
            description: "Change mail",
            category: "miscellaneous-services",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "68694a0f-3da1-431f-bd56-142371e29d72",
            title: "Deliver P202 Paper",
            description: "Don't forget to change file name",
            category: "art-track",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "28694a0f-3da1-471f-bd96-142456e29d72",
            title: "Complete Homework",
            description: "Use a charcoal pencil",
            category: "art-track",
            isCompleted: false,
            memoCompleted: ""
        },
        {
            id: "bd7acbea-c1b1-46c2-aedd53abb28ba",
            title: "Call Erica",
            description: "Tell her about your new project",
            category: "person-pin",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa973",
            title: "Pay Gas Bill",
            description: "Use your new credit card",
            category: "person-pin",
            isCompleted: true,
            memoCompleted: "Recorded in the accounting software."
        }, {
            id: "58694a0f-3da1-471f-b96-145571e29d72",
            title: "Complete SSL Install",
            description: "Change mail",
            category: "miscellaneous-services",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "68694a0f-3da1-431f-bd56-1471e29d72",
            title: "Deliver P202 Paper",
            description: "Don't forget to change file name",
            category: "art-track",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "28694a0f-3da1-471f-bd96-1424529d72",
            title: "Complete Homework",
            description: "Use a charcoal pencil",
            category: "art-track",
            isCompleted: false,
            memoCompleted: ""
        }];

    return (
        <FlatList
            data={tasks}
            keyExtractor={t => t.id}
            renderItem={({item}) => (
                <Task item={item} />
            )}
        />
    );
};

export default TasksScreen;
