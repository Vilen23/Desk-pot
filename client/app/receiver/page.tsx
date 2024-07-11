"use client";
import React, { useEffect, useState } from "react";

export default function Receiver() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8080`);
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "receiver" }));
    };

    let pc: RTCPeerConnection | null = null;
    const video = document.createElement("video");
    document.body.appendChild(video);

    pc = new RTCPeerConnection();
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.send(
          JSON.stringify({
            type: "iceCandidate",
            candidate: event.candidate,
          })
        );
      }
    };
    pc.ontrack = (event) => {
      console.log("received track");
      console.log(event.track);
      video.srcObject = new MediaStream([event.track]);
      video.play();
    };

    socket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      const type = message.type;
      switch (type) {
        case "createOffer":
          pc.setRemoteDescription(message.sdp);
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          socket.send(
            JSON.stringify({
              type: "createAnswer",
              sdp: pc.localDescription,
            })
          );
          break;
        case "iceCandidate":
          pc.addIceCandidate(message.candidate);
      }
    };
  }, []);

  return <div>Hello</div>;
}
