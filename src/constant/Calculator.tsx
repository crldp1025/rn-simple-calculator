import Feathericon from 'react-native-vector-icons/Feather';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypoicon from 'react-native-vector-icons/Entypo';

export const calculatorObj = [
  {
    items: [
      {
        value: "AC",
        type: "tertiary",
        col: 1
      },
      {
        value: "±",
        type: "tertiary",
        col: 1
      },
      {
        value: "%",
        type: "tertiary",
        col: 1
      },
      {
        value: "÷",
        type: "secondary",
        col: 1
      },
    ]
  },
  {
    items: [
      {
        value: "7",
        type: "primary",
        col: 1
      },
      {
        value: "8",
        type: "primary",
        col: 1
      },
      {
        value: "9",
        type: "primary",
        col: 1
      },
      {
        value: "x",
        component: <Feathericon name="x" size={35} />,
        type: "secondary",
        col: 1
      },
    ]
  },
  {
    items: [
      {
        value: "4",
        type: "primary",
        col: 1
      },
      {
        value: "5",
        type: "primary",
        col: 1
      },
      {
        value: "6",
        type: "primary",
        col: 1
      },
      {
        value: "-",
        component: <MCIcon name="minus-thick" size={35} />,
        type: "secondary",
        col: 1
      },
    ]
  },
  {
    items: [
      {
        value: "1",
        type: "primary",
        col: 1
      },
      {
        value: "2",
        type: "primary",
        col: 1
      },
      {
        value: "3",
        type: "primary",
        col: 1
      },
      {
        value: "+",
        type: "secondary",
        col: 1
      },
    ]
  },
  {
    items: [
      {
        value: "0",
        type: "primary",
        col: 2
      },
      {
        value: ".",
        component: <Entypoicon name="dot-single" size={35} />,
        type: "primary",
        col: 1
      },
      {
        value: "=",
        type: "secondary",
        col: 1
      },
    ]
  },
];