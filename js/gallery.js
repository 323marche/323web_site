document.addEventListener('DOMContentLoaded', function() {
  const closeImgSrc = 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png';
  const instaImgSrc = 'img/icon/instagram-logo-24.png';

  const cardDataList = [
        // 複数イメージSumple
    {
      id: 0,
      title: '',
      img: 'img/',
      description: '',
      link: 'https://www.instagram.com/wafuka0514/?igsh=bGNhN2Fxa2R1dXA2',
      imgSrcs: ['img/', 'img/', 'img/']
    },

      // 複数のカードデータのリスト
        {
      id: 2,
      title: 'ippo＆逸穂',
      img: 'img/ippo.jpg',
      description: '妖精が宿るヒンメリと藁書の販売します。<br>藁書体験うちわ仕上げ😊体験1,000円です。',
      link: 'https://www.instagram.com/ippo_7oco/?igsh=MWQ1a3liaWU4bmJwbA%3D%3D&utm_source=qr',
      imgSrcs: ['img/ippo2.jpg','img/ippo.jpg', 'img/ippo3.jpg', 'img/ippo4.jpg']
    },
    {
      id: 3,
      title: '颯樹~soujyu~',
      img: 'img/souju714.jpg',
      description: 'ハンドメイドアクセサリー、天然石、雑貨、プリザーブドフラワー、販売ワークショップ幸せのお手伝いが出来ますように。<br>あなただけの1点を探してください',
      link: 'https://www.instagram.com/soujyu_3/?igsh=eXZlenFob2pub2Qz',
      imgSrcs: ['img/souju714.jpg']
    },
    {
      id: 4,
      title: 'コスメスペース',
      img: 'img/cosmespace714.2.jpg',
      description: 'これからの季節におすすめのスキンケアやコスメをご紹介♪<br>お肌診断やポイントメイク、ハンドマッサージなど楽しいコーナーもございます!ミニサンプルプレゼント♪',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/cosmespace714.2.jpg', 'img/cosmespace714.3.jpg', 'img/cosmespace714.2.jpg']
    },
    {
      id: 5,
      title: '令翠学鑑定士 白明光令翠(ﾚｲｽｲｶﾞｸｶﾝﾃｲｼ ﾊｸﾒｲｺｳﾚｲｽｲ)',
      img: 'img/reisuigaku2.jpg',
      description: '令翠学ワンポイント鑑定　20分　2000円',
      link: 'https://www.instagram.com/hakumeikoreisui?igsh=bTd5Z3V1MG5wNHhj&utm_source=qr',
      imgSrcs: ['img/reisuigaku2.jpg', 'img/reisuigaku3.jpg', 'img/reisuigaku1.jpg']
    },
    {
      id: 6,
      title: 'めぐみや',
      img: 'img/megumiya.jpg',
      description: '手作り雑貨を販売します',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/megumiya.jpg']
    },
    {
      id: 7,
      title: 'はなみずき',
      img: 'img/hanamizuki2.jpg',
      description: '困っていることはありませんか？どうすれば良いのかお話を聞きながら一緒に悩み事を解決できるようお手伝いします。<br>料金20分¥2,000延長10分¥1,000',
      link: 'https://www.instagram.com/hanamizukifumiko/',
      imgSrcs: ['img/hanamizuki2.jpg', 'img/hanamizuki3.jpg', 'img/hanamizuki4.jpg', 'img/hanamizuki1.jpg']
    },
    {
      id: 8,
      title: 'Manacapua',
      img: 'img/Manacapua2.jpg',
      description: '魂の地図リーディング/インナーチャイルドセラピー<br>※魂の地図リーディング　20分2,000円<br>インナーチャイルドセラピー　3枚引20分2,000円、6枚引30分3,000円',
      link: 'https://www.instagram.com/manacapua.kirara/?igsh=MW1lM2VuZzE4ZHNvYg%3D%3D',
      imgSrcs: ['img/Manacapua2.jpg', 'img/manacapua.jpg']
    },
    {
      id: 9,
      title: 'ワイヤーアートと和雑貨の店 『和んなか』',
      img: 'img/wannnaka2.jpg',
      description: 'ワイヤーアートで製作したインテリア雑貨を中心に、生活を彩るアイテムをお届けします。<br>ワイヤーアート雑貨、水引細工のポチ袋・祝儀袋、ビーズアクセサリー',
      link: 'https://www.instagram.com/wannaka_wireart_wazakka/?igsh=cHlla2RkcGV4MzZ0',
      imgSrcs: ['img/wannnaka2.jpg', 'img/wannnaka1.jpg']
    },
    {
      id: 10,
      title: 'たけのこ',
      img: 'img/takenoco.jpg',
      description: 'ポリマークレイ粘土を主に使った創作雑貨を販売します。',
      link: 'https://www.instagram.com/takenoco_2000/?igsh=MTJ4NncyZXBscnUzbQ%3D%3D',
      imgSrcs: ['img/takenoco.jpg', 'img/takenoko3.jpg']
    },
    {
      id: 11,
      title: '無痛庵',
      img: 'img/mutsuan714.png',
      description: '立ったまま整体体験や電磁波対策相談及びグッズの販売',
      link: 'https://www.instagram.com/mutuuan_seitai/',
      imgSrcs: ['img/mutsuan714.png']
    },
    {
      id: 12,
      title: 'aimin',
      img: 'img/ai714.jpg',
      description: '可愛いとほのぼのを、コンセプトに製作しています。是非、手に取って頂ければ嬉しいです♪handmadeピアスクラフトテープ雑貨販売',
      link: 'https://www.instagram.com/aimin927/?igsh=ZnB4a2dxb2g5NXFl&utm_source=qr',
      imgSrcs: ['img/ai714.jpg']
    },
    {
      id: 13,
      title: 'GUILT',
      img: 'img/guilt2.jpg',
      description: 'アストロダイス占い。蓮花作りのワークショップ',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/guilt2.jpg', 'img/guilt.jpg']
    },
    {
      id: 14,
      title: 'かなつむり',
      img: 'img/kanatumuri2.jpg',
      description: 'ｶﾞﾗｽﾋﾞｰｽﾞを使った耳飾りやﾌﾞﾛｰﾁの作品販売と、ｷｯｸﾎﾞｸｼﾝｸﾞﾐｯﾄ打ち体験<br>【自己紹介】耳飾り：個性的なのに挑戦しやすくて、ピアス穴がなくても楽しめて、他の人とちょっと差をつけられる。そんな耳飾りをお届けします。<br>ミット打ち体験：キックボクシングのトレーニングの1つ”ミット打ち”。それに特化したフィットネスで、実は流行ってきてます（笑）パチン☆ミと決まるとめちゃくちゃスッキリ!筋肉アクセサリー作家という異名を掲げて、あなたのキック受け止めます👍<br>手ぶらで参加できますので気になったらぜひチャレンジしてみて下さい。',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/kanatumuri2.jpg', 'img/kanatumuri.jpg']
    },
    {
      id: 15,
      title: 'Alba',
      img: 'img/alba_July.png',
      description: '日常にひとつ「新しい」を取り入れ、普段とは違う自分を過ごしてみませんか？変わらなくていい、そのままでいい。ただ「少し」昨日より新しいだけ♪',
      link: 'https://www.instagram.com/alba_aviz/',
      imgSrcs: ['img/alba-paint.png', 'img/alba-vr.png', 'img/alba_July.png']
    },
    {
      id: 16,
      title: '温熱療法【美温】',
      img: 'img/terumi.jpg',
      description: '温熱療法『イトオテルミー』療法とは：身体のぬくもりと刺激を与えることで自然治癒力に働きかけ、病態の改善、病気の予防、疲労回復、健康増進を図る温熱刺激療法です。',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/terumi2.jpg', 'img/terumi.jpg']
    },
    {
      id: 17,
      title: '大和五條MARUSE',
      img: 'img/yamatogojou2.jpg',
      description: 'ジェラート&レモンスカッシュ',
      link: 'https://www.instagram.com/marusegroup/',
      imgSrcs: ['img/yamatogojou2.jpg', 'img/yamatogojou3.png', 'img/yamatogojou1.jpg']
    },
    {
      id: 18,
      title: "colorful's workshop",
      img: 'img/colorfuls2.jpg',
      description: 'スニーカーペイント（体験）<br>instagramアカウントの内容はまだ作成中です。また更新していきます。',
      link: 'https://www.instagram.com/colorfuls_workshop?igsh=cGk3ZGxrOGR4b3gw&utm_source=qr',
      imgSrcs: ['img/colorfuls2.jpg', 'img/colorfuls1.jpg']
    },
    {
      id: 19,
      title: "プライベートサロンpour toi",
      img: 'img/pour toi.jpg',
      description: '無料ハンドケア、角質チェック<br>スキンケアトライアル販売(1000円〜2000円)',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/pour toi.jpg']
    },
    {
      id: 20,
      title: "倖",
      img: 'img/koh.jpg',
      description: 'ガラスと樹脂粘土を使用したアクセサリーや小物の販売<br>値段　500〜2000円',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/koh.jpg']
    },
    {
      id: 21,
      title: "moonbow",
      img: 'img/moonbow.jpg',
      description: '羊毛フェルトや手作り小物１００円〜',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/moonbow.jpg']
    },
    {
      id: 22,
      title: "紀の国カイロプラクティック",
      img: 'img/kinokuni2.jpg',
      description: '骨盤調整（1,000円、税込）<br>全身調整（2,000円、税込）<br>小顔調整（1,500円、税込）',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/kinokuni2.jpg', 'img/kinokuni3.jpg', 'img/kinokuni1.jpg']
    },
    {
      id: 23,
      title: "麗宝 -Reihow-",
      img: 'img/reihow3.jpg',
      description: '美と健康をメインテーマに理論に基づいた 驚きのアイテムをご紹介！<br>ぜひ ご自身の目で 確かめてみて下さい',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/reihow1.jpg', 'img/reihow2.jpg', 'img/reihow3.jpg']
    },
    {
      id: 24,
      title: "Y.room",
      img: 'img/Yroom.jpg',
      description: '手織りしながら、ブローチ、ターバン、マフラー等々作っています。<br>私しか織れない　色使い　オリジナルを　心がけて、織りの楽しさをお伝え出来ればと思っています',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/Yroom2.jpg', 'img/Yroom3.jpg', 'img/Yroom.jpg']
    },
    {
      id: 25,
      title: "未病診断士よっしー",
      img: 'img/mibyo.png',
      description: '波動の器械を使って臓器の不調をお調べします！<br>20分2,000円／45分4,000円',
      link: 'https://www.instagram.com/mibyoshindan_yossy/',
      imgSrcs: ['img/mibyo.png']
    }


    // 他のカードデータもここに追加
  ];

  // カード要素を取得
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // カードごとのIDを取得
    const cardId = parseInt(card.getAttribute('data-id'), 10);

    // カードがクリックされたときの処理
    card.addEventListener('click', function() {
      // 対応するカードデータを取得
      const cardData = cardDataList.find(data => data.id === cardId);

      if (cardData) {
        // 既存のcard-open-wrapperを削除
        const existingWrapper = document.querySelector('.card-open-wrapper');
        if (existingWrapper) {
          document.body.removeChild(existingWrapper);
        }

        // card-open-wrapper 要素を作成
        const cardOpenWrapper = document.createElement('div');
        cardOpenWrapper.classList.add('card-open-wrapper');

        // wrap-img-container 要素を作成
        const wrapImgContainer = document.createElement('div');
        wrapImgContainer.classList.add('wrap-img-container');

        // prev ボタンを作成
        const prevButton = document.createElement('button');
        prevButton.classList.add('prev');
        prevButton.textContent = 'その他のお写真';

        // wrap-img 要素を作成
        const wrapImg = document.createElement('img');
        wrapImg.classList.add('wrap-img');
        wrapImg.src = cardData.imgSrcs[0];
        wrapImg.alt = '';

        // next ボタンを作成
        const nextButton = document.createElement('button');
        nextButton.classList.add('next');
        nextButton.textContent = '次の写真へ';

        wrapImgContainer.appendChild(prevButton);
        wrapImgContainer.appendChild(wrapImg);
        wrapImgContainer.appendChild(nextButton);

        // card-open 要素を作成
        const cardOpen = document.createElement('div');
        cardOpen.classList.add('card-open');

        // close ボタンを作成
        const closeButton = document.createElement('button');
        closeButton.classList.add('close');
        const closeImg = document.createElement('img');
        closeImg.src = closeImgSrc;
        closeImg.alt = '';
        closeButton.appendChild(closeImg);
        closeButton.addEventListener('click', function() {
          closeCardOpen(cardOpenWrapper);
        });

        // h3 タイトルを作成
        const titleElement = document.createElement('h3');
        titleElement.textContent = cardData.title;

        // p 説明文を作成
        const descriptionElement = document.createElement('p');
        // descriptionの改行を<br>に変更する
        const descriptionText = cardData.description.replace(/\n/g, '<br>');
        descriptionElement.innerHTML = descriptionText;

        // site ボタンを作成
        const siteButton = document.createElement('button');
        siteButton.classList.add('site');
        const siteLink = document.createElement('a');
        siteLink.href = cardData.link;
        siteLink.target = '_blank';
        siteLink.rel = 'noreferrer noopener';
        const instaImg = document.createElement('img');
        instaImg.classList.add('insta');
        instaImg.src = instaImgSrc;
        instaImg.alt = '';
        siteLink.appendChild(instaImg);
        const siteText = document.createElement('p');
        siteText.textContent = 'Instagram or SiteへGo!';
        siteLink.appendChild(siteText);
        siteButton.appendChild(siteLink);

        // card-open に要素を追加
        cardOpen.appendChild(closeButton);
        cardOpen.appendChild(titleElement);
        cardOpen.appendChild(descriptionElement);
        cardOpen.appendChild(siteButton);

        // card-open-wrapper に要素を追加
        cardOpenWrapper.appendChild(wrapImgContainer);
        cardOpenWrapper.appendChild(cardOpen);

        // body に card-open-wrapper を追加
        document.body.appendChild(cardOpenWrapper);

        // 詳細表示要素を表示
        setTimeout(function() {
          cardOpenWrapper.classList.add('active');
        }, 50); // 少し待ってから表示することでフェードイン効果を加える

        // スライドショー機能の実装
        let currentImageIndex = 0;

        function updateImage() {
          wrapImg.src = cardData.imgSrcs[currentImageIndex];
        }

        prevButton.addEventListener('click', function() {
          currentImageIndex = (currentImageIndex - 1 + cardData.imgSrcs.length) % cardData.imgSrcs.length;
          updateImage();
        });

        nextButton.addEventListener('click', function() {
          currentImageIndex = (currentImageIndex + 1) % cardData.imgSrcs.length;
          updateImage();
        });

        // card-open-wrapper の外側をクリックしたときに閉じるイベントリスナーを追加
        document.addEventListener('click', outsideClickListener);

        function outsideClickListener(event) {
          if (!cardOpenWrapper.contains(event.target) && !card.contains(event.target)) {
            closeCardOpen(cardOpenWrapper);
            document.removeEventListener('click', outsideClickListener);
          }
        }
      }
    });
  });

  // 詳細表示を閉じる関数
  function closeCardOpen(cardOpenWrapper) {
    cardOpenWrapper.classList.remove('active');
    setTimeout(function() {
      document.body.removeChild(cardOpenWrapper);
    }, 800); // フェードアウトの時間を考慮して遅延させる
  }
});