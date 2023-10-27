import React, { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WasteForm from './Screens/WasteManagement';
import EquipmentForm from './Screens/EquipmentAndMachinery';
import VehicleForm from './Screens/Vehicle';
import BuildingForm from './Screens/EnergyUsage';
import MainApp from './Screens/Calculator';
import Report from './Screens/Report';

const Stack = createStackNavigator();

function App() {
  const [vehicleData, setVehicleData] = useState({
    distance: '',
    fuelEfficiency: '',
    fuelType: '',
    vehicleName: '',
    carbonEmissions: null,
    vehicleType: '',
  });
  const handleVehicleDataSubmit = (data) => {
    setVehicleData(data);
  };

  const [equipmentData, setEquipmentData] = useState({
    toolType: '',
    powerUsage: '',
    hoursUsed: '',
    carbonEmissions: null,
  });
  const handleEquipmentDataSubmit = (data) => {
    setEquipmentData(data);
  };

  const [energyData, setEnergyData] = useState({
    buildingType: '',
    monthlyPowerUsage: '',
    buildingSize: '',
    carbonEmissions: null,
  });
  const handleFormDataSubmit = ( energyData) => {
    setEnergyData(energyData);
  };

  const [wasteData, setWasteData] = useState({
    wasteType: '',
    wasteAmount: '',
    disposalMethod: '',
    carbonEmissions: null,
  });
  const handleWasteDataSubmit = (wasteData) => {
    setWasteData(wasteData);
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={MainApp} />

        <Stack.Screen name="Energy Usage" options={{ title: 'Building Form' }}>
          {() => <BuildingForm onSubmit={handleFormDataSubmit} />} 
        </Stack.Screen>

        <Stack.Screen name="Vehicle" options={{ title: 'Vehicle form' }}>
          {() => <VehicleForm onSubmit={handleVehicleDataSubmit} />} 
        </Stack.Screen>

        <Stack.Screen name="EquipmentAndMachinery" options={{ title: 'EquipmentAndMachinery' }}>
          {() => <EquipmentForm onSubmit={handleEquipmentDataSubmit} />} 
        </Stack.Screen>

        <Stack.Screen name="Waste Management" options={{ title: 'Waste Managementm' }}>
          {() => <WasteForm onSubmit={handleWasteDataSubmit} />} 
        </Stack.Screen>

        <Stack.Screen name="Report" >
          {() => <Report energyData={energyData} wasteData={wasteData} equipmentData={equipmentData} vehicleData={vehicleData}  />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
