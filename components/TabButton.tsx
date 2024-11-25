import { Dimensions, Pressable, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export type TabButtonType = {
  title: string;
};

type TabButtonProps = {
  buttons: TabButtonType[];
  selectedTab: number;
  setSelectedTab: (index: number) => void;
  style?: object; // Add style prop
};

const TabButton = ({
  buttons,
  selectedTab,
  setSelectedTab,
  style, // Destructure style prop
}: TabButtonProps) => {
  const [dimensions, setDimensions] = useState({
    height: 20,
    width: Dimensions.get('window').width,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ height: 20, width: Dimensions.get('window').width });
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);

    return () => {
      subscription?.remove();
    };
  }, []);

  const buttonWidth = dimensions.width / buttons.length;

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          backgroundColor: '#f3f3f3',
          borderRadius: 50,
          padding: 2, // Add some spacing for the active tab
          width: '90%',
          alignSelf: 'center',
          borderWidth: 2, // Add border width for the outline
          borderColor: 'rgba(128, 128, 128, 0.3)', // Add border color for the outline
        },
        style, // Apply the passed style
      ]}
    >
      {buttons.map((button, index) => {
        const isSelected = selectedTab === index;
        return (
          <Pressable
            key={index}
            style={{
              flex: 1,
              backgroundColor: isSelected ? 'white' : 'transparent',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
            }}
            onPress={() => setSelectedTab(index)}
          >
            <Text
              style={{
                color: isSelected ? '#5DB075' : 'gray',
                fontWeight: 'bold',
              }}
            >
              {button.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabButton;