<script>
  import { homeData } from '../../stores.js';
  import { onMount } from "svelte";

  import DefaultCuration from "../../components/Home/Default.svelte";

  let homes = [];
  let contents = [];
  let scrollBtnL = [];
  let scrollBtnR = [];

  const subscribe = homeData.subscribe(value => {
    //test data
    if(Object.entries(value).length == 0) {
      value = [{"contents":[{"browseId":"MPREb_3VLGsScgzZH","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/PXleIRlQfniKVnPNrKJu6DLuvvZPgkgZdY0icaOBr3I9tTjUixNMu_iHM9lp37OYOxMLV2qd2BRb4JQ=w226-h226-s-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/PXleIRlQfniKVnPNrKJu6DLuvvZPgkgZdY0icaOBr3I9tTjUixNMu_iHM9lp37OYOxMLV2qd2BRb4JQ=w544-h544-s-l90-rj","width":544}],"title":"Official\u9aed\u7537dism one-man tour 2019@\u65e5\u672c\u6b66\u9053\u9928","year":"Official\u9aed\u7537dism"},{"browseId":"UC84Rm0a3gimYXPtqp5O_JRw","subscribers":"2.7M","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/zExXAi-wLTlE2yl71wdTKu2PmD3z-V945rDphjwDtk6OtpE9mJHzjjOMBZuR3oKp65y5UMYzRUC4GA=w226-h226-p-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/zExXAi-wLTlE2yl71wdTKu2PmD3z-V945rDphjwDtk6OtpE9mJHzjjOMBZuR3oKp65y5UMYzRUC4GA=w544-h544-p-l90-rj","width":544}],"title":"Official\u9aed\u7537dism"},{"browseId":"MPREb_9XoC3Flm4Rv","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/D0He9E2VSSqj-0waH0t1jHhaG4NBM3UAn32JsHmOBoO5WN1uhRbF9Z493ShfBAhiaErtO7L2g3CrdkQ=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/D0He9E2VSSqj-0waH0t1jHhaG4NBM3UAn32JsHmOBoO5WN1uhRbF9Z493ShfBAhiaErtO7L2g3CrdkQ=w544-h544-l90-rj","width":544}],"title":"Traveler","year":"Official\u9aed\u7537dism"},{"artists":[{"id":null,"name":"Song"},{"id":"UCa5b_7ImijW-GNEt4hNUzWg","name":"Yerin Baek"}],"playlistId":"RDAMVMZ8E0apklL2w","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/uAxlSvSvAYe6rA-h3vItHWMuGqER3GJa9YMoZsf3Obmr_T47HggwKaQf8GsaufArJq0u9Cj8w8KxsVY=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/uAxlSvSvAYe6rA-h3vItHWMuGqER3GJa9YMoZsf3Obmr_T47HggwKaQf8GsaufArJq0u9Cj8w8KxsVY=w544-h544-l90-rj","width":544}],"title":"Maybe It's Not Our Fault","videoId":"Z8E0apklL2w"},{"artists":[{"id":null,"name":"Song"},{"id":"UCqKHrLNe4Lc2hzJrg6eXrfQ","name":"Alary-Kansion"}],"playlistId":"RDAMVMjCH6CdmgOaM","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/m3nCPglky4sF4Qhv7V8Nz9Dn101pteIq83IwSsNSzdU9sQ2k_XRzDvkyaAy-O3aSMkWmgcTBs-6Goo74GQ=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/m3nCPglky4sF4Qhv7V8Nz9Dn101pteIq83IwSsNSzdU9sQ2k_XRzDvkyaAy-O3aSMkWmgcTBs-6Goo74GQ=w544-h544-l90-rj","width":544}],"title":"Gainism","videoId":"jCH6CdmgOaM"},{"browseId":"MPREb_WDKYjtNdDlW","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/Z2f8QUf4xnFhlR0gGmlbuJmlk1yLUjB-u68u9qooOHshhiTMvlyVYTiXEZxOdugTDblrHPTArgi3R-Y=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/Z2f8QUf4xnFhlR0gGmlbuJmlk1yLUjB-u68u9qooOHshhiTMvlyVYTiXEZxOdugTDblrHPTArgi3R-Y=w544-h544-l90-rj","width":544}],"title":"Official HIGE DANdism Online Live 2020 - Arena Travelers - (Live)","year":"Official HIGE DANdism"},{"browseId":"MPREb_NoFDBV23eCh","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/5yHJKFsShYmJuFKbPS9AuzdvHt7xm_0vlvGlrYoR3VhfX2Rl6jvhul1wKLN9-Hbw2dbr12lcj9peHhfB=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/5yHJKFsShYmJuFKbPS9AuzdvHt7xm_0vlvGlrYoR3VhfX2Rl6jvhul1wKLN9-Hbw2dbr12lcj9peHhfB=w544-h544-l90-rj","width":544}],"title":"Jinah Restaurant Full Course","year":"Lee Jin Ah"},{"browseId":"MPREb_wHkCT0jtfeX","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/hg5g9EE_VedOBeGS9dPpII3E8GCgaj6MfL465wh7U4hBkIZqvPkpQqMpTkC8LAf08V6aTeiuUKspE-P0=w226-h226-s-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/hg5g9EE_VedOBeGS9dPpII3E8GCgaj6MfL465wh7U4hBkIZqvPkpQqMpTkC8LAf08V6aTeiuUKspE-P0=w544-h544-s-l90-rj","width":544}],"title":"Traveler-Instrumentals-","year":"Official\u9aed\u7537dism"},{"artists":[{"id":null,"name":"Song"},{"id":"UCxUDDDb_0-okM1Bj9A7iV7g","name":"\u300e\u30e6\u30a4\u30ab\u300f"}],"playlistId":"RDAMVMSVkGRoLicuA","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/zUE2JIXWi_AVAm3ZA5XaPH5Ucwfb3JpJYAqXJcCflGEZPo0i3EsuqhCG0vx882QQn886QkMZaQ7zsS4=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/zUE2JIXWi_AVAm3ZA5XaPH5Ucwfb3JpJYAqXJcCflGEZPo0i3EsuqhCG0vx882QQn886QkMZaQ7zsS4=w544-h544-l90-rj","width":544}],"title":"\u597d\u304d\u3060\u304b\u3089\u3002","videoId":"SVkGRoLicuA"},{"artists":[{"id":null,"name":"Song"},{"id":"UC84Rm0a3gimYXPtqp5O_JRw","name":"Official\u9aed\u7537dism"}],"playlistId":"RDAMVMZF5w7kkk7Yo","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/BNRZkP6h54vDMN-xQ08M89153Itt6DFxuLrbnEqSqxdm-VjSNDu1Ym3aaXnoT6e4KCsZTH_nJ4mLF-o=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/BNRZkP6h54vDMN-xQ08M89153Itt6DFxuLrbnEqSqxdm-VjSNDu1Ym3aaXnoT6e4KCsZTH_nJ4mLF-o=w544-h544-l90-rj","width":544}],"title":"What's Going On?","videoId":"ZF5w7kkk7Yo"}],"title":"Your afternoon music"},{"contents":[{"description":"Yoh Kamiyama, IU, YOASOBI, LEE SEUNG YOON","playlistId":"RDTMAK5uy_kset8DisdE7LSD4TNjEVvrKRTmG7a56sY","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/Oy0MoVVYmt7e2QhRbN4mrnerSbnEGEbtQxeRriRhMkHDZC1a-HUVsL6ziQy3tkDMoVbsogBHvj2WqtLD=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/Oy0MoVVYmt7e2QhRbN4mrnerSbnEGEbtQxeRriRhMkHDZC1a-HUVsL6ziQy3tkDMoVbsogBHvj2WqtLD=w544-h544-l90-rj","width":544}],"title":"My Supermix"},{"description":"Official\u9aed\u7537dism, Yuuri, PSY","playlistId":"RDTMAK5uy_nGQKSMIkpr4o9VI_2i56pkGliD6FQRo50","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/9AM_jyS9AIHVw8s8i1Z1XL_Lym9QOqurCPj6rohb_Xklpd8FRfEXFBJLAQEwCDQvlJFzRGt0O88lVfW8=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/9AM_jyS9AIHVw8s8i1Z1XL_Lym9QOqurCPj6rohb_Xklpd8FRfEXFBJLAQEwCDQvlJFzRGt0O88lVfW8=w544-h544-l90-rj","width":544}],"title":"My Mix 1"},{"description":"AKMU, IU, Lee Mujin, Yerin Baek","playlistId":"RDTMAK5uy_lz2owBgwWf1mjzyn_NbxzMViQzIg8IAIg","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/UHrWe1flnniamo7BisGxrtzLp-SrJXmpQ5tT-iG-1E1wTWDR4f9yC7wNy_-rKg-8q9YZZUU4WdV01SNT=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/UHrWe1flnniamo7BisGxrtzLp-SrJXmpQ5tT-iG-1E1wTWDR4f9yC7wNy_-rKg-8q9YZZUU4WdV01SNT=w544-h544-l90-rj","width":544}],"title":"My Mix 2"},{"description":"Yorushika, Zutomayo, sumika, Kenshi Yonezu","playlistId":"RDTMAK5uy_k5UUl0lmrrfrjMpsT0CoMpdcBz1ruAO1k","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/DWyKqbU7QSMYKNgsmGkax_s3AZNId8T0OaoLqSYHOWeulfHN73tX2w2K9yJvH-AhKTOwKkH2QI88Ug=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/DWyKqbU7QSMYKNgsmGkax_s3AZNId8T0OaoLqSYHOWeulfHN73tX2w2K9yJvH-AhKTOwKkH2QI88Ug=w544-h544-l90-rj","width":544}],"title":"My Mix 3"},{"description":"Galdive, Snail's House, potsu, Mkhito","playlistId":"RDTMAK5uy_nTsa0Irmcu2li2-qHBoZxtrpG9HuC3k_Q","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/s0HPCLpLd1kfs3cEIVZSEpEYCqkCRoF3gqJMmbr17EeD9VCRL9Lo3sJhQ6tpThBgE_Ms3guZjXTtmc4I=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/s0HPCLpLd1kfs3cEIVZSEpEYCqkCRoF3gqJMmbr17EeD9VCRL9Lo3sJhQ6tpThBgE_Ms3guZjXTtmc4I=w544-h544-l90-rj","width":544}],"title":"My Mix 4"},{"description":"GAYLE, Emotional Oranges, Abir, Zara Larsson","playlistId":"RDTMAK5uy_lfZhS7zmIcmUhsKtkWylKzc0EN0LW90-s","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/YNZtLC224ykYScfS9TbP3uahnI92zkz1b2lmuRuMKlbnfY5xbUmZmm4Z_79ELYxXP9lK8UmBDFrdlQ=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/YNZtLC224ykYScfS9TbP3uahnI92zkz1b2lmuRuMKlbnfY5xbUmZmm4Z_79ELYxXP9lK8UmBDFrdlQ=w544-h544-l90-rj","width":544}],"title":"My Mix 5"},{"description":"Lee Jin-ah, Yuhki Kuramoto, a_hisa, Humming Urban Stereo","playlistId":"RDTMAK5uy_k78ni6Y4fyyl0r2eiKkBEICh9Q5wJdfXk","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/suDYERqbSKS1EmXdjBFYTMwMxcjOojZkOgEvch_hv7YPxwzayVXO5uh98SsFGE5AqFp_TXYiLqGG0WKG=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/suDYERqbSKS1EmXdjBFYTMwMxcjOojZkOgEvch_hv7YPxwzayVXO5uh98SsFGE5AqFp_TXYiLqGG0WKG=w544-h544-l90-rj","width":544}],"title":"My Mix 6"},{"description":"Kole, Tai Verdes, M&A","playlistId":"RDTMAK5uy_lfhhWWw9v71CPrR7MRMHgZzbH6Vku9iJc","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/8to8e8N5mBKesy2A_IZXyITTSf64PQ7ZpkRny5e2alUiFIk06ULH_79ZFJHRiqhRUlf_6uDUYCvbvw=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/8to8e8N5mBKesy2A_IZXyITTSf64PQ7ZpkRny5e2alUiFIk06ULH_79ZFJHRiqhRUlf_6uDUYCvbvw=w544-h544-l90-rj","width":544}],"title":"My Mix 7"},{"playlistId":"LM","thumbnails":[{"height":192,"url":"https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-songs-@192.png","width":192},{"height":576,"url":"https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-songs-@576.png","width":576}],"title":"Your Likes"},{"description":"Official\u9aed\u7537dism, PSY, wacci","playlistId":"RDTMAK5uy_nilrsVWxrKskY0ZUpVZ3zpB0u4LwWTVJ4","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/2Jo99JrKnvTYgDbAdy3dS7TwFiIgAdHa-dnP0sfaL2hM-wePmmQd3mCSc2b5Rf3c0mS2ZrYcAM99PA=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/2Jo99JrKnvTYgDbAdy3dS7TwFiIgAdHa-dnP0sfaL2hM-wePmmQd3mCSc2b5Rf3c0mS2ZrYcAM99PA=w544-h544-l90-rj","width":544}],"title":"Replay Mix"},{"description":"Playlist \u2022 YouTube Music","playlistId":"RDTMAK5uy_n_5IN6hzAOwdCnM8D8rzrs3vDl12UcZpA","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/1kzE_83toCi_Lk9Cdc7ZCfSHhgYjGfCGalKxFOkjiZSOwimqs8PyqLwqY1WG9O--oF_kjKlGw3ZqxA=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/1kzE_83toCi_Lk9Cdc7ZCfSHhgYjGfCGalKxFOkjiZSOwimqs8PyqLwqY1WG9O--oF_kjKlGw3ZqxA=w544-h544-l90-rj","width":544}],"title":"Discover Mix"},{"description":"Playlist \u2022 YouTube Music","playlistId":"RDTMAK5uy_lr0LWzGrq6FU9GIxWvFHTRPQD2LHMqlFA","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/hW1h_RfigXZCmefOU6fSxqgh_fcNisusSUfa-KHL3ZTsf620HkeK8ZNCBbJLJaGvDxk4Buu9qz-3DD4=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/hW1h_RfigXZCmefOU6fSxqgh_fcNisusSUfa-KHL3ZTsf620HkeK8ZNCBbJLJaGvDxk4Buu9qz-3DD4=w544-h544-l90-rj","width":544}],"title":"New Release Mix"}],"title":"Mixed for you"},{"contents":[{"browseId":"MPREb_2owyuUAxH5L","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/bDUpPIK_5mbGUojOUZbKlRp2AsYWds2G3_2PtFDPzY3vGUGDXpPMyJ3cSU70I0PWsu8UxJkrxomReQM=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/bDUpPIK_5mbGUojOUZbKlRp2AsYWds2G3_2PtFDPzY3vGUGDXpPMyJ3cSU70I0PWsu8UxJkrxomReQM=w544-h544-l90-rj","width":544}],"title":"Plagiarism","year":"Yorushika"},{"artists":[{"id":"UCaXYqWTt1iBJiKHTdp_hmsw","name":"MIMI"}],"playlistId":"RDAMVMZiz_ckzVjyA","thumbnails":[{"height":225,"url":"https://i.ytimg.com/vi/Ziz_ckzVjyA/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kOQQKOu6pBcf4qJNsvgk9MKXgxXg","width":400},{"height":450,"url":"https://i.ytimg.com/vi/Ziz_ckzVjyA/hq720.jpg?sqp=-oaymwEXCKAGEMIDIAQqCwjVARCqCBh4INgESFo&rs=AMzJL3lLJkQg1HH0gvHWyhQewMPesXXKsg","width":800}],"title":"MIMI\u300e\u30eb\u30eb\u30fc\u30b8\u30e5\u300ffeat.\u521d\u97f3\u30df\u30af","videoId":"Ziz_ckzVjyA","views":"1M"},{"artists":[{"id":null,"name":"Song"},{"id":null,"name":"linear ring"}],"playlistId":"RDAMVMKwmbbHRjYmg","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/gCta642TCTPbuOhhjJqae8HIs39dY4ohohMFzNmivv-9IJKRJ_5M2nld3oMv3oGs-q7QfQIODMh0D_s=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/gCta642TCTPbuOhhjJqae8HIs39dY4ohohMFzNmivv-9IJKRJ_5M2nld3oMv3oGs-q7QfQIODMh0D_s=w544-h544-l90-rj","width":544}],"title":"waitingforyou","videoId":"KwmbbHRjYmg"},{"artists":[{"id":null,"name":"Song"},{"id":"UC9dIQRHQwB6cvfymHRvJ7mA","name":"Big Naughty"}],"playlistId":"RDAMVMJd0bdJ1v5xI","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/qA6k8zy2bDJY7YRQNtoGL3-RP0xKNtKY0S-PF-utt4uNEPOIZHzKEQ925t-azabDdWhwRoCeRmXP-ZfZ=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/qA6k8zy2bDJY7YRQNtoGL3-RP0xKNtKY0S-PF-utt4uNEPOIZHzKEQ925t-azabDdWhwRoCeRmXP-ZfZ=w544-h544-l90-rj","width":544}],"title":"Astronaut","videoId":"Jd0bdJ1v5xI"},{"artists":[{"id":null,"name":"Song"},{"id":"UCxUDDDb_0-okM1Bj9A7iV7g","name":"\u300e\u30e6\u30a4\u30ab\u300f"}],"playlistId":"RDAMVMSVkGRoLicuA","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/zUE2JIXWi_AVAm3ZA5XaPH5Ucwfb3JpJYAqXJcCflGEZPo0i3EsuqhCG0vx882QQn886QkMZaQ7zsS4=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/zUE2JIXWi_AVAm3ZA5XaPH5Ucwfb3JpJYAqXJcCflGEZPo0i3EsuqhCG0vx882QQn886QkMZaQ7zsS4=w544-h544-l90-rj","width":544}],"title":"\u597d\u304d\u3060\u304b\u3089\u3002","videoId":"SVkGRoLicuA"},{"browseId":"UC9dIQRHQwB6cvfymHRvJ7mA","subscribers":"16.8K","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/ENSnzOXTYoEbkrd-rc7lP8TvH_C-XzfvRngi1KEpbdzoQHoQZt1b70p4LwTeTHpNatDhjXpWi19rvVM=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/ENSnzOXTYoEbkrd-rc7lP8TvH_C-XzfvRngi1KEpbdzoQHoQZt1b70p4LwTeTHpNatDhjXpWi19rvVM=w544-h544-l90-rj","width":544}],"title":"Big Naughty"},{"artists":[{"id":null,"name":"Song"},{"id":"UCH7Bls-MaKHRZAjRC4n1eJw","name":"Dareharu \ub2ec\uc758\ud558\ub8e8"}],"playlistId":"RDAMVMzoSJ5pkamn4","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/C3sTnpaLChw0nsyf73UqmZt4kGrD3EQm7xtNv4GPXcNwOaZZLXm2QsXgh1dyGya_0beN36xnSDVJzopVTg=w226-h226-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/C3sTnpaLChw0nsyf73UqmZt4kGrD3EQm7xtNv4GPXcNwOaZZLXm2QsXgh1dyGya_0beN36xnSDVJzopVTg=w544-h544-l90-rj","width":544}],"title":"Karma \uc5fc\ub77c","videoId":"zoSJ5pkamn4"},{"browseId":"UCabLXblrQG4cO8F9qdd4Xsw","subscribers":"2.4M","thumbnails":[{"height":226,"url":"https://lh3.googleusercontent.com/ufS1qifPTVxSR1_xBz6F75iymu07Qdgplp0Qp3uJBWZuSrpgP6GWFkog-99E8bvH6o5xAmnzzNENskFZ=w226-h226-p-l90-rj","width":226},{"height":544,"url":"https://lh3.googleusercontent.com/ufS1qifPTVxSR1_xBz6F75iymu07Qdgplp0Qp3uJBWZuSrpgP6GWFkog-99E8bvH6o5xAmnzzNENskFZ=w544-h544-p-l90-rj","width":544}],"title":"Yorushika"},{"artists":[{"id":"UCWVicaoco6MB5EV1zg2H6kw","name":"DAZBEE"}],"playlistId":"RDAMVMZm9qThKYw04","thumbnails":[{"height":225,"url":"https://i.ytimg.com/vi/Zm9qThKYw04/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nJ6DBv4_VX61Hl5rPrTzAkuVHhxw","width":400},{"height":450,"url":"https://i.ytimg.com/vi/Zm9qThKYw04/hq720.jpg?sqp=-oaymwEXCKAGEMIDIAQqCwjVARCqCBh4INgESFo&rs=AMzJL3lRMahHcwlPABHu4YifjiqQqGq3hQ","width":800}],"title":"Befall (\ubd95\uad343rd OST : Official Korean ver.)\uff0f\ub2e4\uc988\ube44","videoId":"Zm9qThKYw04","views":"3.4M"},{"artists":[{"id":"UCXW81UHV3UeWUjVMr11ov2A","name":"Eve"}],"playlistId":"RDAMVM5CjA4W6BJeU","thumbnails":[{"height":225,"url":"https://i.ytimg.com/vi/5CjA4W6BJeU/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nnOC5tC2dJd0avhZPiCnG2fiBQaw","width":400},{"height":240,"url":"https://i.ytimg.com/vi/5CjA4W6BJeU/sddefault.jpg?sqp=-oaymwEWCKoDEPABIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lCbYuejoH08W-OzIf_iLUu8MHq9g","width":426}],"title":"\u547d\u3070\u3063\u304b\u308a / \u306c\u3086\u308a(cover) - Eve","videoId":"5CjA4W6BJeU","views":"27M"}],"title":"Your favorites"}];
    }
    homes = value;
    console.log(homes);
  });

  const scrollLeft = (n) => {
    const count = Math.floor((window.innerWidth / 100 * 81) / (window.innerWidth / 50 * 7));
    const gap = contents[n].scrollLeft % (window.innerWidth / 50 * 7);
    const left = contents[n].scrollLeft - window.innerWidth / 50 * 7 * count - gap;
    contents[n].scroll({
      top: 0,
      left: left,
      behavior: 'smooth'
    });
  };

  const scrollRight = (n) => {
    const count = Math.floor((window.innerWidth / 100 * 81) / (window.innerWidth / 50 * 7));
    const gap = contents[n].scrollLeft % (window.innerWidth / 50 * 7);
    const left = contents[n].scrollLeft + window.innerWidth / 50 * 7 * count - gap;
    contents[n].scroll({
      top: 0,
      left: left,
      behavior: 'smooth'
    });
  };

  const scrolled = (n) => {
    console.log(contents[n].scrollLeft);
    const left = contents[n].scrollLeft;
    if(left >= contents[n].scrollWidth - (window.innerWidth / 100 * 81)) {
      scrollBtnR[n].classList.add('disabled');
    } else if(left <= 0) {
      scrollBtnL[n].classList.add('disabled');
    } else {
      scrollBtnL[n].classList.remove('disabled');
      scrollBtnR[n].classList.remove('disabled');
    }
  }
