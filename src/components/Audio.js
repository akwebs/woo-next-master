import MyFile from "../audio/mixkit-fast-small-sweep-transition-166.wav";

const myAudio = () => {
	return (
		<audio id="sounds" loop= "false" volume = "60">
            <source src={MyFile} id="play" type="audio/wav" />
        </audio> 
	)
};

export default myAudio;
