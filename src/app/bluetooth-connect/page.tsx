'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function BluetoothConnectPage() {
  const [output, setOutput] = useState<string>('Connection status will appear here.');
  const [isConnected, setIsConnected] = useState(false);
  const [isAutoPairEnabled, setIsAutoPairEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audioRef.current.volume = 0.5;

    // Check for trusted device on load
    const trustedDeviceId = localStorage.getItem('trustedDeviceId');
    const autoPairPref = localStorage.getItem('autoPairEnabled') === 'true';

    if (autoPairPref) {
      setIsAutoPairEnabled(true);
      if (trustedDeviceId) {
        // We can't trigger requestDevice without a user gesture,
        // but this sets up the state for a manual-triggered auto-pair.
        console.log('Auto-pair is enabled for device:', trustedDeviceId);
      }
    }

    return () => {
      // Disconnect on unmount
      // This part is complex as device instance is not stored in state.
      // For now, we just pause audio.
      audioRef.current?.pause();
    }
  }, []);

  async function connectBluetooth() {
    try {
      setOutput('🔍 Scanning for nearby Bluetooth devices...');

      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service', 'device_information', 'generic_access'],
      });
      
      setIsConnected(true);

      let statusHTML = `✅ Connected to: <b>${device.name || 'Unknown Device'}</b><br />ID: ${device.id}`;
      setOutput(statusHTML);
      
      // Store trusted device if auto-pair is on
      if (isAutoPairEnabled) {
        localStorage.setItem('trustedDeviceId', device.id);
        statusHTML += `<br />💾 This device is now trusted for auto-pairing.`;
        setOutput(statusHTML);
      }

      statusHTML += `<br /><span style="color:#ff007f;">Attempting to access device info...</span>`;
      setOutput(statusHTML);
      
      const server = await device.gatt.connect();

      try {
        const service = await server.getPrimaryService('battery_service');
        const characteristic = await service.getCharacteristic('battery_level');
        const value = await characteristic.readValue();
        const batteryLevel = value.getUint8(0);
        statusHTML += `<br />🔋 Battery: <span class="font-numeric">${batteryLevel}%</span>`;
        setOutput(statusHTML);
      } catch {
        statusHTML += '<br />🔋 Battery info not available.';
        setOutput(statusHTML);
      }

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
      setIsConnected(false);
      setOutput(`❌ Error: ${error.message}`);
    }
  }

  const handleAutoPairToggle = (checked: boolean) => {
    setIsAutoPairEnabled(checked);
    localStorage.setItem('autoPairEnabled', String(checked));
    if (!checked) {
      localStorage.removeItem('trustedDeviceId');
      setOutput('Auto-pairing disabled and trusted device cleared.');
    } else {
        setOutput('Auto-pairing enabled. Connect to a device to set it as trusted.');
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    }
  };

  const handleNext = () => {
    if (audioRef.current) {
        audioRef.current.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
        audioRef.current.play();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = parseFloat(e.target.value);
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 text-center">
        <div className="relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.4)] backdrop-blur-md border border-cyan-400/40 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
            🔊 Bluetooth Audio Connector
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Connect to a device, then use the playback controls. Enable auto-pair to remember a trusted device.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              onClick={connectBluetooth}
              className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 font-bold hover:scale-105 transform transition-all duration-300 shadow-[0_0_25px_rgba(255,0,255,0.5)]"
            >
              🔗 Connect Bluetooth
            </Button>
            <div className="flex items-center space-x-2">
              <Switch id="autoPairToggle" checked={isAutoPairEnabled} onCheckedChange={handleAutoPairToggle} />
              <Label htmlFor="autoPairToggle" className="text-cyan-400">Auto-Pair Trusted Device</Label>
            </div>
          </div>

          <div 
            className="mt-10 p-6 rounded-lg bg-black/50 border border-pink-400/50 text-left text-lg text-cyan-400 min-h-[100px]"
            dangerouslySetInnerHTML={{ __html: output }}
          />

          {isConnected && (
            <div className="mt-8 p-6 rounded-lg bg-black/50 border border-cyan-400/50">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Playback Controls</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={handlePlayPause}>▶️ Play / Pause</Button>
                <Button onClick={handleNext}>⏭ Next</Button>
                <div className="flex items-center gap-2">
                  <Label htmlFor="volume">Volume:</Label>
                  <Input id="volume" type="range" min="0" max="1" step="0.05" defaultValue="0.5" onChange={handleVolumeChange} className="w-48" />
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
