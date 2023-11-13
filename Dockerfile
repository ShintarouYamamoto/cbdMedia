# Node.jsのベースイメージを指定
FROM node:latest

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのコードをコピー
COPY . .

# 3000ポートを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "run", "dev"]
