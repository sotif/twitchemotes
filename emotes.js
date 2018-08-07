function replace_text_with_emotes(my_string)
{
	// Global emotes
	my_string = my_string.replace(/Kappa/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0">');


	// BTTV emotes
	my_string = my_string.replace(/dancepls/g, '<img src="https://cdn.betterttv.net/emote/55f5e7cd7f08be9f0a63d008/2x">');
	my_string = my_string.replace(/CuteDog/g, '<img src="https://cdn.betterttv.net/emote/56d6fbb4d5d429963e27410c/2x">');

	// twitch.tv/gabbie channel emotes
	my_string = my_string.replace(/grrrAww/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/725679/2.0">');
	my_string = my_string.replace(/grrrBrolof/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/72575/2.0">');
	my_string = my_string.replace(/grrrCool/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/92815/2.0">');
	my_string = my_string.replace(/grrrCozy/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/639829/2.0">');
	my_string = my_string.replace(/grrrDerp/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/639830/2.0">');
	my_string = my_string.replace(/grrrDrool/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/725682/2.0">');
	my_string = my_string.replace(/grrrEyes/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/725684/2.0">');
	my_string = my_string.replace(/grrrGrrr/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/725683/2.0">');
	my_string = my_string.replace(/grrrHalo/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/1242872/2.0">');
	my_string = my_string.replace(/grrrHi/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/72576/2.0">');
	my_string = my_string.replace(/grrrHug/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/725716/2.0">');
	my_string = my_string.replace(/grrrLUL/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/1119606/2.0">');
	my_string = my_string.replace(/grrrLove/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/72577/2.0">');
	my_string = my_string.replace(/grrrNo/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/1119614/2.0">');
	my_string = my_string.replace(/grrrSad/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/72790/2.0">');
	my_string = my_string.replace(/grrrShrug/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/725686/2.0">');
	my_string = my_string.replace(/grrrSip/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/639834/2.0">');
	my_string = my_string.replace(/grrrSmirk/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/1119652/2.0">');
	my_string = my_string.replace(/grrrTriss/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/1119654/2.0">');
	my_string = my_string.replace(/grrrWink/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/1119656/2.0">');
	my_string = my_string.replace(/grrrWtf/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/72578/2.0">');
	my_string = my_string.replace(/grrrYay/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/639832/2.0">');
	my_string = my_string.replace(/grrrYikes/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/1119663/2.0">');
	my_string = my_string.replace(/grrrGold/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/253792/2.0">');
	my_string = my_string.replace(/grrrDiamondCool/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/427054/2.0">');

	//Bad words
	my_string = my_string.replace(/dillion harper/gi, '');
	


	// This is only for test, these messages appear when you send test donations using muxy :)
	// subs
	my_string = my_string.replace(/This is a sub message/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0">');
	my_string = my_string.replace(/Subs over dubs/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/74510/3.0">');
	// donos
	my_string = my_string.replace(/This is just a troll tip/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/74510/3.0">');
	my_string = my_string.replace(/Check out this awesome streaming software I just found!/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/74510/3.0">');
	my_string = my_string.replace(/Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows./g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/74510/3.0">');
	my_string = my_string.replace(/Your tip alert looks so cool. Tipping just to look at it again. Keep up the great work!/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/74510/3.0">');
	my_string = my_string.replace(/Your tip alert sound is awesome. Tipping just to hear it again!/g, '<img src="https://static-cdn.jtvnw.net/emoticons/v1/74510/3.0">');
	// No more test

	return my_string;
}

