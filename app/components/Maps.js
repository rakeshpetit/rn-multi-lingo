import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';
import Polyline from '@mapbox/polyline';

const Maps = () => {
  const points =
    'ylmyHfiRlC~Kj@bCb@nCp@|C~Az@fARJJBLKn@o@dCGh@Bd@FX~B_@xB]rB[nBOtAQ~AOv@Ol@ItBQdA?V?L?NIjBMH?TCD?Ma@Mq@E[MqAEkAAaDf@PfAVlAVT?FCG{AYiDEkAAiBJ{RDaFDwBl@wJ|@wIPmAVsBV_C`@aCf@{Cb@}EXeEr@iKj@cJHiBAsAImASmAc@oAKUMm@Ki@Cc@Bk@A_@B_AJyBT}AAcAK{EIgAYwBY{@QcAGWG_@@SB]HYVc@`AaAh@e@^a@XYHMd@cBp@mCTsADy@Cs@ImAS}CMsAM_A[wAy@{D[aBUiBGeA?uAFmC@mEI_OEaBGaBa@}IYoH@aDDcBJiEAcCUkSEgDCwF@oEE}AOkBO}@g@eCQ_CI_CKaFU}DS}@MaCIoCIoAGg@a@sBg@aB}@kCe@iBQoAOuD?eAR{CPyAf@yBl@{Af@}@fAmA`@WbAk@zCgBn@]^]n@m@l@w@r@kAr@mAZiAL_AJ}A@cAIqCM_AIg@Qm@wA_Ey@{B_@sA[_CCgA?sAFo@X}Bh@aEvAwKl@sCZgBV}Bf@qFV}DHmBLiF@aJCmDQwFq@aPe@aKQaBSsA_@sAe@qAiA{Bg@w@}AeB_AgAYk@y@yAo@{Aw@yBq@qAa@u@k@s@c@a@y@o@mB_AcAa@cAa@q@_@aAy@u@cAs@sAWk@Us@i@cCg@wDWmB?c@M{@WmBKu@e@_Eg@qEmAsKiAmKK{@GKgBiPk@gGWkEIkDK{NKmQAeCD_EVcHXuFFgD@_CEyDI_D_@}HUyCg@kEo@}DiAeFqCaJ{@cD_@eBy@{E]oC[wCSaCKgCKuDCaDBaCF{CrAwX`@{JBoCEcGQeFMoBk@{Fo@gE_AkEc@gBu@eCiDmK}@wC{AyFeCeKeBgHKk@ECEGk@kBw@oCeAaDc@kAGSWa@Yi@Y]MKg@U}@Wo@OKKsADsANyABuCAiDCsCAy@BcCNaBT{@PeAX{@TkAd@_Br@kBbAmBbAgAp@sEtCqDbCoE~CeClBsB|AiAt@aAd@aBd@{B\\aA@m@C_AIsAYqAe@oAq@gBiA_B_AgAe@{@[iBe@kASyAMgAE{BFqGb@uGf@}Fh@uIz@m@FEFOLo@PwA\\mBh@kB^WFa@VWNEFONW`@SRcA`A_AfAcArA_@aAu@mBg@kAOYiA`Bc@l@CDMHYJu@HSFm@f@c@z@Yl@}B~CkCrDKJ}B`@K@GCqCcCa@WgBo@q@S?@?@ABA@C@ECAOyBw@cAs@OOvB{AhA{@';
  const steps = Polyline.decode(points);
  let polylineCoords = [];

  for (let i = 0; i < steps.length; i++) {
    let tempLocation = {
      latitude: steps[i][0],
      longitude: steps[i][1],
    };
    polylineCoords.push(tempLocation);
  }
  const coordinates = [
    {
      latitude: 51.52599,
      longitude: -0.08771,
    },
    {
      latitude: 51.52799,
      longitude: -0.08971,
    },
    {
      latitude: 51.52399,
      longitude: -0.08871,
    },
  ];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 51.52599,
          longitude: -0.08771,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Circle
          center={{
            latitude: 51.52599,
            longitude: -0.08771,
          }}
          fillColor={'rgba(255,150,2,0.5)'}
          radius={400}
        />
        {coordinates.map((item, index) => (
          <Marker key={index} pinColor={'black'} coordinate={item} />
        ))}
        <MapView.Polyline
          coordinates={polylineCoords}
          strokeWidth={5}
          strokeColor="#1660D3"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Maps;
