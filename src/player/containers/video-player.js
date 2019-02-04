import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause'
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import formatTime from '../../libs/utilities';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		loading: false,
		muted: false,
		prevVolume: 0
	}

	componentDidMount() {
		this.setState({
			pause: (!this.props.autoplay)
		})
	}

	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration
		})
	}

	handleTimeUpdate = event => {
		this.setState({
			currentTime: this.video.currentTime
		})
	}

	togglePlay = () => {
		this.setState({
			pause: !this.state.pause
		})
	}

	handleProgressChange = event => {
		this.video.currentTime = event.target.value;
	}

	handleSeeking = event => {
		this.setState({
			loading: true
		})
	}

	handleSeeked = event => {
		this.setState({
			loading: false
		})
	}

	handleVolumeChange = event => {
		this.video.volume = event.target.value;
	}

	handleVolumeClick = event => {
		console.log(this.video.volume)
		this.setState({
			prevVolume: this.video.volume,
			muted: !this.state.muted
		})
		this.video.volume = !this.state.muted ? 0 : this.state.prevVolume ;
	}

	handleFullScreenClick = event => {
		if(!document.webkitIsFullScreen) {
			this.player.webkitRequestFullscreen()
		} else {
			document.webkitExitFullscreen();
		}
	}

	setRef = element => {
		this.player = element;
	}

	render() {
		return (
			<VideoPlayerLayout setRef={this.setRef} >
				<Title title={this.props.title} />
				<Video
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate= {this.handleTimeUpdate}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
					autoplay={this.props.autoplay} 
					pause={this.state.pause} 
					source={this.props.src}
				/>
				<Spinner active={this.state.loading} />
				<Controls>
					<PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
					<Timer currentTime={formatTime(this.state.currentTime)} duration={formatTime(this.state.duration)} />
					<ProgressBar duration={this.state.duration} value={this.state.currentTime} handleProgressChange={this.handleProgressChange} />
					<Volume handleVolumeChange={this.handleVolumeChange} handleVolumeClick={this.handleVolumeClick} />
					<FullScreen handleFullScreenClick={this.handleFullScreenClick} />
				</Controls>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;