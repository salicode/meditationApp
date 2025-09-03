import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const Home = () => {

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const user = await AsyncStorage.getItem("userDetails");
    console.log("user", user);
    setUserDetails(user);
  };
    return (
     <>

     </>
    );
  };

  export default Home;
