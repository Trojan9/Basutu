import React from 'react';
import './video.css';
import { YoutubePlayer } from 'reactjs-media';

function Avengers(){
return (
	<div className =  "mylist">
	<YoutubePlayer src="https://www.youtube.com/watch?v=6ZfuNTqbHE8"  width={750} height={600} />
	</div>
);
}

function FNF(){
	return (
		<div className =  "mylist">
		<YoutubePlayer src="https://www.youtube.com/watch?v=FUK2kdPsBws"  width={750} height={600} />
		</div>
	);
	}

	function Inception(){
return (
	<div className =  "mylist">
	<YoutubePlayer src="https://www.youtube.com/watch?v=YoHD9XEInc0"  width={750} height={600} />
	</div>
);
}

function Ironman(){
	return (
		<div className =  "mylist">
		<YoutubePlayer src="https://www.youtube.com/watch?v=8ugaeA-nMTc"  width={750} height={600} />
		</div>
	);
	}

	function Joker(){
		return (
			<div className =  "mylist">
			<YoutubePlayer src="https://www.youtube.com/watch?v=zAGVQLHvwOY"  width={750} height={600} />
			</div>
		);
		}

		function Moneyheist1(){
			return (
				<div className =  "mylist">
				<YoutubePlayer src="https://www.youtube.com/watch?v=hMANIarjT50"  width={750} height={600} />
				</div>
			);
			}

				function Sonic(){
					return (
						<div className =  "mylist">
						<YoutubePlayer src="https://www.youtube.com/watch?v=szby7ZHLnkA"  width={750} height={600} />
						</div>
					);
					}

					function Squidgame(){
						return (
							<div className =  "mylist">
							<YoutubePlayer src="https://www.youtube.com/watch?v=oqxAJKy0ii4"  width={750} height={600} />
							</div>
						);
						}

						function Transformers(){
							return (
								<div className =  "mylist">
								<YoutubePlayer src="https://www.youtube.com/watch?v=ET9SHYzMz_4"  width={750} height={600} />
								</div>
							);
							}

							function Strangerthings(){
								return (
									<div className =  "mylist">
									<YoutubePlayer src="https://www.youtube.com/watch?v=b9EkMc79ZSU"  width={750} height={600} />
									</div>
								);
								}

								function Gameofthrones(){
									return (
										<div className =  "mylist">
										<YoutubePlayer src="https://www.youtube.com/watch?v=6w9kf33-SfA"  width={750} height={600} />
										</div>
									);
									}

									function Starwars(){
										return (
											<div className =  "mylist">
											<YoutubePlayer src="https://www.youtube.com/watch?v=E4iJOpla4AU"  width={750} height={600} />
											</div>
										);
										}

										function Alien(){
											return (
												<div className =  "mylist">
												<YoutubePlayer src="https://www.youtube.com/watch?v=svnAD0TApb8"  width={750} height={600} />
												</div>
											);
											}

export { Avengers, FNF, Inception, Ironman, Joker , Moneyheist1 , Sonic, Squidgame, Transformers, Strangerthings, Gameofthrones, Starwars, Alien };
