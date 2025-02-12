# kattyan-dev

個人ブログ兼ポートフォリオサイトです。

## 前提条件

- [mise](https://mise.jdx.dev/) - 開発環境マネージャー
- [bun](https://bun.sh/) - JavaScriptツールチェーン

## セットアップ

```bash
# リポジトリのクローン
git clone git@github.com:sou1118/kattyan.dev.git
cd kattyan.dev

# 開発環境のセットアップ
mise i

# 依存関係のインストール
bun install
```

## 開発

```bash
# 開発サーバーの起動
bun run dev

# ビルド
bun run build

# プレビュー
bun run preview
```

## 品質管理

```bash
# コードのチェック
bun run check

# コードの自動修正
bun run check:fix

# 記事のチェック
bun run textlint

# 記事の自動修正
bun run textlint:fix
```

## ブログ記事の作成

1. `src/content/blog/` に新しいMDXファイルを作成
2. 以下のフロントマターを設定

```md
---
title: 記事のタイトル
publishDate: 2024-02-12
description: 記事の説明
tags: ["tag1", "tag2"]
---
```

### 記事内で使用可能な機能

- 数式（KaTeX）
- シンタックスハイライト
- MDXコンポーネント
- Tailwind CSS

## デプロイ

mainブランチへのプッシュで自動的にGitHub Pagesへデプロイされます。

## アーキテクチャ

詳細なアーキテクチャについては[ARCHITECTURE.md](./ARCHITECTURE.md)を参照してください。

## ライセンス

[LICENSE](./LICENSE)を参照してください。

## 開発ポリシー

- リリースは自動化（GitHub Actions + GitHub Pages）
- 依存関係の更新は自動化（Renovate）
- コードのLintとFormatはBiomeで
- 記事の品質管理はtextlintで
