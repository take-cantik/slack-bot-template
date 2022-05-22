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
