import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {  Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import HomePageStyles from "../../constants/HomePageStyles";
import BottomNavBar from "@/src/components/Nav/BottomNavBar";

const fetchOrder = async () => {
  const res = await fetch("https://mocki.io/v1/0a7b1d9c-9b0f-4d2b"); // mock API
  return res.json();
};

export default function OrderSummaryScreen() {
  const router = useRouter();


  const { data, isLoading, error } = useQuery({
    queryKey: ["order"],
    queryFn: fetchOrder,
  });

  useEffect(() => {
    if (data) {
      console.log("Order Loaded:", data);
    }
  }, [data]);

  const onSubmit = () => {
    console.log("Order Confirmed");
    router.replace("/");
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>حدث خطأ</Text>;
  }

  return (
    <View style={HomePageStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={HomePageStyles.header}>
          <Ionicons name="arrow-forward" size={22} />
          <Text style={HomePageStyles.title}>ملخص الطلب</Text>
          <Text style={HomePageStyles.title1}>سويفت شيفت</Text>  
        </View>

        <View>
            <Image source={require("../../assets/images/Step3.png")} style={{width: "100%", height: 120, resizeMode: "contain"}} />
        </View>

        <View style={HomePageStyles.card}>
          <Text style={HomePageStyles.cardTitle}>🚚 تفاصيل النقل</Text>

          <View style={HomePageStyles.row}>
            <View style={HomePageStyles.dotGreen} />
            <Text style={HomePageStyles.text}>
            نقطة الانطلاق : حي الياسمين، طريق الملك عبدالعزيز، الرياض
            </Text>
          </View>

          <View style={HomePageStyles.row}>
            <View style={HomePageStyles.dotBlue} />
            <Text style={HomePageStyles.text}>
             وجهة الوصول : حي النخيل، شارع التخصصي، الرياض
            </Text>
          </View>

          <View style={HomePageStyles.dateRow}>
            <View style={HomePageStyles.box}>
              <Ionicons name="calendar-outline" size={16} />
              <Text>15 أكتوبر 2023</Text>
            </View>
            <View style={HomePageStyles.box}>
              <Ionicons name="time-outline" size={16} />
              <Text>09:00 صباحا</Text>
            </View>
          </View>
        </View>

        <View style={HomePageStyles.card}>
          <View style={HomePageStyles.itemsHeader}>
            <Text style={HomePageStyles.cardTitle}>📦 قائمة المنقولات</Text>
            <Text style={HomePageStyles.edit}>تعديل</Text>
          </View>
            <View> 
                <MaterialCommunityIcons name="sofa" size={24} color="black" />  
                <Text>سرير مزدوج كبير</Text>
                <Text>غرفة النوم الرئيسية</Text>
                <Text>x1</Text> 
            </View>
            <View>
                <MaterialCommunityIcons name="sofa-single" size={24} color="black" /> 
                <Text>طقم كنبة(3 قطع)</Text>
                <Text>غرفة المعيشة</Text>
                <Text>x2</Text>
            </View> 
            <View> 
                <FontAwesome5 name="box" size={24} color="black" />
                <Text>صناديق كرتونية</Text> 
                <Text>اغراض متنوعة</Text> 
                <Text>x12</Text> 
            </View>
        </View>
      </ScrollView>

      <View style={HomePageStyles.bottomBar}>
        <View>
          <Text style={HomePageStyles.priceLabel}>السعر الإجمالي</Text>
          <Text style={HomePageStyles.price}>850 ر.س</Text>
        </View>

        <TouchableOpacity style={HomePageStyles.button}>
          <Text style={HomePageStyles.buttonText}>تأكيد الطلب</Text>
        </TouchableOpacity>
      </View>
      <BottomNavBar />
    </View>
  );
}