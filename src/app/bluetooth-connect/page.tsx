'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';

export default function BluetoothConnectPage() {
  const [output, setOutput] = useState<string>('Connection status will appear here.');

  async function connectBluetooth() {
    try {
      setOutput('🔍 Scanning for nearby Bluetooth devices...');

      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service', 'device_information', 'generic_access'],
      });

      let statusHTML = `✅ Connected to: <b>${device.name || 'Unknown Device'}</b><br />ID: ${device.id}`;
      setOutput(statusHTML);

      statusHTML += `<br /><span style="color:#ff007f;">Attempting to access device info...</span>`;
      setOutput(statusHTML);
      
      const server = await device.gatt.connect();

      // Get battery level
      try {
        const service = await server.getPrimaryService('battery_service');
        const characteristic = await service.getCharacteristic('battery_level');
        const value = await characteristic.readValue();
        const batteryLevel = value.getUint8(0);
        statusHTML += `<br />🔋 Battery: ${batteryLevel}%`;
        setOutput(statusHTML);
      } catch {
        statusHTML += '<br />🔋 Battery info not available.';
        setOutput(statusHTML);
      }

      // Get device information
      try {
        const infoService = await server.getPrimaryService('device_information');
        const manufacturerChar = await infoService.getCharacteristic('manufacturer_name_string');
        const manufacturerValue = await manufacturerChar.readValue();
        const manufacturer = new TextDecoder().decode(manufacturerValue);
        statusHTML += `<br />🏭 Manufacturer: ${manufacturer}`;
        setOutput(statusHTML);
      } catch {
        statusHTML += '<br />ℹ️ Device info unavailable.';
        setOutput(statusHTML);
      }

    } catch (error: any) {
      console.error(error);
      setOutput(`❌ Error: ${error.message}`);
    }
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 text-center">
        <div className="relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.4)] backdrop-blur-md border border-cyan-400/40 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
            🔊 Bluetooth Audio Connector
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Click the button below to connect to your phone or music device.
          </p>
          <div className="mt-8">
            <Button
              onClick={connectBluetooth}
              className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 font-bold hover:scale-105 transform transition-all duration-300 shadow-[0_0_25px_rgba(255,0,255,0.5)]"
            >
              🔗 Connect Bluetooth
            </Button>
          </div>

          <div 
            className="mt-10 p-6 rounded-lg bg-black/50 border border-pink-400/50 text-left text-lg text-cyan-400"
            dangerouslySetInnerHTML={{ __html: output }}
          />
        </div>
      </main>
    </>
  );
}