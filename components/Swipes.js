import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import SwipeableImages from "./SwipeableImages";
function Swipes({ users, currentIndex, handleLike, handlePass, swipRef }) {
  const [willLike, setWillLike] = useState(false);

  const [willPass, setWillPass] = useState(false);
  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImages user={users[currentIndex + 1]} />
      </RectButton>
    );
  };
  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImages user={users[currentIndex + 1]} />
      </RectButton>
    );
  };
  return (
    <Swipeable
      ref={swipRef}
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        setWillLike(false);
        handleLike();
      }}
      onSwipeableRightOpen={() => {
        setWillPass(false);
        handlePass();
      }}
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillPass(true)}
    >
      <SwipeableImages
        user={users[currentIndex]}
        willLike={willLike}
        willPass={willPass}
      />
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.forwardRef((props, ref) => (
  <Swipes swipRef={ref} {...props}></Swipes>
));
