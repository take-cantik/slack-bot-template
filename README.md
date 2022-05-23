# slack bot template

## 使用技術

- Nodejs
- TypeScript
- Firebase Functions
- (express)
- (@slack/bolt)

## 動作

このbotは

- 「/test」コマンドで"test"を返す
- "ahiahi"というメッセージに反応して"Hello"を返す

を行うことが可能です

<img width="600" alt="スクリーンショット 2022-05-22 21 22 03" src="https://user-images.githubusercontent.com/50654077/169695038-4e88e49c-1bff-48e4-a431-d4de75ed426a.png">

<img width="600" alt="スクリーンショット 2022-05-22 21 23 12" src="https://user-images.githubusercontent.com/50654077/169695041-d4ea9eda-d5cd-4205-9cdc-48f42d076c3a.png">



## Usage

### Templateの導入

このリポジトリの「Use this template」を押して自分のリポジトリを作成

<img width="600" alt="スクリーンショット 2022-05-22 21 12 23" src="https://user-images.githubusercontent.com/50654077/169694621-c0f27a2d-46cd-4d7d-aa74-e863c5ea82f4.png">

### Slack bot の作成

#### アプリの作成

以下のリンクから「Create New App」を押してSlack botを作成
任意のアプリ名、ワークスペースを入力

https://api.slack.com/

<img width="600" alt="スクリーンショット 2022-05-22 21 19 09" src="https://user-images.githubusercontent.com/50654077/169694759-3dea6d2d-dd44-4669-b058-c589b2beab6d.png">

#### Scopeの設定

サイドバーの「OAuth & Permissions」の「Scopes」からbotの権限を設定します
今回は追加したものは以下の通りです
(テストしながら作ったので、これ必要なくね？みたいなのがありましたらissueに追加しておいてください🙏)

- channel:history
- channel:read
- chat:write
- chat:write.customize
- chat:write.public
- commands
- groups:history
- im:history
- mpim:history

<img width="548" alt="スクリーンショット 2022-05-22 21 32 04" src="https://user-images.githubusercontent.com/50654077/169695280-a177c4ba-dd88-4860-b2d0-6f2203495a6b.png">

#### インストール
「OAuth & Permissions」の上に戻り「Install to Workspace」を選択

<img width="600" alt="スクリーンショット 2022-05-22 21 38 32" src="https://user-images.githubusercontent.com/50654077/169695672-27f8d702-e512-4d9f-9bfc-9c244cd66be9.png">

### 環境変数の設定

botを作成したらtokenをenvファイルに記述します

「Basic Information」の「App Credentials」から「Signing Secret」を

<img width="600" alt="スクリーンショット 2022-05-23 13 44 48" src="https://user-images.githubusercontent.com/50654077/169745804-a963d099-5240-4b03-9c61-16a7ed916ac7.png">

「OAuth & Permissions」から「Bot User OAuth Token」を

<img width="600" alt="スクリーンショット 2022-05-23 13 45 15" src="https://user-images.githubusercontent.com/50654077/169745377-4a3e3f90-d8d3-46c6-a20b-08ea3695b537.png">

をそれぞれ `functions/.env.example` を参考に `functions/.env` を作成し追加します。

```.env
SLACK_SIGNING_SECRET=[Signing Secret]
SLACK_ACCESS_TOKEN=[Bot User OAuth Token]
```

### Firebaseの設定

以下のリンクから新しいプロジェクトを追加します。
プロジェクト作成の手順に従い、初期設定します。

https://console.firebase.google.com/

サイドメニューの「Functions」へ行き、Functionsを使うためプランを「Blaze 従量制」に変更します。

<img width="877" alt="スクリーンショット 2022-05-23 13 58 58" src="https://user-images.githubusercontent.com/50654077/169746735-c323d3b8-8264-431c-ac9a-deb3de74febe.png">

<img width="917" alt="スクリーンショット 2022-05-23 13 59 39" src="https://user-images.githubusercontent.com/50654077/169746742-e2e7d468-2cb4-43ab-8852-53184774fd8b.png">

その後、「はじめる」Functionsの設定をします
ロケーションは「asia-northeast1」にします

初期設定を終えたら、FirebaseのプロジェクトIDをコードに追加します。

<img width="600" alt="スクリーンショット 2022-05-23 14 07 09" src="https://user-images.githubusercontent.com/50654077/169747755-5eda6304-b2de-4f5f-98e3-c6ec49ec56ea.png">

`.firebaserc` に記述します。

```

{
  "projects": {
    "default": "[プロジェクトID]"
  }
}
```

### デプロイ

ここまで終わったらいよいよデプロイです。
`firebase-tools`が入っていいない場合には追加し、ログインしてください

```
$ npm i -g firebase-tools

or

$ yarn global add firebase-tools
```

```
$ firebase login
```

ここまで完了したらデプロイをします。
以下のコマンドを入力してください

```
$ cd functions/
$ firebase deploy --only functions
```

少し時間がかかりますが、これで完了です。

### Slack bot にコマンドを追加

以下のリンクから先ほど作成したアプリのページへいき、コマンドを追加します

https://api.slack.com/

サイドメニューの「Slash Commands」から「Create New Command」を選択します

<img width="736" alt="スクリーンショット 2022-05-23 14 30 02" src="https://user-images.githubusercontent.com/50654077/169749746-e12262f3-6ec0-4f76-953b-6418220c0de1.png">

Commandに"/test"、
Request URLに、先ほどデプロイしたFunctionsのurlの末尾に"/events"を追加したものを追加します

```
例) https://asia-northeast1-[your-project-id].cloudfunctions.net/slackBot/events
```

Short Description、Usage Hintを追加して「Save」を押します。

<img width="544" alt="スクリーンショット 2022-05-23 14 37 48" src="https://user-images.githubusercontent.com/50654077/169750660-406397fd-12b4-4b7e-96e4-d02a4f366a4d.png">

これで完了です。

### 動作確認

/test コマンド、"ahiahi"を入力すると正しく動作されていることを確認してください。