</script>

<main>
  {#each homes as block, i}
    <div class="blockContainer">
      <div class="titleContainer">
        <span class="title">{block.title}</span>
        <div class="scrollContainer">
          <img src="./icons/scroll-left.svg" alt="scroll to left" bind:this={scrollBtnL[i]} class="scrollBtn disabled" on:click={() => { scrollLeft(i) }}>
          <img src="./icons/scroll-right.svg" alt="scroll to right" bind:this={scrollBtnR[i]} class="scrollBtn" on:click={() => { scrollRight(i) }}>
        </div>
      </div>
      <div class="contentsContainer" bind:this={contents[i]} on:scroll={() => { scrolled(i) }}>
        {#each block.contents as data, j}
          <DefaultCuration data={data} isLast={j == block.contents.length - 1} />
        {/each}
      </div>
    </div>
  {/each}
</main>

<style>
  main {
    padding-top: 12vh;
  }
  
  .blockContainer {
    margin-bottom: 5vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .titleContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .scrollContainer {
    display: flex;
    flex-direction: row;
  }

  .scrollBtn {
    cursor: pointer;
    margin-left: 0.5vw;
    height: 4vh;
  }

  .scrollBtn.disabled {
    cursor: default;
    opacity: 0.5;
  }

  .contentsContainer {
    margin-top: 3vh;
    overflow-y: hidden;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .contentsContainer::-webkit-scrollbar {
    display: none;
  }

  .title {
    font-size: 4.5vh;
    font-weight: 700;
  }
</style>