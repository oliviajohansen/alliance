import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'

const IndustryList = ({navigation}) => {
  const [openIndustries, setOpenIndustries] = useState(false);
  const [industry, setIndustry] = useState(null);
  const [industries, setIndustries] = useState([
    {label: "Accountancy", value: "Accountancy"},
    {label: "Aerospace", value: "Aerospace"},
    {label: "Agriculture", value: "Agriculture"}
  ]);
  return (
    <View>
      <DropDownPicker
        style={{width: 300}}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        zIndex={1000}
        open={openIndustries}
        value={industry}
        items={industries}
        setValue={setIndustry}
        setOpen={setOpenIndustries}
        setItems={setIndustries}
      />
    </View>
  )
};

export default IndustryList;
