# Architecture

## プロジェクト概要

Astroベースの静的サイトジェネレーターを使用したホームページです。

## 技術スタック

### コア技術

- **Astro** - 部分的ハイドレーションをサポートする静的サイトジェネレーター
- **MDX** - JSXサポート付きの拡張Markdown
- **React** - インタラクティブコンポーネント用
- **Tailwind CSS** - CSSフレームワーク

### 開発ツール

- **Biome** - LintとFormatter
- **textlint** - 記事のLint
- **mise** - 開発環境マネージャー
- **Bun** - パッケージマネージャー

### コンテンツ処理

- **KaTeX** - 数式レンダリング
- **rehype-pretty-code** - シンタックスハイライト
- **rehype-katex** - KaTeX連携
- **remark-math** - 数式パース

## ディレクトリ構成

```text
.
├── src/
│   ├── assets/         # 静的アセット（画像など）
│   ├── components/     # 再利用可能なコンポーネント
│   ├── content/        # ブログ記事（MDX）
│   ├── layouts/        # ページレイアウト
│   ├── pages/         # ルート定義
│   └── styles/        # グローバルスタイル
├── public/            # 静的ファイル
└── .github/          # GitHub設定とワークフロー
```

## ワークフロー

### CI/CDパイプライン

GitHub Actionsを使用して、テスト、ビルド、デプロイを自動化しています。

1. **CIワークフロー** (`ci.yml`)
   - Biomeによるコードフォーマットチェック
   - textlintによるコンテンツ検証
   - ビルド検証
   - マトリックス戦略による並列実行
   - status-checkジョブでの結果集約

2. **デプロイワークフロー** (`deploy.yml`)
   - mainブランチでのCI成功後に実行
   - 本番用サイトのビルド
   - GitHub Pagesへのデプロイ
   - 依存関係のキャッシュ最適化

3. **依存関係管理** (Renovate)
   - 依存関係の自動更新
   - パッケージタイプ別のグループ化
   - 安全な更新の自動マージ
   - 週次メンテナンススケジュール
   - 安定性期間の確保
