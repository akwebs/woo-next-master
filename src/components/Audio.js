import { useState } from 'react';
import useSound from 'use-sound';

const Sound = (props) => {
const [Volume, setVolume] = useState(0.5);
	const soundUrl = '../beep.mp3';
	const [play, { stop }] = useSound(
		soundUrl,
		{volume : Volume, interrupt: true,}
	  );
	  
	  const [isHovering, setIsHovering] = useState(
		false
	  );
	  const volumePlus = () => {
		if (Volume <= 0.9 ){
			setVolume(Volume + 0.1);
		}else{
			setVolume(Volume + 0);
		};
		play();
	  };
	  const volumeMinus = () => {
		if (Volume >= 0.15 ){
			setVolume(Volume - 0.1);
		}else{
			setVolume(Volume - 0);
		};
		play();
		console.log(Volume);
	  };

	  return (
		<div onMouseEnter={() => { play(); }} onMouseLeave={() => { stop(); }}>
			{props.children}
		</div>
	)

	};

	export default Sound;